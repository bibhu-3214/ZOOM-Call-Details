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
    <div>
      {show ? (
        <>
          <div className="mb-3">
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                className="form-control"
                id="formFile"
                onChange={handleChange}
              />
              <div className="d-grid gap-2 col-6 mx-auto my-2">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="upload"
                ></input>
              </div>
            </form>
          </div>
        </>
      ) : (
        <div className="container-fluid">
          <FileDetails data={data} />
        </div>
      )}
    </div>
  );
};

export default App;
