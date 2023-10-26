import React from "react";
import { useSelector } from "react-redux";

import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import "./Style.css";

const Roulette = () => {
  const items = useSelector((state) => state.items);
  const textValues = items.map((item) => item.text);
  const dataValues = items.map((item) => item.value);

  const options = {
    responsive: false,
    maintainAspectRatio: false,
  };

  const rouletteData = {
    labels: textValues,
    datasets: [
      {
        data: Object.values(dataValues),
        backgroundColor: Object.keys(dataValues).map(getRandomColor),
      },
    ],
  };

  return (
    <>
      <Pie
        data={rouletteData}
        options={options}
        width="300vh"
        height="300vh"
        className="roulette"
      />
    </>
  );
};

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export default Roulette;
