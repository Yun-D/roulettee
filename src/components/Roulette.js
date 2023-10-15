import React from "react";

import "chart.js/auto";
import { Pie } from "react-chartjs-2";

const Roulette = ({ data }) => {
  const options = {
    responsive: false,
  };

  return (
    <>
      <Pie data={data} options={options} style={{ width: "700px" }} />
    </>
  );
};

export default Roulette;
