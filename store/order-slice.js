import { createSlice } from "@reduxjs/toolkit";

const initialOrderState = {
  changed: false,
  sessionId: null,
  orderConfirmed: null,
  orderSaved: null,
  orderEmailConfirmed: null,
  orderTrace: [],
};

// console.log("initialCartState", initialCartState);

const orderSlice = createSlice({
  name: "order",
  initialState: initialOrderState,
  reducers: {
    resetState(state) {
      return initialOrderState;
    },
    updateChangeState(state, action) {
      state.changed = action.payload;
    },
    setSessionId(state, action) {
      state.sessionId = action.payload;
    },
    setOrderConfirm(state) {
      state.orderConfirmed = true;
    },
    setOrderSaved(state) {
      state.orderSaved = true;
    },
    setOrderEmailConfirmed(state, action) {
      state.orderEmailConfirmed = action.payload;
    },
    setOrderTrace(state, action) {
      state.orderTrace = action.payload;
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
