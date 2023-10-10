import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../components/Navbar/navbarSlice.js";
import productReducer from "../components/Product/productSlice.js";
import authReducer from "../components/auth/authSlice.js";
import cartReducer from "../components/cart/cartSlice.js";
import orderReducer from "../components/Orders/OrderSlice.js"

export const store = configureStore({
  reducer: {
    product: productReducer,
    search: searchReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});
