function HtmlElement() {
  //Instance level method
  this.click = function () {
    console.log("Clicking...");
  };
}

//Prototype level method :
HtmlElement.prototype.focus = function () {
  console.log("On focus...");
};

HtmlElement.prototype.render = function () {
  return "render element";
};

//Optionally pass an array of items. If no array is passed, it will be initialized to an empty array
function HtmlSelectElement(items = []) {
  //Attributes
  this.items = items;

  //Instance level members:
  this.addItem = function (item) {
    this.items.push(item);
    console.log(`${item} added to items: ${this.items}`);
  };
  this.removeItem = function (item) {
    //Find the index of the item we wish to remove
    const index = this.items.indexOf(item);
    console.log(index);

    //Remove the item and return it
    return this.items.splice(index, 1);
  };
}

/* 
  htmlSelectElement inherits from HtmlElement.
  
  The prototype of htmlSelectElement should be an instance of the htmlElement not
  the prototype of htmlElement. 

  If we set the prototype of htmlSelectElement to an instance of htmlElement we won't
  have access to the instance level methods of htmlElement
*/
HtmlSelectElement.prototype = new HtmlElement();

HtmlSelectElement.prototype.render = function () {
  return `
  <select>
   ${this.items.map((item) => `<option>${item}</option> \n`).join("")}
  </select>
  `;
};

function HtmlImageElement(src = "http://") {
  this.src = src;
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.render = function () {
  return `<img src=${this.src} />`;
};

const s = new HtmlSelectElement([1, 2, 3]);
const i = new HtmlImageElement("Joe Momma.com");
const e = new HtmlElement();

const elements = [s, i, e];

for (let element of elements) console.log(element.render());
