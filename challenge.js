// given this array of to-do items:

// [ 'take out trash true', 'clean room false', 'do dishes true', 'water plants true', 'make bed false']

// write a function that organizes them in an array of objects with the following shape:
// {
//   item: // item name,
//   done: // boolean,
// }

const chores = [
  "take out trash true",
  "clean room false",
  "do dishes true",
  "water plants true",
  "make bed false",
];

//split each string into an array of individual words
//isolate the boolean
//combine the other words back into one string
//create an item key and assign the combined string as its value
//create a done key and assign the boolean as its value
//push each chore object into an array

//first split the string into individual words
//this doesn't really do enough to be a separate helper function
// const isolateWords = (string) => {
//   const splitString = string.split(" ");
//   return splitString;
// };

//first write a helper function that executes what I'd like to happen to each string in the array
const createChore = (string) => {
  const wordArray = string.split(" ");
  // console.log({ wordArray });
  //instantiate empty object to hold the new chore
  const chore = {};
  //assuming the boolean is always the last item
  const done = wordArray[wordArray.length - 1];
  //combine the rest of the items into a chore description
  const itemArray = wordArray.slice(0, -1);
  const item = itemArray.join(" ");
  // console.log({ done });
  // console.log({ item });
  // console.log({ itemArray });
  //create the needed keys in the chore object and assign appropriate values
  //dot or bracket notation should be fine here
  chore.item = item;
  chore.done = done;

  return chore;
};

//all together now!
const createChoreList = (chores) => {
  //don't use let for non-primitives? Might be a case-by-case
  //instantiate an empty array to hold our created objects
  const choreList = [];

  for (const item of chores) {
    const chore = createChore(item);
    choreList.push(chore);
  }
  // console.log(choreList);
  return choreList;
};

const createChoreListWithoutHelper = (chores) => {
  const choreList = [];

  for (const item of chores) {
    const chore = {};
    const wordArray = item.split(" ");
    const choreItem = wordArray.slice(0, -1).join(" ");
    chore["item"] = choreItem;
    // const isDone = String(wordArray[wordArray.length - 1]).toLowerCase() === "true";
    const isDone = wordArray[wordArray.length - 1] === "true";
    console.log({ isDone });
    chore["done"] = isDone;
    choreList.push(chore);
  }
  console.log(choreList);
  return choreList;
};

createChoreList(chores);
createChoreListWithoutHelper(chores);
// console.log(createChore("take out trash true"));
// console.log(createChore(["take", "out", "trash", "true"]));

//* NOW PUT IT BACK!!
const choreObjArray = [
  { item: "take out trash", done: true },
  { item: "clean room", done: false },
  { item: "do dishes", done: true },
  { item: "water plants", done: true },
  { item: "make bed", done: false },
];

// const convertObjToString = (choreObj) => {
//   const choreString = choreObj.item.concat(" ", choreObj.done);
//   // const item = choreObj.item;
//   // const done = choreObj.done;
//   // const choreString = item.concat(" ", done);
//   return choreString;
// };

// const createChoreStringArray = (choreObjArray) => {
//   const choreStringArray = [];
//   for (const item of choreObjArray) {
//     const choreString = convertObjToString(item);
//     choreStringArray.push(choreString);
//   }
//   return choreStringArray;
// };

const createChoreStringArray = (choreObjArray) => {
  const choreStringArray = [];
  for (const chore of choreObjArray) {
    choreStringArray.push(chore.item.concat(" ", chore.done));
  }
  return choreStringArray;
};

// console.log(convertObjToString({ item: "take out trash", done: "true" }));

// console.log(createChoreStringArray(choreObjArray));

const createChoreStringArray2 = (choreObjArray) => {
  const choreStringArray = [];
  for (const { item, done } of choreObjArray) {
    choreStringArray.push(`${item} ${done}`);
  }
  return choreStringArray;
};

// console.log(createChoreStringArray2(choreObjArray));
