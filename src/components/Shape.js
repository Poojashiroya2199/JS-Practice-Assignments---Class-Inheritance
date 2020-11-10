//module.exports = Shape;
// declare class

// export class
module.exports = class Shape {
  constructor() {
    this.color = "red";
  }
  drawShape() {
    console.log("Drawing a shape");
  }
  calculateArea() {
    console.log("don't know area of unknow shape");
  }
};
// export default Shape;
