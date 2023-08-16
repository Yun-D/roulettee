import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import { ADD_ITEM } from "../utils/todoSlice";
import Item from "../components/Item";
import "./Style.css";
import uuid from "react-uuid";

const TodoList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const [todoText, setTodoText] = useState("");

  const plusItem = (e) => {
    setTodoText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      value: 1,
      text: todoText,
    };
    dispatch(ADD_ITEM(newTodo)); //mapDispatchToProps의 addItem 부름
    setTodoText("");
  };

  const move = () => {
    document.querySelector(".roulette").classList.add("goMove");
  };

  return (
    <>
      <div>
        <h1>Roulettee!</h1>

        <form onSubmit={onSubmit}>
          <input type="text" value={todoText} onChange={plusItem}></input>
          &nbsp;
          <button> 추가 </button>
        </form>

        <ul>
          {items.map((item) => (
            <Item key={item.id} id={item.id} text={item.text} />
          ))}
        </ul>
      </div>

      <div>
        <button onClick={move}>돌아!</button>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  //state에서 items를 가져옴
  return { items: state };
}
function mapDispatchToProps(dispatch) {
  return {
    addItem: (text) => dispatch(ADD_ITEM(text)), //App Component에 있는 props인 addItem으로 dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
