import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    ADD_ITEM: (state, action) => {
      const { text, id } = action.payload;
      state.push({ text, id, value: 1 });
    },

    DELETE_ITEM: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { ADD_ITEM, DELETE_ITEM } = todoSlice.actions;
export default todoSlice.reducer;
