import React from "react";
import ReactDOM from "react-dom";
import { Shape } from "./components/Shape";
import { Circle } from "./components/Circle";
ReactDOM.render(
  <React.StrictMode>
    <Shape />
    <Circle />
  </React.StrictMode>,
  document.getElementById("root")
);
