import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, authenticateUser, updateUser } from "./authAPI";

const initialState = {
  loggedUser: null,
  status: "idle",
  error: null,
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
    // console.log(response.data);
  }
);

export const updateUserAsync = createAsyncThunk(
  "user/updateUser",
  async (update) => {
    const response = await updateUser(update);
    return response.data;
    // console.log(response.data);
  }
);

export const authenticateUserAsync = createAsyncThunk(
  "user/authenticateUser",
  async (loginInfo) => {
    const response = await authenticateUser(loginInfo);
    return response.data;
    console.log(response.data);
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedUser = action.payload;
      })
      .addCase(authenticateUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authenticateUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedUser = action.payload;
      })
      .addCase(authenticateUserAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedUser = action.payload;
      });
  },
});

// export const { increment } = userSlice.actions;

export const selectLoggedUser = (state) => state.auth.loggedUser;
export const selectError = (state) => state.auth.error;

// console.log(selectProductById);
export default userSlice.reducer;
