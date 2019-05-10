class Circle {
  constructor(r) {
    this.r = r
  }
  setRadius(r) {
    this.r = r
    return this
  }
  area() {
    return 3.14*this.r*this.r;
  }
}

var c1 = new Circle(1)
console.log("c1.r=%d", c1.r);
console.log("c1.area()=%d", c1.area());
var c2 = new Circle(2)
console.log("c2.area()=%d", c2.area());
console.log("c2.setRadius(3).area()=%d", c2.setRadius(3).area());
console.log("c2.area()=%d", c2.area());
console.log("c2.setRadius(6).setRadius(7).area()=%d", c2.setRadius(6).setRadius(7).area());
