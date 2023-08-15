import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Chart } from "react-google-charts";

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

  useEffect(() => {
    console.log(items);
  }, [items]);

  //   const chartOptions = {
  //     legend: "none", //항목 데이터 알려주는 부분
  //     pieSliceText: "none", //항목이 차지하는 비율
  //     pieStartAngle: 90,
  //     tooltip: { trigger: "none" }, //마우스오버 툴팁
  //     slices: {
  //       //색상 지정할 수 있음
  //       0: { color: "skyblue" },
  //       1: { color: "beige" },
  //       2: { color: "yellow" },
  //       3: { color: "purple" },
  //     },
  //   };

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

      {/* <div className="roulette">
        <Chart
          chartType="PieChart"
          data={items}
          options={chartOptions}
          width="400px"
          height="400px"
          loader={<div>로딩중 . . </div>}
        />
      </div> */}
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
