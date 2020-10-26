import React from "react";
import ReactDOM from "react-dom";
import { Shape } from "./components/shape.js";
import { Circle } from "./components/circle.js";
ReactDOM.render(
  <>
    <Shape />
    <Circle />
  </>,
  document.getElementById("root")
);
