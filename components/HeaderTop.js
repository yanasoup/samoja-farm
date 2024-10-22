"use client";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import ButtonKeranjang from "./ButtonKeranjang";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "@/store/cart-slice";
import { uiActions } from "@/store/ui-slice";

import { useEffect } from "react";
import { getSession } from "@/lib/helper";
import { fetchCartData } from "@/store/cart-actions";
import { getProducts } from "@/store/produk-actions";
import Image from "next/image";

export default function HeaderTop() {
  const path = usePathname();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const totalQuantity = cartState.items.length;

  useEffect(() => {
    const sesi = getSession();

    sesi.then((data) => {
      dispatch(cartActions.setSessionId(data.userData.sessionId));
      dispatch(fetchCartData(data.userData.sessionId));
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  function showCartHandler() {
    dispatch(uiActions.toggleCart());
  }

  function menuButtonClickHandler() {
    const menu = document.querySelector("#menu");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menu.classList.add("flex");
    } else {
      menu.classList.add("hidden");
    }
  }

  return (
    <div className="w-full absolute left-0 top-0 z-10 bg-black bg-opacity-30 lg:bg-opacity-0">
      <nav className="gap-2 lg:gap-0 lg:h-20 py-2 lg:py-0 px-4 lg:px-8 flex flex-col justify-end items-end lg:flex-row lg:justify-between lg:items-center">
        <div className="w-full flex flex-row justify-between items-center">
          <h1 className="uppercase flex text-amber-300 text-xl xl:text-4xl lg:flex flex-row items-center gap-4">
            <a href="/">Samoja Farm</a>
          </h1>
          <button
            className=" hover:text-black relative h-8 w-8 border border-gray-300 rounded-md py-2 px-4 lg:hidden"
            onClick={menuButtonClickHandler}
          >
            <Image
              fill={true}
              alt="menu-icon"
              className="svg-putih object-cover object-center "
              src="/images/menu.svg"
            />
          </button>
        </div>
        <ul
          id="menu"
          className="text-white uppercase w-full hidden lg:flex flex-col lg:flex-row gap-2 justify-between items-center lg:items-center"
        >
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/produk/doc">DOC Petelur</NavLink>
          </li>
          <li>
            <NavLink href="/produk/pullet">Pullet</NavLink>
          </li>
          <li>
            <NavLink href="/cara-pemesanan">Cara Pemesanan</NavLink>
          </li>
          <li>
            <NavLink href="/lacak-order">Lacak Pesanan</NavLink>
          </li>
          <li className="hidden">
            <NavLink className="navlink" href="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" href="/kontak">
              Hubungi Kami
            </NavLink>
          </li>
          <li>
            <ButtonKeranjang
              totalItem={totalQuantity}
              onViewCart={showCartHandler}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}
