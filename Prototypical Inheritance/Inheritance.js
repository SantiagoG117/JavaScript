/* 
?   Inheritance: 
    Inheritance enables an Object to take on the attributes and methods of a Parent Object. This eliminates redundant code and promotes
    code reusability in different part of the application.

    Now, in JavaScript we don't have classes, we only have objects. So how can we implement inheritance in Objects? Here is where Prototypes
    come to the rescue. A Prototype is essentially the parent of another object. Every Object in JavaScript has a prototype and it inherits all
    its members. The only exception is the Object object, which is the root of all Objects and has no prototype. 

    When accessing a method of an object, JavaScript first checks for its existence in the object itself, if it does not find it
    it checks the Prototype of the object and so on until the Object object is reached.

    Shape(Prototype) <- Circle
    Shape(Protptype) <- Square

    All arrays created by the Array constructor will share the same Prototype (Array)
    let myArray = [] -> Array Base -> Object

    All objects created by the Circle constructor will share the same Prototype (circle)
    let circle = new Circle -> Circle Base -> Object
*/

/*
 *   Define a Parent Object for the Circle object
 */

//? Parent Object
function Shape() {}

//? Function to be inherited by the Circle object
Shape.prototype.duplicate = function () {
  console.log("Duplicate");
};

/*
?   No inheritance applied (Implicit relationship)
    Circle  => CircleBase (Circle.Prototype) => ObjectBase (Object.Prototype)
*/
Circle.prototype = Object.create(Object.prototype);

/* 
?   Applied inheritance between Circle and Shape 
    Circle => CircleBase (Circle.Prototype) => ShapeBase (Shape.prototype) => ObjectBase (Object.Prototype)
*/
Circle.prototype = Object.create(Shape.prototype);

//? Reset the constructor function from the Shape object to the Circle object (best practice)
Circle.prototype.constructor = Circle;

function Circle(radius) {
  this.radius = radius;
}

const circle = new Circle(1);
circle.duplicate();
