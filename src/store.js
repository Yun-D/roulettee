import { configureStore, createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const items = createSlice({
  name: "itemReducer",
  initialState: [
    { text: "테스트 1", value: 1, id: uuid() },
    { text: "테스트 2", value: 1, id: uuid() },
  ],
  reducers: {
    ADD_ITEM: (state, action) => {
      state.push({
        text: action.payload,
        value: 1,
        id: uuid(),
      });
    },
    DELETE_ITEM: (state, action) => {
      if (state.items.length > 2)
        state.filter((item) => item.id !== action.payload);
    },
  },
});

const store = configureStore({ reducer: items.reducer });

export const { ADD_ITEM, DELETE_ITEM } = items.actions;
export default store;
