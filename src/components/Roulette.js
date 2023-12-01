import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { colorCodes } from "../Assets/colorCode";

const Roulette = () => {
  const items = useSelector((state) => state.items);
  const textValues = items.map((item) => item.text);
  const dataValues = items.map((item) => item.value);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //화면 비율에 따라 width, height 변경
  let dynamicWidth = windowWidth >= 770 ? "420vh" : "300vh";
  let dynamicHeight = windowWidth >= 770 ? "420vh" : "300vh";

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
          width={dynamicWidth}
          height={dynamicHeight}
          className="roulette"
          id="goMove"
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
