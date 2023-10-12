import React from "react";
import { useSelector } from "react-redux";

import TodoList from "./components/TodoList";
import Roulette from "./components/Roulette";

const App = () => {
  const rouletteData = useSelector((state) => state.items);
  console.log(rouletteData);

  return (
    <>
      <TodoList />
      {/* <Roulette data={rouletteData} /> */}
    </>
  );
};

export default App;
