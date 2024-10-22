"use client";
import { getSession } from "@/lib/helper";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function DebugBox() {
  const [session, setSession] = useState({});
  const cartState = useSelector((state) => state.cart);

  useEffect(() => {
    const resp = getSession();
    resp.then((data) => {
      setSession(data);
    });
  }, []);

  const isSHow =
    process.env.NEXT_PUBLIC_SHOW_DEBUG_BOX === "true" ? "" : " hidden ";
  return (
    <>
      <div
        className={`${isSHow} h-96 overflow-auto p-2 absolute min-h-10 min-w-[300px] z-40 left-[18px] top-[90px] bg-neutral-500 bg-opacity-50 text-white flex flex-col items-center`}
      >
        <p className="text-yellow-500 font-xl uppercase">Session</p>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
      <div
        className={`${isSHow} h-96 overflow-auto p-2 absolute min-h-10 min-w-[300px] z-40 right-[18px] top-[90px] bg-neutral-500 bg-opacity-50 text-white flex flex-col items-center`}
      >
        <p className="text-yellow-500 font-xl uppercase">State</p>
        <pre>{JSON.stringify(cartState, null, 2)}</pre>
      </div>
    </>
  );
}
