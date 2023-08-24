//? Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

//* Solution
// const triangleBuilder = () => {
//   for (let triangle = "#"; triangle.length < 8; triangle += "#") {
//     console.log(triangle);
//   }
// };

// triangleBuilder();

//? FizzBuzz - print 1-100, for numbers divisible by 3 print "Fizz", for numbers divisible by 5 print "Buzz", for numbers divisible by both print "FizzBuzz"

//* Solution
// const fizzBuzz = () => {
//   for (let num = 1; num <= 100; num++) {
//     if (num % 3 === 0 && num % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (num % 3 === 0) {
//       console.log("Fizz");
//     } else if (num % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(num);
//     }
//   }
// };

//* Alternate solution using switch (I like if/else better)
// const altFizzBuzz = () => {
//   for (let num = 1; num <= 100; num++) {
//     switch (true) {
//       case num % 3 === 0 && num % 5 === 0:
//         console.log("FizzBuzz");
//         break;
//       case num % 3 === 0:
//         console.log("Fizz");
//         break;
//       case num % 5 === 0:
//         console.log("Buzz");
//         break;
//       default:
//         console.log(num);
//     }
//   }
// };

//* Clever solution from the book
// const cleverFizzBuzz = () => {
//   for (let num = 1; num <= 100; num++) {
//     let output = "";
//     if (num % 3 === 0) output += "Fizz";
//     if (num % 5 === 0) output += "buzz";
//     console.log(output || num);
//   }
// };

// cleverFizzBuzz();
// fizzBuzz();
// altFizzBuzz();

//? Chessboard - create a string that represents an 8x8 grid, using newline chars to separate lines. Each position in the grid is either ' ' or '#'.
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

//* Solution
//* we can start with one loop that prints the first column of each row
// const chessboard1 = () => {
//   const size = 8;
//   let pattern = "";

//   for (let row = 0; row < size; row++) {
//     if (row % 2 === 0) {
//       pattern += " ";
//     } else {
//       pattern += "#";
//     }
//     pattern += "\n";
//   }
//   return pattern;
// };

// * to get a full board we nest a loop to print all columns in each row
// const chessboard2 = (size) => {
//   // const size = 8;
//   let pattern = "";

//   for (let row = 0; row < size; row++) {
//     for (let column = 0; column < size; column++) {
//       if ((row + column) % 2 === 0) {
//         pattern += " ";
//       } else {
//         pattern += "#";
//       }
//     }
//     pattern += "\n";
//   }
//   return pattern;
// };

// console.log(chessboard1());
// console.log(chessboard2(20));

//? Minimum - function that takes two arguments and returns the minimum

//* Solution ezpz
// const minimum = (num1, num2) => {
//   if (num1 < num2) {
//     return num1;
//   }
//   return num2;
// };

// console.log(minimum(10, 20));

//? Recursion - function that accepts a single positive number as a param and returns a boolean

//*Solution
// const isEven = (num) => {
//   if (num < 0) {
//     console.log("Please enter a positive number!");
//     return isEven(-num);
//   } else if (num === 1) {
//     return false;
//   } else if (num === 0) {
//     return true;
//   } else return isEven(num - 2);
// };

// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));

//? 1. Bean counting - function that takes in a string and returns the number of 'B's in the string
//? 2. next write a function that counts the characters specified by a second argument
//? 3. re-write first function to include second's functionality

//* Solution 1
// const countBs = (string) => {
//   let capitalBs = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "B") {
//       capitalBs++;
//     }
//   }
//   return capitalBs;
// };
// console.log(countBs("There are 2 B in this Bentence"));

//* Solution 2
// const countChar = (string, char) => {
//   let chars = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === char) {
//       chars++;
//     }
//   }
//   return chars;
// };
// console.log(countChar("There are 2 B in this Bentence", "e"));

//* Solution 3
// const countBChars = (string) => {
//   return countChar(string, "B");
// };
// console.log(countBChars("There are 2 B in this Bentence"));

//? 1. Range - function that accepts a start and end and returns an array of numbers from start to end, inclusive
//? 2. Sum - function that takes in an array and returns the sum of the values
//? bonus - modify range to accept a 'step' value, or 1 if none is specified, positive or negative

//* Solution 1
// const range = (start, end) => {
//   const nums = [];

//   for (let i = start; i <= end; i++) {
//     nums.push(i);
//   }
//   return nums;
// };
// console.log(range(1, 10));

//* Solution 2
// const sum = (array) => {
//   let total = 0;

//   for (num of array) {
//     total += num;
//   }
//   return total;
// };
// console.log(sum(range(1, 10)));

//* ✨bonus✨
// this one was fun, I definitely needed help regarding the default -1 because I didn't know you could have ternaries in arguments.

// const stepRange = (start, end, step = start < end ? 1 : -1) => {
//   const nums = [];

//   if (step > 0) {
//     for (let i = start; i <= end; i += step) {
//       nums.push(i);
//     }
//   } else {
//     for (let i = start; i >= end; i += step) {
//       nums.push(i);
//     }
//   }
//   return nums;
// };
// console.log(stepRange(10, 1, -2));

//? Reverse an array (new array and in-place)

//* Solution - new array
// my version
// const reverseArray = (array) => {
//   const reversed = [];

//   for (let i = 0; i <= array.length - 1; i++) {
//     reversed.push(array[array.length - 1 - i]);
//   }
//   return reversed;
// };

// book version
// function reverseArray2(array) {
//   let output = [];

//   for (let i = array.length - 1; i >= 0; i--) {
//     output.push(array[i]);
//   }
//   return output;
// }

// console.log(reverseArray([1, 2, 3]));
// console.log(reverseArray2([1, 2, 3]));

//* Solution - in-place
// my version, too verbose?
// const reverseArrayInPlace = (array) => {
//   for (let i = 0; i <= Math.floor(array.length / 2); i++) {
//     let first = array[i];
//     let last = array[array.length - 1 - i];
//     array[i] = last;
//     array[array.length - 1 - i] = first;
//   }
//   return array;
// };

// book version, too succinct?
// function reverseArrayInPlace2(array) {
//   for (let i = 0; i < Math.floor(array.length / 2); i++) {
//     let old = array[i];
//     array[i] = array[array.length - 1 - i];
//     array[array.length - 1 - i] = old;
//   }
//   return array;
// }

// const originalArray = [1, 2, 3];
// const originalArray2 = [1, 2, 3];
// console.log(reverseArrayInPlace(originalArray));
// console.log(reverseArrayInPlace2(originalArray2));
// console.log(originalArray);
// console.log(originalArray2);

//? List - this one got my brains a-bubblin, need to chew on it for a bit

//* Solution

// const arrayToList = (array) => {
//   let list = null;

//   for (let i = array.length - 1; i >= 0; i--) {
//     list = { value: array[i], rest: list };
//   }
//   return list;
// };

// console.log(arrayToList([1, 2, 3]));

// const listToArray = (list) => {
//   const array = [];

//   for (let node = list; node; node = node.rest) {
//     array.push(node.value);
//   }
//   return array;
// };

// console.log(listToArray(arrayToList([1, 2, 3])));

// const prepend = (value, list) => {
//   return { value, rest: list };
// };

// console.log(prepend(1, prepend(2, null)));

// const nth = (list, n) => {
//   if (!list) return undefined;
//   else if (n === 0) return list.value;
//   else return nth(list.rest, n - 1);
// };

// console.log(nth(arrayToList([1, 2, 3]), 1));

//? Deep comparison - more mush, let's dig in again after a break

//* Solution
// const deepEqual = (val1, val2) => {
//   if (val1 === val2) return true;

//   if (val1 == null || typeof val1 != "object" || (val2 == null) | (typeof val2 != "object"))
//     return false;

//   let keysOf1 = Object.keys(val1),
//     keysOf2 = Object.keys(val2);

//   if (keysOf1.length != keysOf2.length) return false;

//   for (let key of keysOf1) {
//     if (!keysOf2.includes(key) || !deepEqual(val1[key], val2[key])) return false;
//   }
//   return true;
// };

// const val1 = { name: "Geo", age: 34 };
// const val2 = { name: "Kallyn", age: 34 };
// const val3 = { age: 34 };
// const val4 = { age: 34 };
// const val5 = 23;
// const val6 = "hwat";
// console.log(deepEqual(val1, val2));
// console.log(deepEqual(val3, val4));
// console.log(deepEqual(val5, val6));
