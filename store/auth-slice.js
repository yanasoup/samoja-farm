import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isLoggedIn: true,
};

// console.log("initialCartState", initialCartState);

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    resetState(state) {
      state = initialAuthState;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
