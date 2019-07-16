/**
 *  Create a function that list out all the number divisible by 3 from given array of numbers
 *  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
 */

 // Using normal function definition
 function divisibleBy3 (arr) {
    return arr.filter(item => item%3 === 0);
 }
 console.log(divisibleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
 // Using arrow function

 var divisibleByThree = arr => arr.filter(item => item%3 === 0);
 console.log(divisibleByThree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));