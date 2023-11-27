import React from "react";
import { useSelector } from "react-redux";

import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { colorCodes } from "../Assets/colorCode";

const Roulette = () => {
  const items = useSelector((state) => state.items);
  const textValues = items.map((item) => item.text);
  const dataValues = items.map((item) => item.value);

  const options = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // 범례(legend) 숨김
      },
    },
  };

  const rouletteData = {
    labels: textValues,
    datasets: [
      {
        data: Object.values(dataValues),
        backgroundColor: Object.values(colorCodes),
        tooltip: {
          callbacks: {
            label: function () {
              return ""; // 툴팁 밸류 텍스트 숨김
            },
          },
        },
      },
    ],
  };

  const spin = () => {
    const temp = document.getElementById("goMove");

    const random = Math.floor(
      Math.random() * (6000 - Object.values(dataValues).length + 1000) +
        1 +
        3600
    );

    temp.style.transition = "transform 3s ease-out";
    temp.style.transform = `rotate(${random}deg)`;
  };

  return (
    <div className="rouletteArea">
      <div className="checkingRoulette">
        <div className="triangle" />
        <Pie
          data={rouletteData}
          options={options}
          width="420vh"
          height="420vh"
          className="roulette"
          id="goMove"
          //FIXME: 반응형으로 크기 바꾸고 위로 넘기기
        />
      </div>

      <div>
        <button onClick={spin} className="rouBtn">
          돌아!
        </button>
      </div>
    </div>
  );
};

export default Roulette;
