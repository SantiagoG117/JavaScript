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


/*  Stopwatch:
*   Properties:
*       duration -> Initial value should be 0
*   Methods:
*       1. Reset
*           Takes the stop watch to its initial state
*       2. Start
*           Validation: Throw an error if we call the start method twice.
*           Counts the number of seconds elapsed after the start method was called.
*       3. Stop
*           Validation: Throw an error if we call the stop method twice.
*           Stops the count
*   


*/

function StopWatch(){
    //Private attributes
    let duration = 0;
    let intervalId;
    let running = false;

    //Public methods
    this.start = function() {
        if(running)
            throw new Error('Stopwatch has already started.');     
        
        intervalId = setInterval(trackSeconds, 1000);
        running = true;
    };

    this.stop = function() {
        if(!running)
            throw new Error('Stopwatch is not started');
            
        clearInterval(intervalId);
        running = false;
    };

    this.reset = function() {
        duration = 0;
        clearInterval(intervalId);
    };

    // Private methods"
    let trackSeconds = function(){
        duration++;
    };

    //Getters:
    Object.defineProperty(
        this, //Object we want to add a new property to
        'duration', //Name of the property
        //*Object for the getter
        {
            get: function(){
                return duration;
            }
        }
    )
}


/* 
const stopwatch = new StopWatch();
console.log(stopwatch.duration)
stopwatch.start();
stopwatch.stop();
console.log(stopwatch.duration); */





