"use client";
import PRODUK from "@/assets/produk-list";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/store/cart-slice";
import Link from "next/link";
import Image from "next/image";

export default function ProdukDetail() {
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [displayedProduct, setDisplayedProduct] = useState({});
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const products = useSelector((state) => state.produk.products);
  console.log("ProdukDetail products", products);
  const path = usePathname();
  const arr = path.split("/");
  const segment = arr[arr.length - 1];

  useEffect(() => {
    const tmp = products.filter((item) => item.slug === segment);
    console.log("tmp", tmp);
    setDisplayedProduct(tmp.length !== 0 ? tmp[0] : products[0]);
    setOrderQuantity(tmp.length !== 0 ? tmp[0].moq : 100);
  }, [segment, products]);

  function quantityChangeHandler(e) {
    setOrderQuantity(parseInt(e.target.value));
  }
  function addToCartHandler() {
    const newItem = {
      id: displayedProduct.id,
      price: displayedProduct.price,
      quantity: orderQuantity,
      name: displayedProduct.name,
    };
    dispatch(cartActions.addToCart(newItem));
  }

  return (
    <section className="produk-detail mt-8 flex flex-col justify-center">
      <h1 className="text-2xl mb-4">Belanja</h1>
      <div className="about-us-wrapper overflow-hidden w-full">
        <div className="flex flex-col md:flex-row mb-4">
          <div className="relative w-full h-[400px] lg:min-h-[400px] md:w-[50%] ">
            <Image
              alt={displayedProduct ? displayedProduct.name : ""}
              fill={true}
              src={
                displayedProduct
                  ? displayedProduct.image
                  : "https://via.placeholder.com/400"
              }
              className="object-cover object-top rounded-xl"
            />
          </div>
          <div className="md:pl-8">
            <h1 className="mt-8 text-4xl">
              {displayedProduct ? displayedProduct.name : ""}
            </h1>
            <div className="mt-8">
              <h1 className="text-2xl text-hijau">
                Rp
                {displayedProduct && displayedProduct.price
                  ? displayedProduct.price.toLocaleString("en-ID")
                  : ""}
                <span className="text-neutral-600 text-lg">
                  / {displayedProduct ? displayedProduct.unit : ""}
                </span>
              </h1>
              <p className="leading-5 mt-4">
                {displayedProduct ? displayedProduct.description : ""}
              </p>
              <p className="leading-5 mt-4">
                Minimum Pemesanan :{" "}
                {displayedProduct ? displayedProduct.moq : ""}{" "}
                {displayedProduct ? displayedProduct.unit : ""}
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-start md:items-center mt-8 gap-4">
              <input
                className="w-[100px] p-4 border border-[#5B8C51] rounded-xl"
                type="number"
                step={1}
                min={displayedProduct ? displayedProduct.moq : ""}
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
                    className=" px-8 py-4 rounded-3xl text-neutral-800 bg-amber-400 hover:bg-amber-500 no-underline"
                  >
                    Checkout
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
