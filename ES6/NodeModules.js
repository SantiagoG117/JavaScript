/* 
    ? Rule of thumb when dealing with modularity in Node.js:
    Cohesion: Things that are highly related should go together.

    By default, everything that we define in a module is considered private, so it can only be accessible from the 
    outside if we explicitly export it.
*/

//? Implementation Details (not accessible)
const _radius = new WeakMap();

//? Public interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log(`Circle with radius: ${_radius.get(this)}`);
  }
}

/* 
    module references to the current module 
    exports is an object. We can add one or more properties to this objects.

    If we were to import more than one class we should write this code:
    module.exports.Circle = Circle;
    module.exports.Square = Square;
*/
module.exports = Circle; //Only exports the Circle Object
