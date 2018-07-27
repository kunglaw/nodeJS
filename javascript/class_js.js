const Square = require('square_class.js'); //quare from 'square_class';

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);
var ss = new Square(45);

console.log(ss.area);
