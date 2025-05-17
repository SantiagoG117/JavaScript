/*   
    ? Prototypes and Prototypical inheritance: -------------------------------------------------------------------------------
*   In JavaScript we don't have classes, we only have objects. So we implement inheritance
*   through Prototyes. A Prototype is essentially an object that is the parent to another 
*   object. To practice inheritance, we can encapsulate all the common behavior in a Prototype
*   object and then link sub-Objects to it, so they can inherit said behavior 

*   Every object in JavaScript has a prototype and it inhertes all the methods decalred
*   in it. There is only object that has no Prototype which can be referred as 
*   the Root Object. Every object directly or indirectly inherits from this object.
*/

let x = {};
let y = {};

//Both objects share the same Prototype, which is the RootObject.
Object.getPrototypeOf(x) === Object.getPrototypeOf(y);

/* 
?   Constructor's prototypes: -------------------------------------------------------------------------------------------------
*   Objects created by a given constructor will have the same Prototype.
   
*   All arrays created by the Array constructor function will share the same Prototype (Array)
*   let myArray = [] -> Array Base -> Object

*   All objects created by the Circle constructor will share the same Prototype (circle)
*   let circle = new Circle -> Circle Base -> Object
*/

/*
? Prototypical inheritance: -------------------------------------------------------------------------------------------------------
*   To avoid storing multiple versions of the same function in memory when creating diferent objects of the same Object we can define 
*   that function in the Prototype and inherit it across all sub-objects.

*   Prototype level members can only access public instance level members. Private members (let local variables and functions) cannot
*   be accessible by prototype members

*   Moving methods of an object to its prototype is a good optimization technique only when we are working with a large number
*   of objects of the same type.
 */
function Circle(radius) {
  /* 
    Instance level members:
      -All instances of this Object have a copy in memory of the properties and methods defined within the constructor
      function.
      - Instance level members can access Prototype level properties
  */
  this.radius = radius;

  this.move = function () {
    console.log("move");
  };

  this.instanceMember = function () {
    this.prototypeMember();
    console.log("We can reference instance members inside prototype members");
  };
}

/* 
  Prototype level members:
    - Properties and methods defined in the Prototype of an Object exist only once in memory and can be accessed via 
    inheritance.
    - Prototype level properties can access instance level properties
*/
Circle.prototype.draw = function () {
  this.instanceMember();
  console.log("Draw");
};

Circle.prototype.prototypeMember = function () {
  console.log("We can reference prototype members inside instance members");
};

/* 
  Overwrite prototype level members:
*/
Circle.prototype.toString = function () {
  return `Circle with radius: ${this.radius}`;
};

const c1 = new Circle(1);

//? Iterate instance and prototype members: -------------------------------------------------------------------------------------------------------
//Object keys only iterates over instance members
Object.keys(c1);

//To iterate over both instance and prototype members:
for (let key in c1) key;

/* 
?   Attributes of a property:  -------------------------------------------------------------------------------------------------------
 *   The properties of an object have attributes attached to them.
 *   When we create our own objects we can set the attributes of each property.
 */

let person = {
  name: "Santiago",
};

Object.defineProperty(
  person, //Object upon which we wish to define the property
  "name", //Name of the propery
  //*Property descriptor object: we define the attributes of the property in here
  {
    writable: false, //Makes the property read only
    enumerable: false, //Prevents the property from being called when iterting over all the properties of the object
    configurable: false, // Prevents this property from being deleted
  }
);

delete person.name;
