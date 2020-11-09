import React from "react";
import ReactDOM from "react-dom";
const Shape=require("./components/Shape");
const Circle= require("./components/Circle");
ReactDOM.render(
  <React.StrictMode>
    <Shape color="red" />
    <Circle color="red" />
  </React.StrictMode>,
  document.getElementById("root")
);
