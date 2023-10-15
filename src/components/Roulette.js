import React from "react";
import { useSelector } from "react-redux";

import "chart.js/auto";
import { Pie } from "react-chartjs-2";

const Roulette = () => {
  const items = useSelector((state) => state.items);
  const itemCounts = {};
  (items || []).forEach((item) => {
    //or 연산자 사용하여 변수 빈 배열로 초기화, foreach로 배열 내 각 항목 모두에 적용
    itemCounts[item] = (itemCounts[item] || 0) + 1; //현재 항목에 값이 없을 경우 0 반환, 있을 경우 거기에 +1
  });

  const options = {
    responsive: false,
  };

  const rouletteData = {
    labels: useSelector((state) => state.items),
    datasets: [
      {
        data: Object.values(itemCounts),
        backgroundColor: Object.keys(itemCounts).map(getRandomColor),
      },
    ],
  };
  console.log(rouletteData);

  return (
    <>
      <Pie data={rouletteData} options={options} style={{ width: "700px" }} />
    </>
  );
};

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export default Roulette;
