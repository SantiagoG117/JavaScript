/*  Object's properties:
 * Write a function that takes an object and displays all its properties along with their
 * value.
 */

function showObject(object) {
  for (let key in object) console.log(object[key]);
}

/* Equality functions
*   Create two functions:
*       areEqual(): verify if the two objects are equal. Objects are reference types. 
*       We can have two objects with the exact same properties but because these objects
*       are in different memory locations the equality operator (===) won't work.

*       areSame(): Verify if two objects are pointing to the same object.
*/

//Check that both objects have the same properties
function areEqual(address1, address2) {
  for (let key in address1) {
    if (address1[key] !== address2[key]) return false;
  }
  return true;
}

//Verify if both address are pointing to the exact same object in memory
function areSame(address1, address2) {
  return address1 === address2;
}

/* Object literal syntax:
 * Use the object literal syntax to create and initialize a Blog Post Object
 */

let post = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  //Since we may have multiple comments, we can create an array of comments
  comments: [
    { author: "a", body: "b" },
    { author: "c", body: "d" },
  ],

  isLive: true,
};

/* Constructor functions:
 * Build a constructor function for a blogging engine that creates objects for posts that
 * haven't been published yet
 */

function PostConstructor(title, body, author) {
  (this.title = title),
    (this.body = body),
    (this.author = author),
    //A new post object has 0 views
    (this.views = 0),
    //A new post object won't have any comments
    (this.comments = []),
    //The new post is not published yet
    (this.isLive = false);
}

/* Array of objects
 *   Create an array of price ranges
 */

let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 30 },
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

function StopWatch() {
  //Attributes
  let duration = 0;
  let isRunning = false;
  let startTime;
  let endTime;

  //Properties
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });

  //Methods
  this.start = function () {
    if (isRunning) throw new Error("Stopwatch has already started");

    isRunning = !isRunning;
    startTime = new Date();
    console.log("Stopwatch is running");
  };

  this.stop = function () {
    if (!isRunning) throw new Error("Stopwatch is not started");
    endTime = new Date();
    duration = (endTime.getTime() - startTime.getTime()) / 1000; //getTime() returns the number of milliseconds
    isRunning = !isRunning;
    console.log(`Stopwatch stopped. Duration: ${duration}`);
  };

  this.reset = function () {
    duration = 0;
    isRunning = false;
    startTime = null;
    endTime = null;

    console.log(`
      Stopwatch was reset
      Duration: ${duration}
      isRunning: ${isRunning}
      `);
  };
}
