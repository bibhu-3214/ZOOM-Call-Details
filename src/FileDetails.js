import React from "react";
import Chart from "./Chart";

const FileDetails = (props) => {
  const { data } = props;
  const result = data.slice(0, 1);
  const arr = data.slice(1);
  const res = arr.filter((ele) => {
    return !ele.includes("");
  });
  const host = arr.map((ele) => {
    if (ele.includes("Guest") === !ele.includes("No")) {
      return ele[0];
    }
  });
  const Participant = res.length;
  const Duration = arr.map((ele) => {
    if (ele.includes("Guest") === !ele.includes("No")) {
      return ele[2];
    }
  });

  return (
    <>
      <h1 className="display-3 text-center border bg-light text-black-50 my-3">
        REPORT
      </h1>

      <div className="row my-4">
        <div className="col">
          <h2 className="display-4 text-black-50 text-start">HOST-{host}</h2>
        </div>
        <div className="col">
          <h4 className="text-black-50 text-end">
            Total Participants - {Participant}
          </h4>
          <h4 className="text-black-50 text-end">
            Durations - {Duration} Minutes
          </h4>
        </div>
      </div>

      <div className="row my-4">
        <div className="col">
          <table className="table table-striped table-bordered">
            <thead>
              {result.map((d, i) => {
                return (
                  <tr key={i}>
                    <th>{d[0]}</th>
                    <th>{d[1]}</th>
                    <th>{d[2]}</th>
                    <th>{d[3]}</th>
                  </tr>
                );
              })}
            </thead>
            <tbody>
              {res.map((r, i) => {
                return (
                  <tr key={i}>
                    <td>{r[0]}</td>
                    <td>{r[1]}</td>
                    <td>{r[2]}</td>
                    <td>{r[3]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col my-5">
          <Chart data={data} />
        </div>
      </div>
    </>
  );
};

export default FileDetails;
