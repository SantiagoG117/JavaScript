walk();

/* 
?   Function Declaration Hoisting:
*       - Hoisting allow function declarations to be called before they are defined. 
*       - Hoisting is the process of moving function declarations to the top of the file 
*       -  This is done automatically by the JavaScript engine. 
*/

function walk() {
  console.log("Walking");
}

/* 
?    Function Expression:
*       - Functions are objects. Setting a variable to a function is similar to set it to an
*         object.
*       - Can be anonymous or named function expressions. 
*       - Cannot be called before they are initialized
*/

let run = function () {
  console.log("Running");
};

/*
 ?   arguments keyword:
 *       - Special object of every function that holds the value of each parameter send to
 *         the function.
 *       - Allows us to create functions with a dynamic number of arguments
 */

function sumArguments() {
  let total = 0;

  for (let value of arguments) //We can use the for of loop on this object because it has an iterator.
    total += value;

  return total;
}

sumArguments(1, 2, 3, 4, 5, 10);

/*
 ?   Rest operator:
*        - Like the arguments keyword, it allows us to create a function with a varying number of arguments but with less code.
 *       - Stores all the arguments of a function in an array
 *       - ... must always be the last parameter
 *
 *   Build a function that takes the price of different items and a discount factor
 */
function totalSumSpread(discount, ...prices) {
  const total = prices.reduce((accummulator, currentValue) => {
    return accummulator + currentValue;
  });

  //Apply the discount to the total
  return total * (1 - discount);
}

/*
 ?   Parameters with default values:
 *       - Once we get a parameter a default value, we should give all the following parameters
 *         a default value. Otherwise we will get a NaN (Not a Number).
 */

function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}




//?   Getters, setters and validations
const person = {
  //Properties
  firstName: "Santiago",
  lastName: "Garcia",
  //Getter
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  //Setter
  set fullName(fullName) {
    if (typeof fullName !== "string")
      /* 
            Create a new error object
            */
      throw new Error("Value is not a string");

      
    const fullNameParts = fullName.split(" ");
    if (fullNameParts.length !== 2)
      throw new Error("Enter a first and last name");

    this.firstName = fullNameParts[0];
    this.lastName = fullNameParts[1];
  },
};


try {
  //Call to the setter
  person.fullName = "";
} catch (e) {
  alert(e);
}

/* 
*   Scope:
*   const and let (block-scoped variables) scope limited to the block in which they were defined
*       
!   var (function-scoped variables): Its Scope is limited to the function which they are defined, not the block.
!                                    This is makes it dangerous and should be avoided. 
*
*/
