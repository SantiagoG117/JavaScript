/* 
*   Define a color parameter to be inherited by all the objects that inherit from the 
*   Shape class.
*/

//? Intermidiate Function Inheritance: A function for creating a inheritance ('is a') relationship between two objects
function inherit(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);

    //Reset the constructor function from the Parent object back to the Child object (best practice)
    Child.prototype.constructor = Child;
}

//? Parent Object
function Shape(color) {
    this.color = color;
}

//* Function to be inherited by child objects of Shape
Shape.prototype.duplicate = function() {
    console.log("Duplicate");
}


//?Child objects
function Circle(radius, color){
    Shape.call(this, color); //<- Call to the super constructor of Shape
    this.radius = radius;
};

//* Inheritance between Circle and Shape 
inherit(Circle, Shape);


function Square(size, color){
    Shape.call(this, color);//<- Call to the super constructor of the Shape object
    this.size = size;
}

//* Inheritance between Square and Shape
inherit(Square, Shape);


const circle = new Circle(1, 'red');
const square = new Square(2, 'blue');
















