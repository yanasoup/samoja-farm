import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  cartIsVisible: false,
  isLoading: false,
  loadingMessage: "Loading...",
  formToken: null,
  inquirySendSuccess: null,
};

// console.log("initialCartState", initialCartState);

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    setLoading(state, action) {
      state.loadingMessage = action.payload.loadingMessage;
      state.isLoading = action.payload.isLoading;
    },
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    setInquirySendSuccess(state, action) {
      state.inquirySendSuccess = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
