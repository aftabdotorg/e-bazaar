import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../components/Navbar/navbarSlice.js";
import productReducer from "../components/Product/productListSlice.js";
import authReducer from "../components/auth/authSlice.js";

export const store = configureStore({
  reducer: {
    product: productReducer,
    search: searchReducer,
    auth: authReducer,
  },
});
