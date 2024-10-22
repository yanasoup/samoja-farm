"use client";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function Loader() {
  const isLoading = useSelector((state) => state.ui.isLoading);
  const loadingMessage = useSelector((state) => state.ui.loadingMessage);
  return (
    <>
      {isLoading && (
        <div className="modal-bg fixed inset-0 flex items-start justify-center p-8 bg-black bg-opacity-50 z-50">
          <div className="modal-wrapper my-auto bg-white p-4 rounded shadow-md flex flex-row">
            <div className="relative h-5 w-5">
              <Image
                fill={true}
                alt="Loader"
                src="/images/loader-4.svg"
                className="animate-spin -ml-1 mr-3 text-white"
              />
            </div>
            {loadingMessage}
          </div>
        </div>
      )}
    </>
  );
}
