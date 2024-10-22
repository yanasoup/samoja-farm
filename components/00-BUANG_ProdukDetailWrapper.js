"use client";
import ProdukDetail from "./ProdukDetail";
import { Provider } from "react-redux";
import store from "@/store";

export default function ProdukDetailWrapper() {
  return (
    <Provider store={store}>
      <ProdukDetail />
    </Provider>
  );
}
