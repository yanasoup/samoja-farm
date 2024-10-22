"use client";
import { useSelector } from "react-redux";
import RingkasanPesanan from "./RingkasanPesanan";
import { useEffect, useState } from "react";
import { cartActions } from "@/store/cart-slice";
import { orderActions } from "@/store/order-slice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { getCities } from "@/store/common-actions";

let allcity = [];
let allprovince = [];
export default function FormKonfirmasiOrder() {
  const isOrderSaved = useSelector((state) => state.order.orderSaved);
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const buyerInfo = cartState.buyerInfo;
  const [shippingDetail, setShippingDetail] = useState(buyerInfo);
  const [cities, setCities] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    let propinsi = [];
    let kota = [];
    kota = getCities();
    kota.then((resp) => {
      allcity = JSON.parse(JSON.stringify(resp));

      setCities(allcity);
      resp.map((row) => {
        propinsi.push(row.province);
      });
      const uniquePropinsi = [...new Set(propinsi.map(JSON.stringify))].map(
        JSON.parse
      );
      setProvinces(uniquePropinsi);
      allprovince = uniquePropinsi;
    });
  }, []);

  function infoChangeHandler(e) {
    if (e.target.name === "kota") {
      cityChangeHandler(e);
    }
    if (e.target.name === "provinsi") {
      handleProvinceChanges(e);
    }

    setShippingDetail((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    dispatch(cartActions.setBuyerInfo(shippingDetail));
  }
  function cityChangeHandler(e) {
    const city = cities.filter((ct) => ct.name === e.target.value);
    setSelectedProvince(city[0].province.name);
    setShippingDetail((prevState) => {
      return {
        ...prevState,
        provinsi: city[0].province.name,
      };
    });
    dispatch(cartActions.setBuyerInfo(shippingDetail));
  }
  function handleProvinceChanges(e) {
    const filteredCities = allcity.filter(
      (city) => city.province.name === e.target.value
    );
    setSelectedProvince(e.target.value);
    setCities(filteredCities);
    setSelectedCity(filteredCities[0].name);
    setShippingDetail((prevState) => {
      return {
        ...prevState,
        kota: filteredCities[0].name,
      };
    });
  }

  function confirmOrderHandler() {
    dispatch(orderActions.setOrderConfirm(true));
    dispatch(cartActions.updateChangeState(true));
  }

  if (isOrderSaved) {
    return (
      <div className="flex flex-col">
        <div className="shipping-contact flex flex-col gap-2 bg-green-100 rounded p-4">
          <p className="text-lg text-green-700">Pesanan berhasil disimpan</p>
          <p>
            Terimakasih atas pesanan anda!. Kami akan memproses pesanan Anda
            setelah pembayaran kami terima. Silahkan Upload bukti pembayaran
            anda melalui menu{" "}
            <Link href="/konfirmasi-pembayaran">Konfirmasi Pembayaran</Link>
          </p>
          <p>
            Kami telah mengirimkan Email konfirmasi berisi detail pesanan ke
            email Anda.{" "}
            <span className="text-green">
              Silahkan Klik link di email tersebut agar pesanan anda kami Proses
            </span>
            . Anda bisa memantau progress pesanan anda melalui menu{" "}
            <Link href="/lacak-order">Lacak Pesanan</Link>
          </p>
        </div>
      </div>
    );
  } else if (!isOrderSaved) {
    if (cartState.totalQuantity <= 0) {
      return (
        <div className="text-lg h-40 text-neutral-600 text-center">
          <p>Keranjang Belanja Anda masih kosong</p>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:basis-3/5 gap-4 pr-8">
            <div className="shipping-contact flex flex-row gap-2">
              <h2 className="text-xl">1.</h2>
              <h2 className="text-xl">Informasi Kontak</h2>
            </div>
            <div className="flex flex-col gap-2 pl-6 border-l">
              <p className="text-neutral-500">
                <span className="font-bold">
                  Harap diisi dengan alamat email yang valid
                </span>
                . Kami akan menggunakan alamat email ini untuk mengirimkan
                rincian pesanan & memberitahukan update progress pesanan anda
              </p>
              <p>
                <input
                  name="email"
                  className="border border-neutral-300 py-4 px-2 rounded-sm w-full"
                  type="email"
                  placeholder="Alamat Email"
                  onChange={infoChangeHandler}
                  onBlur={infoChangeHandler}
                />
              </p>
            </div>

            <div className="shipping-contact flex flex-row gap-2">
              <h2 className="text-xl">2.</h2>
              <h2 className="text-xl">Alamat Pengiriman</h2>
            </div>
            <div className="flex flex-col gap-2 pl-6 border-l">
              <p className="text-neutral-500">
                Masukan Nama, Nomor Telepon dan Alamat lengkap penerima
              </p>
              <div className="input-group flex flex-col md:flex-row gap-4">
                <input
                  name="namaDepan"
                  className="flex border border-neutral-300 py-4 px-2 rounded-sm basis-1/2"
                  type="text"
                  placeholder="Nama Depan"
                  onChange={infoChangeHandler}
                  onBlur={infoChangeHandler}
                />
                <input
                  name="namaBelakang"
                  className="flex border border-neutral-300 py-4 px-2 rounded-sm basis-1/2"
                  type="text"
                  placeholder="Nama Belakang"
                  onChange={infoChangeHandler}
                  onBlur={infoChangeHandler}
                />
              </div>
              <div className="input-group flex flex-col gap-4">
                <input
                  name="alamat"
                  className="flex border border-neutral-300 py-4 px-2 rounded-sm basis-1/2"
                  type="text"
                  placeholder="Alamat"
                  onChange={infoChangeHandler}
                  onBlur={infoChangeHandler}
                />
                <div className="input-group flex flex-col md:flex-row gap-4">
                  {cities.length > 0 && (
                    <select
                      onChange={infoChangeHandler}
                      onBlur={infoChangeHandler}
                      name="kota"
                      placeholder="Kota"
                      className="flex bg-white border border-neutral-300 py-4 px-2 rounded-sm basis-1/2"
                    >
                      {cities.map((ct) => {
                        return (
                          <option key={ct.id} value={ct.name}>
                            {ct.name}
                          </option>
                        );
                      })}
                    </select>
                  )}

                  {provinces.length > 0 && (
                    <select
                      onChange={infoChangeHandler}
                      onBlur={infoChangeHandler}
                      name="provinsi"
                      placeholder="Provinsi"
                      value={selectedProvince || ""}
                      className="flex bg-white border border-neutral-300 py-4 px-2 rounded-sm basis-1/2"
                    >
                      {provinces.map((pv) => {
                        return (
                          <option key={pv.id} value={pv.name}>
                            {pv.name}
                          </option>
                        );
                      })}
                    </select>
                  )}
                </div>
                <p className="text-neutral-500 text-left">
                  Nomor Telepon / Whatsapp / Telegram
                </p>
                <div className="input-group flex flex-col md:flex-row gap-4">
                  <input
                    name="noKontak"
                    className="flex border border-neutral-300 py-4 px-2 rounded-sm basis-1/2"
                    type="text"
                    placeholder="No. Telegram Aktif"
                    onChange={infoChangeHandler}
                    onBlur={infoChangeHandler}
                  />
                  <input
                    name="kodePos"
                    className="flex border border-neutral-300 py-4 px-2 rounded-sm basis-1/2"
                    type="number"
                    placeholder="Kode Pos"
                    onChange={infoChangeHandler}
                    onBlur={infoChangeHandler}
                  />
                </div>
              </div>
            </div>
            <div className=" text-right">
              <button
                onClick={confirmOrderHandler}
                className="w-60 text-white rounded-3xl bg-hijau py-3 px-4 hover:bg-neutral-600 "
              >
                Konfirmasi Pesanan
              </button>
            </div>
          </div>
          <div className="pl-4 md:basis-2/5 border-t mt-4 md:mt-0">
            <h2 className="text-lg py-4">Ringkasan Order</h2>
            <p className="hidden py-4">No Order: {cartState.sessionId}</p>
            <RingkasanPesanan
              cartItems={cartState.items}
              shippingDetail={shippingDetail}
            />
          </div>
        </div>
      );
    }
  }
}
