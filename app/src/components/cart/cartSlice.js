import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addToCart } from "./cartAPI";

const initialState = {
  value: 0,
  items: [],
  status: "idle",
};

export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async (item) => {
    const response = await addToCart(item);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      });
  },
});

export const selectCartItems = (state) => state.cart.items;

// console.log(selectProductById);
export default cartSlice.reducer;
