import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Chart } from "react-google-charts";

import { ADD_ITEM } from "../store";
import Item from "../components/Item";
import "./Style.css";

function App({ items, addItem }) {
  const [text, setText] = useState("");

  function plusItem(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addItem(text); //mapDispatchToProps의 addItem 부름
    setText("");
  }

  function move() {
    document.querySelector(".roulette").classList.add("goMove");
  }

  useEffect(() => {
    console.log(items);
  }, [items]);

  const chartOptions = {
    legend: "none", //항목 데이터 알려주는 부분
    pieSliceText: "none", //항목이 차지하는 비율
    pieStartAngle: 90,
    tooltip: { trigger: "none" }, //마우스오버 툴팁
    slices: {
      //색상 지정할 수 있음
      0: { color: "skyblue" },
      1: { color: "beige" },
      2: { color: "yellow" },
      3: { color: "purple" },
    },
  };

  return (
    <>
      <div>
        <h1>Roulettee!</h1>

        <form onSubmit={onSubmit}>
          <input type="text" value={text} onChange={plusItem}></input>
          &nbsp;
          <button> 추가 </button>
        </form>

        <ul>
          {items.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      </div>

      <div>
        <button onClick={move}>돌아!</button>
      </div>

      <div className="roulette">
        <Chart
          chartType="PieChart"
          data={[
            ["투두", "값"],
            ["", 1],
            ["ㅇ", 1],
          ]}
          //data={items}
          options={chartOptions}
          width="400px"
          height="400px"
        />
      </div>
    </>
  );
}

function mapStateToProps(state) {
  //state에서 items를 가져옴
  return { items: state };
}
function mapDispatchToProps(dispatch) {
  return {
    addItem: (text) => dispatch(ADD_ITEM(text)), //App Component에 있는 props인 addItem으로 dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
