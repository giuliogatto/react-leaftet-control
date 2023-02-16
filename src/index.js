import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import EditControlExample from "./App";
function onChange(geojson) {
  console.log("geojson changed", geojson);
}
ReactDOM.render(
  <React.StrictMode>
    <EditControlExample onChange={onChange} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
