/* 
    ? Rule of thumb when dealing with modularity in Node.js:
    Cohesion: Things that are highly related should go together.

    By default, everything that we define in a module is considered private, so it can only be accessible from the 
    outside if we explicitly export it using the prefixing it with the export keyword.
*/

//? Implementation Details (not accessible)
const _radius = new WeakMap();

//? Public interface
export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log(`Circle with radius: ${_radius.get(this)}`);
  }
}
