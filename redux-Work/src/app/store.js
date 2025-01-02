import { configureStore } from "@reduxjs/toolkit";
import chargeReducer from "./features/charge/chargeSlice";

export const store = configureStore({
  reducer: {
    charge: chargeReducer,
  },
});


