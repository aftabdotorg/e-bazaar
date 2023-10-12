import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrder, fetchAllOrders, updateOrderAdmin } from "./OrderAPI";

const initialState = {
  orders: [],
  status: "idle",
  currentOrder: null,
};

export const createOrderAsync = createAsyncThunk(
  "order/createOrder",
  async (order) => {
    const response = await createOrder(order);
    return response.data;
  }
);

export const updateOrderAdminAsync = createAsyncThunk(
  "order/updateOrderAdmin",
  async (order) => {
    const response = await updateOrderAdmin(order);
    return response.data;
  }
);

export const fetchAllOrdersAsync = createAsyncThunk(
  "order/fetchAllOrders",
  async () => {
    const response = await fetchAllOrders();
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrder: (state) => {
      state.currentOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.orders.push(action.payload);
        state.currentOrder = action.payload;
      })
      .addCase(fetchAllOrdersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllOrdersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.orders = action.payload;
      })
      .addCase(updateOrderAdminAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateOrderAdminAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const itemIndx = state.orders.findIndex(
          (order) => order.id === action.payload.id
        );
        state.orders[itemIndx] = action.payload;
      })
  },
});

export const { resetOrder } = orderSlice.actions;
export const selectCurrentOrder = (state) => state.order.currentOrder;
export const selectAllOrders = (state) => state.order.orders;
export default orderSlice.reducer;
