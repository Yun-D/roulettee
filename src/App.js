import React from "react";
import { useSelector } from "react-redux";

import TodoList from "./components/TodoList";
import Roulette from "./components/Roulette";

const App = () => {
  const rouletteData = {
    labels: useSelector((state) => state.items),
    datasets: [
      {
        label: "test",
        data: [1, 1, 1],
      },
    ],
  };
  console.log(rouletteData);

  return (
    <>
      <TodoList />
      <Roulette data={rouletteData} />
    </>
  );
};

export default App;
