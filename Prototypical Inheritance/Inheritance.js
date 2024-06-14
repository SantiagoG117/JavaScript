/* 
*   Define a Parent Object for the Circle object
*/

//? Parent Object
function Shape() {

}

//? Function to be inherited by the Circle object
Shape.prototype.duplicate = function() {
    console.log("Duplicate");
}

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

function Circle(radius){
    this.radius = radius;
}

const circle = new Circle(1);
circle.duplicate();