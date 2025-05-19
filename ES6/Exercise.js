/* 

 */

const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }

  //Instance methods
  push(item) {
    _items.get(this).push(item);
  }

  pop() {
    if (_items.get(this).length === 0)
      throw new Error("Stack is already empty");

    const itemRemoved = _items.get(this).pop();
    return itemRemoved;
  }

  peek() {
    if (_items.get(this).length === 0)
      throw new Error("Stack is already empty");
    const lastIndex = _items.get(this).length - 1;
    return _items.get(this)[lastIndex];
  }
  // Getters and setters
  get count() {
    return _items.get(this).length;
  }
}

const s = new Stack();

console.log(s);
