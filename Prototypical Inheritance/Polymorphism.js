/* 
*   Polymorhism: 
    We can define a method in the Prototype object and implement different implementations of the same method
    in each of the objects inherit from the prototype
*/

//? Intermidiate Function Inheritance: A function for creating a inheritance relationship between two objects
function inherit(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    //Reset the constructor function from the Parent object back to the Child object (best practice)
    Child.prototype.constructor = Child;
}

//? Parent Object
function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('Duplicate')
}

//?Child objects
function Circle(){

};

//* Inheritance between Circle and Shape 
inherit(Circle, Shape);

//* Method overriding
Circle.prototype.duplicate = function() {
    console.log("Duplicate for Circle objects");
}


function Square(){
}

//* Inheritance between Square and Shape
inherit(Square, Shape);

Square.prototype.duplicate = function(){
    console.log('Duplicate for Square objects')
}

const shapes = [
    new Circle(),
    new Square
];

for (let shape of shapes)
    shape.duplicate();















