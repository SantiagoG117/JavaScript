/*?   Prototypes and Prototypical inheritance:

*   In JavaScript we don't have classes, we only have objects. So we implement inheritance
*   through Prototyes. A Prototype is just a regular object that is the parent to another 
*   object, and in which we can add all the common behavior (methods) and then link the
*   sub-objects to it.

*   Every object in JavaScript has a prototype and it inhertes all the methods decalred
*   in it. There is only one object that has no Prototype which can be referred as 
*   the Root Object. Every object directly or indirectly inherits from this object.
*/

let x = {};
let y = {};

//Both objects share the same Prototype, which is the RootObject.
(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));


/* Constructor's prototypes
*   Objects created by a given constructor will have the same Prototype.
*   Everytime we call the Circle constructor this constructor will create a new circle
*   object and set its prototype property to the same Prototype object. We can call 
*   this object CircleBase.

? Prototypical inheritance:
* To avoid storing duplicate versions of the same function in memory when creating diferent objects
* of the same Prototype we can store that function in the Prototype and inherit it 
* across all the sub-objects. The Prototype object and its members only exists once in 
* memory.

* In Prototypical inheritance, when we access a method or a property the JavaScript engine 
* first looks at the object itself, if it can't find it, it will look at the Prototype of 
* that object.

* 
 */
function Circle(radius){
    //Instance members
    this.radius = radius;

    this.move = function(){
        console.log("move");
    }
    
    this.instanceMember = function() {
        this.prototypeMember();
        console.log('We can reference instance members inside prototype members')
    }
}

//Prototype members:
Circle.prototype.draw = function() {
    this.instanceMember();
    console.log("Draw");
};

Circle.prototype.prototypeMember = function() {
    console.log('We can reference prototype members inside instance members')
}

Circle.prototype.toString = function(){
    return 'Circle with radius of ' + this.radius;
}

const c1 = new Circle(1);

//Object keys only iterates over instance members
Object.keys(c1);

//To iterate over both instance and prototype members:
for (let key in c1) 
    key;

/* Attributes of a property:
*   The properties of an object have attributes attached to them.
*   When we create our own objects we can set the attributes of each property.
*/

let person = { 
    name: 'Santiago'
};

Object.defineProperty(
    person, //Object upon which we wish to define the property
    'name', //Name of the propery
    //*Property descriptor object: we define the attributes of the property in here
    {
        writable: false, //Makes the property read only
        enumerable: false, //Prevents the property from being called when iterting over all the properties of the object
        configurable: false // Prevents this property from being deleted
    }
)

delete person.name;