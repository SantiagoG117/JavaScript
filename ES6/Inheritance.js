const _radius = new WeakMap(); //Should be hidden in a module to prevent external objects from accessing it.

class Shape {
  constructor(color) {
    this.color = color;
  }

  render() {
    console.log(`Rendering a Shape with the following properties:
        Color: ${this.color}`);
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    _radius.set(this, radius);
  }
  draw() {
    console.log(`Drawing a circle for ${_radius.get(this)}`);
  }

  render() {
    console.log(`Rendering a circle with the following properties:
        Radius: ${_radius.get(this)},
        Color: ${this.color} 
`);
  }
}

const c = new Circle("Red", 11);
const s = new Shape("Blue");
const shapes = [s, c];

for (let shape of shapes) console.log(shape.render());
