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
//   for (let triangle = ""; triangle.length < 8; triangle += "#") {
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

// fizzBuzz();
// altFizzBuzz();
