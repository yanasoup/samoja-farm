import Image from "next/image";
export default function ButtonKeranjang({ totalItem, onViewCart }) {
  return (
    <div className="flex gap-2 items-center relative">
      <span className="text-xs bg-amber-300 text-black py-2 px-3 rounded-full absolute right-[-30%] top-[-10px]">
        {totalItem}
      </span>
      <p className="hidden text-white">Keranjang</p>
      <button
        className="w-10 h-10 inline-block bg-white p-2 rounded-full cursor-pointer"
        onClick={onViewCart}
      >
        <div className="relative w-full h-full ">
          <Image
            alt="cart-logo"
            fill={true}
            src="/images/shopping-cart-6.svg"
            className="text-gray-800 dark:text-white inline-block flip"
          />
        </div>
      </button>
    </div>
  );
}
