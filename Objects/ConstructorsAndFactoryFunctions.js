//?   Factory functions: A function that returns a new object
function createCircle(radius) {
  return {
    radius,

    draw() {
      console.log("Draw function called");
    },
  };
}

let circleFactory = createCircle(1);

/*
 ?   Constructor function:
 *       A function that uses the 'this' keyword to create a new object.
 *       The 'this' keyword is a reference to the object that is executing the piece of code
 */

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };

  //return this; <- This happens under the hood
}

/* 
    Three actions happen when calling the new keyword:
        1. A new empty object is created {}
        2. Set 'this' to the new empty object {} and assign all the properties and methods defined in the constructor function to that object
        3. Return the new object from the constructor function
*/
let circleConstructor = new Circle(1);

/* 
  ? Constructor property:
  Every object in JavaScript has a property called Constructor, which references the function that was used to 
  build the object. 
  
  The Constructor property of objects built throgh constructor functions reference the constructor
  property itself. 
  
  The Constructor property of objects built throgh factory functions reference the Object() function. This is a built
  in function that is used when an object is created through the Object literal syntax {}. Factory functions use the
  Object literal syntax to create objects.

  Under the hood JavaScript create the x object using Object function:
  let x = {};  -> let x = new Object();


  
*/
