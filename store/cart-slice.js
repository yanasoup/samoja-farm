import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  id: null,
  items: [],
  totalQuantity: 0,
  cartIsVisible: false,
  buyerInfo: {
    email: null,
    namaDepan: null,
    namaBelakang: null,
    alamat: null,
    kota: null,
    provinsi: null,
    noKontak: null,
    kodePos: null,
  },
  changed: false,
  sessionId: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    resetCartData(state) {
      return initialCartState;
    },
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    replaceState(state, action) {
      state = action.payload;
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.id = action.payload.id;
      state.buyerInfo = action.payload.buyerInfo;
    },
    updateCart(state, action) {
      const newItem = action.payload;
      if (newItem.quantity === 0) {
        const id = newItem.id;
        const existingItem = state.items.find((item) => item.id === id);
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      } else {
        let existingItem = state.items.find((item) => item.id === newItem.id);
        state.totalQuantity =
          state.totalQuantity - existingItem.quantity + newItem.quantity;
        if (!existingItem) {
          state.items.push({
            id: newItem.id,
            name: newItem.name,
            price: newItem.price,
          });
        }
        existingItem.quantity = newItem.quantity;
        existingItem.totalPrice = newItem.price * newItem.quantity;
      }
      state.changed = true;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity = state.totalQuantity + newItem.quantity;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
        });
      } else {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        existingItem.totalPrice =
          existingItem.totalPrice + newItem.price * newItem.quantity;
      }
      state.changed = true;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.items = state.items.filter((item) => item.id !== id);
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
      state.changed = true;
    },
    updateChangeState(state, action) {
      state.changed = action.payload;
    },
    setSessionId(state, action) {
      state.sessionId = action.payload;
    },
    setCartId(state, action) {
      state.id = action.payload;
    },
    setBuyerInfo(state, action) {
      state.buyerInfo = action.payload;
    },
    // confirmOrder(state) {
    //   state.orderConfirmed = true;
    // },
    // setOrderEmailConfirmed(state, action) {
    //   state.orderEmailConfirmed = action.payload;
    // },
  },
});

export const cartActions = cartSlice.actions;
// bisa juga seperti ini
// export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
