import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product-list/productListSlice.js";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
