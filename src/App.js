import React from "react";

import TodoList from "./components/TodoList";
import Roulette from "./components/Roulette";
import "../src/components/Style.css";

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <Roulette />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
