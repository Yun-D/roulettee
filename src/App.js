import React from "react";
import { Provider } from "react-redux";

import todoReducer from "./utils/todoSlice";
import { configureStore } from "@reduxjs/toolkit";
import TodoList from "./components/TodoList";

const store = configureStore({
  reducer: {
    items: todoReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
