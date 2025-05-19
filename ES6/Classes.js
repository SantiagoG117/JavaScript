/* 
    Starting ES6 we have a new way of creating objects and implementing inheritance. That is using classes. However, these classes are just
    a syntactic sugar(Syntax added to an exisitng logic for convinience and readibility, without changing the langauge's functionallity)
    over prototypical inheritance.
*/

function Circle(radius) {
  this.radius = radius;

  this.draw = function () {
    console.log("Drawing...");
  };
}

/* 
    Under the hood ES6 classes are essentially ES5 constructor functions.
    Class declarations (class className{}) are not hoisted
*/
class ES6Circle {
  //Body of the class where we can define properties and methods:

  //?Constructor: special method used to initialize objects. Works exactly like a constructor function before ES6
  constructor(radius) {
    this.radius = radius;
    //? Instance level methods:
    this.move = function () {
      console.log("move");
    };
  }

  //?Prototype level methods: All the methods defined in the body of the class will be on the prototype of the ES6Circle object
  draw() {
    console.log("Drawing...");
  }
}

const circle = new Circle(10);
const es6 = new ES6Circle(11);
