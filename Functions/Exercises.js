/*
 *   Create a function that takes a varying number of arguments and return their sum.
 *   Modify the function to accept an array and still return the same result
 *
 */

function sum(...items) {
  const input = Array.isArray(items[0]) ? items[0] : items;

  return input.reduce((accummulator, currentValue) => {
    return accummulator + currentValue;
  });
}
