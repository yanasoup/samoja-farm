"use client";
import { trackOrder } from "@/store/order-actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function FormLacakOrder() {
  const orderTrace = useSelector((state) => state.order.orderTrace);
  const [noTrx, setNoTrx] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();

  function changeHandler(e) {
    setNoTrx(e.target.value);
  }
  function handleClick() {
    dispatch(trackOrder(noTrx));
    setIsSubmitted(true);
  }

  return (
    <div className="mx-auto min-h-[400px] w-full lg:w-[75%] p-4 rounded-lg bg-neutral-200">
      <div className="flex flex-col gap-2 p-4 border-l mx-auto">
        <p className="text-neutral-500">Masukan Nomor Transaksi :</p>
        <div className="flex flex-row gap-4">
          <input
            className="text-xl w-[75%] border border-neutral-300 p-4 rounded-sm"
            type="text"
            placeholder="Nomor Transaksi"
            value={noTrx}
            onChange={changeHandler}
          />
          <button
            onClick={handleClick}
            className="flex w-[25%] items-center justify-center px-4 py-2 rounded hover:bg-neutral-600 bg-hijau text-white"
          >
            Lacak
          </button>
        </div>

        {isSubmitted && <p className="text-neutral-500">Progress Pesanan :</p>}
        <div className="min-h-[400px] text-neutral-800 flex flex-col gap-2">
          {orderTrace.length > 0 &&
            orderTrace.map((trace) => (
              <li
                className="list-none p-2 bg-green-800 text-white rounded-md"
                key={trace.progress}
              >
                {trace.updated_at} - {trace.progress}
              </li>
            ))}

          {isSubmitted && orderTrace.length === 0 && (
            <p className="text-lg">Nomor transaksi tidak valid</p>
          )}
        </div>
      </div>
    </div>
  );
}
