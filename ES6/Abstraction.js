/*
? Abstraction: 
  With abstraction we hide the implementation details and complexity in our Objects by setting them to private.
  This provide us two advantages:
    1. The interface of our objects is simpler and less poluted
    2. We reduce the impact of internal changes. By keeping the detils of our objects hidden from the rest of the Objects
    we prevent that internal changes impact the rest of the application. 

  To implement abstraction we use private properties and methods. In ES6 we can use WeakMaps to implement properties and methods
  A WeakMap is essentially a dictionary where keys are objects and values can anything. {key:object , value: any}

  They are called weak because the keys are weak, which means that if there are no reference to this keys they will be removed by the 
  garbage collector

*/

const _radius = new WeakMap(); //Should be hidden in a module to prevent external objects from accessing it.
const _colorCircle = new WeakMap(); //Should be hidden in a module to prevent external objects from accessing it.

class Circle {
  constructor(radius) {
    //?Define the value of a private attribute
    _radius.set(this, radius);

    //?Define a private attribute
    _colorCircle.set(this, () => {
      console.log(this);
    });
  }

  //? Access the value of the private attribute inside the class
  draw() {
    _colorCircle.get(this)();
    console.log(`Drawing a circle with a radius of ${_radius.get(this)}`);
  }

  //? Getters and setters
  get radius() {
    return _radius.get(this);
  }

  set radius(radius) {
    if (typeof radius !== "number")
      throw new Error("the value for radius must be a number" );
    return _radius.set(this, radius);
  }
}

const c = new Circle(11);
