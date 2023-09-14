import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/product-list/productListSlice.js";

export const store = configureStore({
  reducer: counterReducer,
});
