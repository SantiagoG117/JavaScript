/*  Object's properties:
* Write a function that takes an object and displays all its properties along with their 
* value.
*/

function showObject(object){
    for(let key in object)
        console.log(object[key])
};

/* Equality functions
*   Create two functions:
*       areEqual(): verify if the two objects are equal. Objects are reference types. 
*       We can have two objects with the exact same properties but because these objects
*       are in different memory locations the equality operator (===) won't work.

*       areSame(): Verify if two objects are pointing to the same object.
*/

function areSame(object1, object2){
    return object1.propertyA === object2.propertyA
}

function areEqual(object1, object2){
    return object1 === object2;
};

/* Object literal syntax:
* Use the object literal syntax to create and initialize a Blog Post Object
*/

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    //Since we may have multiple comments, we can create an array of comments
    comments: [
        {author: 'a', body: 'b'},
        {author: 'c', body: 'd'}
    ],

    isLive: true
};

/* Constructor functions:
* Build a constructor function for a blogging engine that creates objects for posts that
* haven't been published yet
*/

function PostConstructor(title, body, author){
    this.title = title,
    this.body = body,
    this.author = author,
    //A new post object has 0 views
    this.views = 0,
    //A new post object won't have any comments 
    this.comments = [],
    //The new post is not published yet
    this.isLive = false
}

/* Array of objects
*   Create an array of price ranges
*/

let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {label: '$$$', tooltip: 'Expensive', minPerPerson:21 , maxPerPerson: 30}
];



