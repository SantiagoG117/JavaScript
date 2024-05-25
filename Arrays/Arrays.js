/*
*   Adding objects to an array. 
*/

const numbers = [3, 4];

//*Add a value to the end of the array
numbers.push(5, 6);

//?Add a value at the beginning of the array
numbers.unshift(1, 2);

//Add a value in the middle of the array
numbers.splice(2, //Starting index
    0, //Number of items we wish to remove from the index
    'a', 'b' //Items to be inserted in the index.
);

/* 
*   Removing elements from an array:
*/

//Remove the last value of an array and returns it
numbers.pop();

// Remove the first value of an array and returns it
numbers.shift();

//Remove the element at a specific index in an array
numbers.splice(1, //Index where we want to start the delete
    2) //Number of elements we want to delete




/* 
* Create a function to verifies if a primitive element exist in an array
*/
function PrimitiveValueExist(array, value) {
    console.log(array.includes(value));
};



/* 
* Combine two arrays using the spread operator
*/

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6]

const combined = [...firstArray, 'both arrays are comined with extra values', ...secondArray];

/*
*   Split a string and then rejoin it using a hyphen
 */

const webSiteTitle = "Stack Overflow Title";
const parts = webSiteTitle.split(' ');

const partsForURL = parts.join('-')

/* 
* Create a function that verifies if a reference element exist in an array.
* find() Requires a predicate to determine of the given element exist in
* the array. This function takes a parameter that represents an element in the array
* and returns the first element that matches the criteria displayed in the predicate.
* If no element is found, it returns undefined.

* Create a function that sorts an array of objects
*/

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'javaScript' },
    { id: 3, name: 'React' },
];

function CourseExist(courses, course) {
    return courses.find(element => element.name === course.name);
}

function SortArray(array){
    //?sort() has as optional parameter a function that is used for comparing objects
    array.sort(function(first, second){
        //Ensure that all the strings have the same ACSII value
        const nameA = first.name.toLowerCase();
        const nameB = second.name.toLowerCase();

        /*
        ?   if first < second -> return -1
        ?   if first > second -> return 1
        ?   if first === second -> return 0 
         */

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    })
};

SortArray(courses);

/* 
*Testing and filtering elements of an array
*   Write a function that test if all the numbers in an array are positive
*   Write a function that test if at least one element in the array matches a given criteria
*   Write a function that return the positive values of an array
*/

var Numbers = [1, -1, 2, 3];

function valuesArePositive(array){
    return array.every(value => value >= 0);
};

function someValuesArePositive(array){
    return array.some(value => value >= 0);
}

function getPositiveValues(array){
    return array.filter(value => value >= 0)
}


const allPositive = valuesArePositive(Numbers);
const somePositive = someValuesArePositive(Numbers);
const positiveNumbers = getPositiveValues(Numbers);


/* 
*   Mapping Arrays: Allows us to map each item in an array to something else.
*/

const items  = positiveNumbers.map(n => '<li>' + n + '</li>');

//Join the elements of the items array to build a an unordered list html markup:
const html = '<ul>' + items.join('') + '</ul>';

//Crete objects based on the values of the array
const objects = positiveNumbers.map(n => {
    return {value: n};
})

/* 
*   Reduce elements of an array to a single value. The value can be anything (a number, a string
*   an object, etc).
*   Reduce all the numbers in the array to a single value
*/

const priceOfItems = [1, 2, 3, 4];

//??accummulator works as a counter
const totalValue = priceOfItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue //Internally, the result result of this will be stored in the accummulator
);


console.log(totalValue);

