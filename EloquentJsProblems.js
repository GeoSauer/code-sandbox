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
