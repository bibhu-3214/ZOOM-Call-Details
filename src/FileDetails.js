import React from "react";
import "./App.css";
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
      <div className="text-center">
        <h1 className="display-2">REPORT</h1>
      </div>
      <div className="container text-center mx-auto my-auto">
        <h2 className="display-5">Host - {host}</h2>
        <h2 className="display-6">Total Participants - {Participant}</h2>
        <h2 className="display-6">Durations - {Duration} Minutes</h2>
      </div>
      <div className="container px-4 my-3">
        <div className="row gx-4">
          <div className="col">
            <div className="p-3 border bg-light">
              <table className="table table-striped table-sm">
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
          </div>
          <div className="col h-100">
            <div className="p-3 border bg-light">
              <Chart data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileDetails;
