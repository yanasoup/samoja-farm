"use client";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/store/cart-slice";
import { uiActions } from "@/store/ui-slice";
import KeranjangItem from "./KeranjangBelanjaItem";
import Link from "next/link";
import { useEffect } from "react";
import { sendCartData } from "@/store/cart-actions";
import Image from "next/image";

let isInitial = true;
export default function KeranjangBelanja() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const orderConfirmed = useSelector((state) => state.order.orderConfirmed);
  const cartState = useSelector((state) => state.cart);
  const products = useSelector((state) => state.produk.products);
  function closeCartHandler() {
    dispatch(uiActions.toggleCart());
  }

  useEffect(() => {
    if (isInitial) {
      dispatch(cartActions.resetCartData());
      isInitial = false;
      return;
    }
    if (cartState.changed === true) {
      const postData = {
        session_id: cartState.sessionId,
        status: orderConfirmed ? 1 : 0,
        state: cartState,
        id: cartState.id,
      };
      dispatch(sendCartData(postData));
    }
  }, [cartState, dispatch, orderConfirmed]);

  return (
    <>
      {cartIsVisible && (
        <div className="modal-bg fixed inset-0 flex items-start justify-center p-8 bg-black bg-opacity-50 z-40">
          <div className="modal-wrapper my-auto bg-white p-4 rounded shadow-md w-[800px]">
            <h2 className="modal-title text-xl mb-4">Keranjang Belanja</h2>
            {cartItems.map((item) => {
              const produkData = products.filter((prod) => prod.id === item.id);
              const newItem = {
                ...item,
                image: produkData[0].image,
                moq: produkData[0].moq,
                unit: produkData[0].unit,
              };
              return <KeranjangItem key={item.id} produk={newItem} />;
            })}

            {cartState.totalQuantity === 0 && (
              <div className="flex flex-row items-center gap-4">
                <div className="relative h-14 w-14">
                  <Image
                    alt="empty-cart"
                    fill={true}
                    src="/images/empty-cart.svg"
                    className="object-cover object-center svg-gray"
                  />
                </div>
                <h1 className="flex">Keranjang belanja anda masih kosong</h1>
              </div>
            )}

            <div className="text-right mt-8 flex flex-row gap-2 justify-end">
              <button
                onClick={closeCartHandler}
                className="px-4 py-2 text-white rounded-full bg-neutral-700 hover:bg-neutral-800"
              >
                Lanjutkan Belanja
              </button>
              {cartState.totalQuantity > 0 && (
                <Link
                  onClick={closeCartHandler}
                  href="/konfirmasi-order"
                  className="px-4 py-2 text-black rounded-full bg-amber-400 hover:bg-amber-500"
                >
                  Checkout
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
