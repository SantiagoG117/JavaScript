/* 
*   Primitive types
*       Variables holding primitive values have a direct reference to their values.
*/

let x = 10; // x-> 10
let y = x; // y -> 10

x = 20; // x -> 20
console.log(y); //Output 10

//******************************************************************************************

let number = 10; // number -> 10

function increase(number){
    number++; 
};

/* 
*Value of number is copied into the number argument of the increase function. Two separate
*variables with indipendent values. 
*/
increase(number); 
console.log(number);// Output: 10 


/* Reference types:
*   Objects reference a memory address where the actual value of the object is stored in
*   memory.
*/

let objectX = {value: 10}; // objectX -> Reference to memory address 1234
let objectY = objectX; // object Y -> Reference to memory address 1234

objectX.value = 20; // Memory address 1234 = {value: 20}

console.log(objectY); // Output value {value: 20}

//************************************************************************************** */

let objectNumber = {value : 10}; // objectNumber -> Reference to memory address 1234

function increaseObject(objectNumber){
    objectNumber.value++; 
};

/*
*objectNumber is passed by its reference in memory. Both reference variables are referencing
* the same address in memory*/

increaseObject(objectNumber);

//console.log(objectNumber); Output value {value: 11}
