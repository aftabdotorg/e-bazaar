import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../components/Product/productSlice.js";
import authReducer from "../components/auth/authSlice.js";
import cartReducer from "../components/cart/cartSlice.js";
import orderReducer from "../components/Orders/OrderSlice.js";
import userReducer from "../components/User/UserSlice.js";

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer,
  },
});
