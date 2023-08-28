//? Minimum - function that takes two arguments and returns the minimum

//* Solution ezpz
const minimum = (num1, num2) => {
  if (num1 < num2) {
    return num1;
  }
  return num2;
};

console.log(minimum(10, 20));

//? Recursion - function that accepts a single positive number as a param and returns a boolean

//*Solution
const isEven = (num) => {
  if (num < 0) {
    console.log("Please enter a positive number!");
    return isEven(-num);
  } else if (num === 1) {
    return false;
  } else if (num === 0) {
    return true;
  } else return isEven(num - 2);
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//? 1. Bean counting - function that takes in a string and returns the number of 'B's in the string
//? 2. next write a function that counts the characters specified by a second argument
//? 3. re-write first function to include second's functionality

//* Solution 1
const countBs = (string) => {
  let capitalBs = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "B") {
      capitalBs++;
    }
  }
  return capitalBs;
};
console.log(countBs("There are 2 B in this Bentence"));

//* Solution 2
const countChar = (string, char) => {
  let chars = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      chars++;
    }
  }
  return chars;
};
console.log(countChar("There are 2 B in this Bentence", "e"));

//* Solution 3
const countBChars = (string) => {
  return countChar(string, "B");
};
console.log(countBChars("There are 2 B in this Bentence"));
