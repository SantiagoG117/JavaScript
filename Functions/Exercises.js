/* 
*   Create a function that takes a varying number of arguments and return their sum.
*   Modify the function to accept an array and still return the same result
*   
*/

function sum(...args){
    if(args.length === 1 && Array.isArray(args[0]))
        /* 
        * Use the spread operator to store the array within the args array
        */

        args = [...args[0]]
    
       
    
    /* 
    *   Calls the arrow function for all the arguments in the ...args
    *   array. The return value of each arrow function is the accumulated
    *   result and is provided as argument in the next call of the arrow
    *   function.
    */
    return args.reduce((a, b) => a + b);
};

