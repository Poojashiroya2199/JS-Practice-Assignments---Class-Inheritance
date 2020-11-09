// import using require

// declare class
import Shape from "./Shape";
// export class using module.exports
class Circle extends Shape {
  constructor(props){
    super(props);
  }
  calculateArea() {}
}
module.exports = Circle;
