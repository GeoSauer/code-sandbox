//? 1. Range - function that accepts a start and end and returns an array of numbers from start to end, inclusive
//? 2. Sum - function that takes in an array and returns the sum of the values
//? bonus - modify range to accept a 'step' value, or 1 if none is specified, positive or negative

//* Solution 1
const range = (start, end) => {
  const nums = [];

  for (let i = start; i <= end; i++) {
    nums.push(i);
  }
  return nums;
};
console.log(range(1, 10));

//* Solution 2
const sum = (array) => {
  let total = 0;

  for (num of array) {
    total += num;
  }
  return total;
};
console.log(sum(range(1, 10)));

//* ✨bonus✨
// this one was fun, I definitely needed help regarding the default -1 because I didn't know you could have ternaries in arguments.

const stepRange = (start, end, step = start < end ? 1 : -1) => {
  const nums = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      nums.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      nums.push(i);
    }
  }
  return nums;
};
console.log(stepRange(10, 1, -2));

//? Reverse an array (new array and in-place)

//* Solution - new array
// my version
const reverseArray = (array) => {
  const reversed = [];

  for (let i = 0; i <= array.length - 1; i++) {
    reversed.push(array[array.length - 1 - i]);
  }
  return reversed;
};

// book version
function reverseArray2(array) {
  let output = [];

  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

console.log(reverseArray([1, 2, 3]));
console.log(reverseArray2([1, 2, 3]));

//* Solution - in-place
// my version, too verbose?
const reverseArrayInPlace = (array) => {
  for (let i = 0; i <= Math.floor(array.length / 2); i++) {
    let first = array[i];
    let last = array[array.length - 1 - i];
    array[i] = last;
    array[array.length - 1 - i] = first;
  }
  return array;
};

// book version, too succinct?
function reverseArrayInPlace2(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

const originalArray = [1, 2, 3];
const originalArray2 = [1, 2, 3];
console.log(reverseArrayInPlace(originalArray));
console.log(reverseArrayInPlace2(originalArray2));
console.log(originalArray);
console.log(originalArray2);

//? List - this one got my brains a-bubblin, need to chew on it for a bit
//! did not solve on my own, study up
//* Solution

const arrayToList = (array) => {
  let list = null;

  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
};

console.log(arrayToList([1, 2, 3]));

const listToArray = (list) => {
  const array = [];

  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
};

console.log(listToArray(arrayToList([1, 2, 3])));

const prepend = (value, list) => {
  return { value, rest: list };
};

console.log(prepend(1, prepend(2, null)));

const nth = (list, n) => {
  if (!list) return undefined;
  else if (n === 0) return list.value;
  else return nth(list.rest, n - 1);
};

console.log(nth(arrayToList([1, 2, 3]), 1));

//? Deep comparison - more mush, let's dig in again after a break
//! did not solve on my own, study up
//* Solution
const deepEqual = (val1, val2) => {
  if (val1 === val2) return true;

  if (val1 == null || typeof val1 != "object" || (val2 == null) | (typeof val2 != "object"))
    return false;

  let keysOf1 = Object.keys(val1),
    keysOf2 = Object.keys(val2);

  if (keysOf1.length != keysOf2.length) return false;

  for (let key of keysOf1) {
    if (!keysOf2.includes(key) || !deepEqual(val1[key], val2[key])) return false;
  }
  return true;
};

const val1 = { name: "Geo", age: 34 };
const val2 = { name: "Kallyn", age: 34 };
const val3 = { age: 34 };
const val4 = { age: 34 };
const val5 = 23;
const val6 = "hwat";
console.log(deepEqual(val1, val2));
console.log(deepEqual(val3, val4));
console.log(deepEqual(val5, val6));
