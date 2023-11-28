import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import { ADD_ITEM } from "../utils/todoSlice";
import Item from "../components/Item";
import uuid from "react-uuid";

import { ReactComponent as Logo } from "../Assets/logo.svg";

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

  return (
    <div className="todolist">
      <div className="logoArea">
        <Logo width={250} className="center" />
      </div>

      <div className="todoArea">
        <form onSubmit={onSubmit} className="todo wrapper">
          <input
            type="text"
            value={todoText}
            onChange={plusItem}
            className="input"
          />
          &nbsp;
          <button className="todoBtn"> 추가 </button>
        </form>

        <ul>
          {items.map((item) => (
            <Item key={item.id} id={item.id} text={item.text} />
          ))}
        </ul>
      </div>
    </div>
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
