import React from "react";

import TodoList from "./components/TodoList";
import Roulette from "./components/Roulette";
import "../src/components/Style.css";

import { ReactComponent as Logo } from "./Assets/logo.svg";

const App = () => {
  return (
    <>
      <div className="titleBar">
        <Logo width={250} className="center" />
      </div>
      <div className="container">
        <div className="content">
          <Roulette />
          <TodoList />
        </div>
      </div>
    </>
  );
};

export default App;
