/* Objects:
 *   Collections of Key-value pairs that are highly related to each other.
 *   Their purpose is to group related properties and functions.
 *   In JavaScript Objects are dynamic. Once we create them we can always add additional properties or methods to them
 */

let circle = {
  // Properties:
  // Can be any data type
  radius: 1,
  isVisible: true,
  // Can be another object
  location: {
    x: 1,
    y: 1,
  },

  //Methods
  fDraw: function () {
    console.log("Draw function called");
  },
};

circle.color = "Yellow";
delete circle.color;

/* 
 ?   Functions are objects:
 *   Functions have access to built-in properties and methods, as well to its own properties
 *   and methods.
 */

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);

/*
 ?   Abstraction: Hide the details and complexity and show only the essentials.
 *
 *   To set private members in a object we just have to omit the 'this' keyword and add the 'let' keyword.
 *   The 'this' keyword references the object, by omitting it we are seting a local varible that is only accesible
 *   from within the constructor of the object.
 */

function Cilinder(radius) {
  //Private attributes
  let defaultLocation = { x: 0, y: 0 };

  //Public attributes
  this.radius = radius;

  //Getters and setters
  Object.defineProperty(
    this, //Object we want to add a new property to
    "defaultLocation", //Name of the property
    //*Object for getters and setters
    {
      get: function () {
        return defaultLocation;
      },

      set: function (value) {
        //Because we are using a function, we can add validation
        if (!value.x || !value.y) throw new Error("Invalid location");
        defaultLocation = value;
      },
    }
  );

  //public methods
  this.draw = function () {
    console.log("draw");
  };
}

const cilinder = new Cilinder(10);

cilinder.defaultLocation = 1;

console.log(cilinder.defaultLocation);
