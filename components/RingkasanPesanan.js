"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "@/lib/helper";

export default function RingkasanPesanan({ cartItems, shippingDetail }) {
  let subTotal = 0;
  let shippingCost = 0;
  // const products = useSelector((state) => state.produk.products);
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  useEffect(() => {
    // buat ambil image,mog, additional_info dari db
    const serverProducts = getProducts();
    serverProducts.then((products) => {
      const tmp = [];
      cartItems.map((item) => {
        const produkData = products.filter((prod) => prod.id === item.id);
        const newData = {
          ...item,
          moq: produkData[0].moq,
          image: produkData[0].image,
          additional_info: produkData[0].additional_info,
        };
        tmp.push(newData);
      });
      setPurchasedProducts(tmp);
    });
  }, [cartItems]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-6 pb-4">
        {purchasedProducts.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between"
            >
              <div className="flex flex-col md:flex-row gap-4 text-neutral-600">
                <div className="relative w-12 h-10">
                  <Image
                    fill={true}
                    alt=""
                    src={item.image || "https://via.placeholder.com/40"}
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p>{item.name}</p>
                  <p>
                    {item.quantity.toLocaleString("en-ID")} x Rp
                    {item.price.toLocaleString("en-ID")}
                  </p>
                  <p>{item.additional_info || ""}</p>
                </div>
              </div>
              <div>
                <p className="text-right">
                  Rp{item.totalPrice.toLocaleString("en-ID")}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-between border-t py-4">
        <p className="flex">Subtotal</p>
        {cartItems.map((item) => {
          subTotal += item.price * item.quantity;
        })}
        <p className="flex text-right">Rp{subTotal.toLocaleString("en-ID")}</p>
      </div>
      <div className="flex flex-col justify-between border-t py-4">
        <div className="flex flex-row justify-between mb-4">
          <p className="flex">Biaya Pengiriman (akan diinfokan kemudian)</p>
          <p className="flex text-right">
            Rp{shippingCost.toLocaleString("en-ID")}
          </p>
        </div>
        <p className="flex">
          Tujuan Pengiriman : {shippingDetail.kota}, {shippingDetail.provinsi}
        </p>
      </div>
      <div className="flex flex-row justify-between border-t py-4">
        <h1 className="flex signika text-xl">Total</h1>
        <h1 className="flex text-right signika text-xl">
          Rp
          {subTotal.toLocaleString("en-ID") +
            shippingCost.toLocaleString("en-ID")}
        </h1>
      </div>
    </div>
  );
}
