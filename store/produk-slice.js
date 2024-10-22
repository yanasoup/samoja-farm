import { createSlice } from "@reduxjs/toolkit";

const initialProdukState = {
  products: [],
};

const produkSlice = createSlice({
  name: "produk",
  initialState: initialProdukState,
  reducers: {
    resetState(state) {
      return initialProdukState;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const produkActions = produkSlice.actions;
export default produkSlice.reducer;
