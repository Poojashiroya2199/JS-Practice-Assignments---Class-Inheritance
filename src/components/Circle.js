// import using require

// declare cla
const Shape = require("./Shape");
// export class using module.exports
class Circle extends Shape {
  constructor(props) {
    super(props);
  }
  calculateArea() {}
}
module.exports = Circle;
