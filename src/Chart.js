import React from "react";
import Chart from "react-google-charts";

const Charts = (props) => {
  const { data } = props;
  const arr = data.slice(1);
  const result = arr.filter((ele) => {
    return !ele.includes("");
  });
  const res1 = result.sort().map((ele) => {
    return ele[0];
  });
  const res2 = result.sort().map((ele) => {
    return ele[2];
  });
  const datas = [res1, res2];

  return (
    <div className="h-50 App">
      <Chart chartType="Bar" width="auto" height="auto" data={datas} />
    </div>
  );
};

export default Charts;
