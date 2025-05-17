function Circle(radius) {
  /* 
    Instance level properties:
      -All instances of this Object have a copy in memory of the properties and methods defined within the constructor
      function.
      - Instance level properties can access Prototype level properties
  */
  this.radius = radius;

  this.erase = function () {
    this.draw();
    console.log("Erasing the radius of the circle");
  };
}

/* 
  Prototype level properties:
    - Properties and methods defined in the Prototype of an Object exist only once in memory and can be accessed via 
    inheritance.
    - Prototype level properties can access instance level properties
*/
Circle.prototype.draw = function () {
  console.log(`Drawing radious of ${this.radius}`);
};


const c1 = new Circle(1);
const c2 = new Circle(2);
