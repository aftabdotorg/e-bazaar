import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product-list/productListSlice.js";
import searchReducer from "../components/Navbar/navbarSlice.js";

export const store = configureStore({
  reducer: {
    product: productReducer,
    search: searchReducer,
  },
});
