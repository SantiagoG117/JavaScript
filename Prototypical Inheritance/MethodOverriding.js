//? Intermidiate Function Inheritance: A function for creating a inheritance relationship between two objects
function inherit(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  //Reset the constructor function from the Parent object back to the Child object (best practice)
  Child.prototype.constructor = Child;
}

//? Parent Object
function Shape() {}

//* Method to be inherited by child objects of Shape
Shape.prototype.duplicate = function () {
  console.log("Duplicate");
};

//?Child objects
function Circle() {}

//* Inheritance between Circle and Shape
inherit(Circle, Shape);

//* Method overriding: Redefine the method inherit by the Circle object
//! Should always be written after the inheritance was implemented because we are reseting the prototype
/* 
  ? Method overriding: 
  ! Should always be written after the inheritance relationship was established
  In Prototypical inheritance, when we call a function or attribute in an Object the JavaScript engine walks up the prototype chain
  and calls the first implementation of the function or attribute. 
  
  Circle.prototype.duplicate -> Shape.prototype.duplicate -> Object

  JavaScript selects the duplicate version in Circle because it is the first one in the Prototype chain
*/
Circle.prototype.duplicate = function () {
  //It is possible to call the parent's implementation of the method
  Shape.prototype.duplicate();

  console.log("Duplicate for Circle objects");
};

const c = new Circle();
