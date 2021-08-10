import React, { useState } from "react";
import papa from "papaparse";
import FileDetails from "./FileDetails";

const App = (props) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    papa.parse(file, {
      complete: function (result) {
        setData(result.data);
      },
    });
    setShow(false);
  };
  return (
    <>
      {show ? (
        <div className="container m-3 p-3">
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              className="form-control mb-3"
              id="formFile"
              onChange={handleChange}
            />
            <input className="btn btn-primary" type="submit" value="upload" />
          </form>
        </div>
      ) : (
        <div className="container">
          <FileDetails data={data} />
        </div>
      )}
    </>
  );
};

export default App;
