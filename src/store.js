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
    LOAD_ITEMS: (state) => {
      return state;
    },
    DELETE_ITEM: (state, action) =>
      //if (state.length > 2)
      state.filter((item) => item.id !== action.payload), //액션이 넘겨주는 id와 동일한 id를 가진 item객체를 삭제하여 리턴
    //else console.log(state.length);
  },
});

const store = configureStore({ reducer: items.reducer });

export const { ADD_ITEM, DELETE_ITEM, LOAD_ITEMS } = items.actions;
export default store;
