const SCRIPTS = require("./scripts");

//? Flattening - use reduce and concat to flatten an array of arrays

//* Solution

const flatten = (array) => {
  // const flatArray = array.reduce((a, b) => a.concat(b), []); //adding the [] isn't totally necessary since we know there is at least one item in rayRay
  const flatArray = array.reduce((a, b) => a.concat(b));

  return flatArray;
};

const rayRay = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8],
];

console.log(flatten(rayRay));

//? My very own for loop 💖

//* Solution

const loop = (start, test, update, body) => {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
};

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);

//? Everything - write a function that takes an array and predicate function and returns true only if every element is true

//* Solution

const everything = (array, test) => {
  for (let item of array) {
    if (!test(item)) {
      return false;
    }
  }
  return true;
};

// this one uses De Morgan's laws, all elements of the array match if no elements don't match
const everythingSome = (array, test) => {
  return !array.some((item) => !test(item));
};

const trueArray = [1, 2, 3, 4, 5];
const falseArray = [1, 2, 0, 4, 5];

console.log(everything(trueArray, (n) => n > 0));
console.log(everything(falseArray, (n) => n > 0));
console.log(everythingSome(trueArray, (n) => n > 0));
console.log(everythingSome(falseArray, (n) => n > 0));

//? Dominant writing direction -
//! this got super spicy again

//* function from the book
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

//* function from the book
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

const dominantWritingDirection = (text) => {
  let counted = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
};

console.log(dominantWritingDirection("Hey, مساء الخير"));
console.log(dominantWritingDirection("Hello!"));
