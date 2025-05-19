/* 
?   Inheritance: 
    Inheritance enables an Object to take on the attributes and methods of a Parent Object. This eliminates redundant code and promotes
    code reusability in different parts of the application.

    Now, in JavaScript we don't have classes, we only have objects. So in JavaScript we implement
    inheritance through Prototypes. A Prototype is essentially the parent of another object. To practice inheritance, we can encapsulate all the 
    common behavior in a Prototype object and then link children objects to it, so they can inherit said behavior. 
    
    Every Object in JavaScript has a prototype and it inherits all its members. The only exception is Object, which is the root of all Objects and has no prototype. 

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
?  Define a Prototype for the Circle and Square objects
  To practice Prototypical inheritance, encapsulate all the common behavior in a Prototype object
  and inherit Circle and Square from their Prototype
*/

//? Parent Object
function Shape(color) {
  this.color = color; //All shape objects and children objects should have a color property
}

//? Prototype level function to be inherit by the children of Shape
Shape.prototype.render = function () {
  console.log("Rendering the shape");
};

function Circle(radius, color) {
  /* ? Call the super constructor:
  To initialize the color property defined in the Super class we must call the super constructor of the superclass and pass as arguments
  the instance of the current circle and the value of color.

  Since in JavaScript all functions are objects and a constructor is a function, we can call different attributes and methods with the 
  super constructor. Call() is one of those methods

  Shape.call( <- Calls the constructor of Shape (super constructor)
  this, <- Pass the instance of the circle object as the object to be used by the Shape constructor
  color <- Pass the color value
  )
  */
  Shape.call(this, color);

  this.radius = radius;
}

/* 
? Set up prototypical inheritance between Circle and Shape.
Build a new object whose prototype is Shape.prototype and assign it to Circle Prototype
This will allow all instances of the Circle object to inherit from the Shape object

Before prototypical inheritance, any circle instance inherited from Circle.prototype, which in turn
inherited from Object
const c = new Circle() -> Circle.prototype -> Object.prototype

After prototypical inheritance, Circle.prototype inherits from Shape.prototype. Which means all instances
of Circle will inherit the members of shape
const c = new Circle() - Circle.prototype -> Shape.prototype -> Object.prototype
*/
Circle.prototype = Object.create(Shape.prototype);

/* 
? Reset the constructor for circle:
Every object in JavaScript has a constructor that returns the function that was used to
create the object.

Because we set the prototype of Circle to Shape.protype, the default constructor function of
circle is the Shape() constructor. 

As a best practice, we should reset the constructor function of the sub-object to its own
constructor function so we can create an object dyncamically based on that constructor function.
*/
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log(`Drawing radious of ${this.radius}`);
};

const c = new Circle(1, "Red");
const s = new Shape();
