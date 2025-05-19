/* 
    In classical Object Oriented Programming we have two types of methods:
        Instance methods: Belong to an instance of a class and can only be availble through the class itself
        Static methods: Belong to the class itself, not to its instances

    We use Static methods to define utility functions that are not specific to each instance
*/

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  //?Instance method: Available to all instances of the Circle
  draw() {
    console.log(`Drawing a circle with a radius of ${this.radius}`);
  }

  //?Static method: Belong to the class itself
  static parse(string) {
    const radius = JSON.parse(string).radius;
    return new Circle(radius);
  }
}

const c1 = new Circle(11);
const c2 = new Circle(10);
const c3 = Circle.parse('{"radius": 9}');
