import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "items",
  initialState: [
    { text: "test", id: 1, value: 1 },
    { text: "test1", id: 2, value: 1 },
  ],
  reducers: {
    ADD_ITEM: (state, action) => {
      const { text, id, value } = action.payload;
      state.push({ text, id, value });
    },

    DELETE_ITEM: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { ADD_ITEM, DELETE_ITEM } = todoSlice.actions;
export default todoSlice.reducer;
