import React from "react";

const Toolbar = () => {
  const [noOfPoints, setNoOfPoints] = React.useState([1]);

  return (
    <div className="toolbar-width bg-light">
      <div className="container">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary">
            LatLongs
          </button>
          <button type="button" class="btn btn-outline-primary">
            Colors
          </button>
          <button type="button" class="btn btn-outline-primary">
            Tools
          </button>
          <button type="button" class="btn btn-outline-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-box-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
              />
              <path
                fill-rule="evenodd"
                d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
              />
            </svg>
          </button>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row  w-50 mx-auto mb-1 ">
          <button type="button" className="btn btn-secondary btn-sm ">
            Add{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
            </svg>
          </button>
        </div>

        <div className="row bg-primary mb-1">
          <div className="col text-light px-0"> Lat </div>
          <p1 className="col text-light px-0"> Long </p1>
        </div>

        {noOfPoints.map((el) => {
          return (
            <div key={el} className="row  ">
              <div className="col px-0">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-compass"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                      <path d="M6.94 7.44l4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Latitude"
                    aria-label="Latitude"
                    aria-describedby="basic-addon1"
                  />
                  <span class="input-group-text" id="basic-addon1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-compass"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                      <path d="M6.94 7.44l4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Longitude"
                    aria-label="Longitude"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
          );
        })}

        <button className="btn btn-primary btn-sm w-50 mx-auto">Save</button>
      </div>
    </div>
  );
};

export default Toolbar;
