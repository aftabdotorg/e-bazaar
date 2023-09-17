import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearch: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export const searchquery = (state) => state.search;
export default searchSlice.reducer;
