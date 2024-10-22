"use client";
import { useDispatch, useSelector } from "react-redux";
import { confirmOrder } from "@/store/order-actions";
import { useEffect } from "react";
// import ProdukBoxs from "./ProdukBoxs";

export default function KonfirmasiOrderEmail({ sessionid }) {
  const orderEmailConfirmed = useSelector(
    (state) => state.order.orderEmailConfirmed
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(confirmOrder(sessionid));
  }, [dispatch, sessionid]);

  let msg = <span className=" text-white">Loading...</span>;
  msg = orderEmailConfirmed ? (
    <p className="text-lg mt-8 bg-green-100 rounded p-4">
      <span className="">
        Terimakasih sudah mengkonfirmasi pesanan Anda. Harap menunggu maksimal
        1x24 jam, Kami akan menghubungi anda melalui email atau wa/telegram jika
        order anda bisa kami proses.
      </span>
    </p>
  ) : (
    <span className="bg-red-100 text-white">Memeriksa...</span>
  );

  return (
    <>
      <h1 className="text-lg text-neutral-600">
        Konfirmasi Order : <span className="text-black">{sessionid}</span>
      </h1>
      <div>{msg}</div>
    </>
  );
}
