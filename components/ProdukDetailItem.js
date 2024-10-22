"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "@/store/cart-slice";

export default function ProdukDetailItem({ item }) {
  const [orderQuantity, setOrderQuantity] = useState(0);
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function quantityChangeHandler(e) {
    setOrderQuantity(parseInt(e.target.value));
  }
  function addToCartHandler() {
    const newItem = {
      id: item.id,
      price: item.price,
      quantity: orderQuantity,
      name: item.name,
    };
    dispatch(cartActions.addToCart(newItem));
  }

  useEffect(() => {
    setOrderQuantity(parseInt(item.moq));
  }, [item]);

  //   console.log("item", item);

  return (
    <div className="flex flex-col md:flex-row mb-4">
      <div className="relative w-full h-[400px] lg:min-h-[400px] md:w-[50%] ">
        <Image
          alt={item.name || ""}
          fill={true}
          src={item.image || "https://via.placeholder.com/400"}
          className="object-cover object-top rounded-xl"
          priority={true}
        />
      </div>
      <div className="md:pl-8">
        <h1 className="mt-8 text-4xl">{item ? item.name : ""}</h1>
        <div className="mt-8">
          <h1 className="text-2xl text-hijau">
            Rp
            {item && item.price ? item.price.toLocaleString("en-ID") : ""}
            <span className="text-neutral-600 text-lg">
              / {item ? item.unit : ""}
            </span>
          </h1>
          <p className="leading-5 mt-4">{item ? item.description : ""}</p>
          <p className="leading-5 mt-4">
            Minimum Pemesanan : {item ? item.moq : ""} {item ? item.unit : ""}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-start md:items-center mt-8 gap-4">
          <input
            className="w-[100px] p-4 border border-[#5B8C51] rounded-xl"
            type="number"
            step={1}
            min={item ? item.moq : ""}
            onChange={quantityChangeHandler}
            value={orderQuantity ? orderQuantity : ""}
            required
          />
          <div className="flex flex-col md:flex-row gap-2">
            <button
              onClick={addToCartHandler}
              className="text-white bg-hijau px-8 py-4 rounded-3xl flex flex-row items-center gap-2 hover:bg-neutral-700 active:bg-hijau"
            >
              <div className="relative w-6 h-6">
                <Image
                  alt=""
                  fill={true}
                  src="/images/shopping-cart-6.svg"
                  className=" svg-putih text-white dark:text-white inline-block flip"
                />
              </div>
              <span>Masukkan ke Keranjang</span>
            </button>
            {cartState.totalQuantity > 0 && (
              <Link
                href="/konfirmasi-order"
                className="flex items-center px-8 py-4 rounded-3xl text-neutral-800 bg-amber-400 hover:bg-amber-500 no-underline"
              >
                Checkout
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
