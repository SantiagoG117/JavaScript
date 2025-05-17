//?   Adding objects to an array. ----------------------------------------------------------------------------------------------------------

let includesNumbers = [3, 4];

//*Add a value to the end of the array
includesNumbers.push(5, 6);

//*Add a value at the beginning of the array
includesNumbers.unshift(1, 2);

//*Add a value in the middle of the array (Returns an array with the changes)
includesNumbers.splice(
  2, //Starting index
  0, //Number of items we wish to remove from the index
  "a",
  "b" //Items to be inserted in the index.
);

//?Removing elements from an array:  ----------------------------------------------------------------------------------------------------------

//Remove the last value of an array and returns it
includesNumbers.pop();

// Remove the first value of an array and returns it
includesNumbers.shift();

//Remove the element at a specific index in an array
includesNumbers.splice(
  1, //Index where we want to start the delete
  2 //Number of elements we want to delete
);

//? Finding elements in an array: ----------------------------------------------------------------------------------------------------------

includesNumbers = [1, 2, 3, 4, 5];

function primitiveValueExist(value, array) {
  return array.includes(value);
}

let courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "React" },
];
/* 
 find() Requires a predicate function to determine of the given object exist in the array. 
 It takes a parameter that represents an element in the array and returns the first element that matches the boolean criteria.
 If no element is found, it returns undefined.
*/
function objectExist(object, array) {
  return array.find((element) => element.name === object.name);
}

const exist = objectExist({ id: 1, name: "Node.js" }, courses);

//? Emptying and array: ----------------------------------------------------------------------------------------------------------

includesNumbers = [1, 2, 3, 4, 5];
otherArray = includesNumbers;

includesNumbers.length = 0;

//? Combining and slicing an array: ----------------------------------------------------------------------------------------------------------

//* Spread operator
const firstArray = [{ id: 11 }];
const secondArray = [11, 12, 13];

const combined = [...firstArray, "Some other values", ...secondArray];
firstArray[0].id = 10;

//* Slice operator
const sliced = combined.slice();

//* Split operator
const splitOperator = "Stack Overflow Title";
const parts = splitOperator.split(" ");
const partsForURL = parts.join("-");

//? Iterating  an array: ----------------------------------------------------------------------------------------------------------
const letters = ["a", "b", "c", "d"];
for (let letter of letters) letter;
letters.forEach((letter, index) => (index, letter)); //Unlike for of loop, accepts the index as an argument of the callback function

//? Sorting  an array: ----------------------------------------------------------------------------------------------------------
courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "React" },
];

function SortArray(array) {
  //?sort() has as optional parameter a function that is used for comparing objects
  array.sort((first, second) => {
    //Ensure that all the strings have the same ACSII value
    const nameA = first.name.toLowerCase();
    const nameB = second.name.toLowerCase();

    //names are compared based on ASCII table values
    if (nameA < nameB) return -1; //nameA should come before nameB
    if (nameA > nameB) return 1; //nameB should come before nameA
    return 0; //Order remains unchanged
  });
}

SortArray(courses);

//? Testing the elements in an array: ----------------------------------------------------------------------------------------------------------
includesNumbers = [1, -1, 2, 3];

//* Every operator (test if all the elements of an array meet the given criteria):
function valuesArePositive(array) {
  return array.every((value) => value >= 0);
}

const allPositive = includesNumbers.every((value) => value >= 0);

//* Some operator (test if at least one element of an array meet the given criteria)
function someValuesArePositive(array) {
  return array.some((value) => value >= 0);
}

//? Filtering arrays: ----------------------------------------------------------------------------------------------------------
function getPositiveNumbers(array) {
  return array.filter((value) => value >= 0);
}

//? Mapping arrays: ----------------------------------------------------------------------------------------------------------

//* Mapping Arrays: Allows us to map each item in an array to a different item and return an array with the result.
const positiveNumbers = includesNumbers.filter((value) => value >= 0);
const items = positiveNumbers.map((n) => "<li>" + n + "</li>");

//Join the elements of the items array to build a an unordered list html markup:
const html = "<ul>" + items.join("") + "</ul>";

//Crete objects based on the values of the array
const objects = positiveNumbers.map((n) => {
  return { value: n };
});

//? Reducing arrays: ----------------------------------------------------------------------------------------------------------

/*
 *   Reduce elements of an array to a single value. The value can be anything (a number, a string
 *   an object, etc).
 *   Reduce all the numbers in the array to a single value
 */

const priceOfItems = [1, 2, 3, 4, 10];

//?accummulator works as a counter
const totalValue = priceOfItems.reduce(
  (accumulator, currentValue) => accumulator + currentValue //Internally, the result result of this will be stored in the accummulator
);
