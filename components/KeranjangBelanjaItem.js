import { useState } from "react";
import { cartActions } from "@/store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

export default function KeranjangItem({ produk }) {
  const cartState = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(produk.quantity);
  const dispatch = useDispatch();

  function quantityChangeHandler(e) {
    setQuantity(parseInt(e.target.value));
  }

  function quantityEditDoneHandler() {
    const newQuantity = !isNaN(parseInt(quantity)) ? parseInt(quantity) : 0;

    let newItem = { ...produk, quantity: newQuantity };
    dispatch(cartActions.updateCart(newItem));
  }

  function deletecartItemHandler() {
    dispatch(cartActions.removeItemFromCart(produk.id));
  }

  return (
    <div className="cart-item-wrapper flex flex-col w-full mb-4 h-[170px] bg-neutral-200">
      <div className="flex flex-row h-full w-full">
        <div className="relative  w-[20%]">
          <Image
            alt={produk.name}
            src={produk.image}
            fill={true}
            className="object-center object-cover"
          />
        </div>
        <div className="flex flex-col pl-4 w-[60%] pt-4 gap-3">
          <h1>{produk.name}</h1>
          <div className="flex flex-row gap-8 items-center">
            <span>Quantity: </span>
            <input
              className="p-2 w-44 rounded-lg ring-1 ring-green-800"
              type="number"
              value={quantity ? quantity : ""}
              min={produk.moq}
              onChange={quantityChangeHandler}
              onBlur={quantityEditDoneHandler}
              required
            />
            x <span>Rp{produk.price.toLocaleString("en-ID")}</span>
          </div>
          <div className="flex flex-row gap-8 items-center text-xs italic">
            <span className="text-neutral-500">
              Minimum Quantity : {produk.moq.toLocaleString("en-ID")}{" "}
              {produk.unit}
            </span>
          </div>
          <div className="flex flex-row gap-4 text-white">
            <button
              onClick={deletecartItemHandler}
              className="rounded-full py-1 px-4 border border-neutral-300 flex flex-row items-center bg-neutral-700 hover:bg-neutral-600"
            >
              <div className="relative h-6 w-g">
                <Image
                  alt="del-button"
                  src="/images/delete.svg"
                  className="svg-putih"
                  fill={true}
                />
              </div>
              <span className="text-xs">Hapus</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[20%] text-left  pt-4">
          <p>Total Harga:</p>
          <p className="text-hijau text-xl">
            {quantity ? (produk.price * quantity).toLocaleString("en-ID") : 0}
          </p>
        </div>
      </div>
    </div>
  );
}
