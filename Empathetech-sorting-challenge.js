const { exampleDataOne } = require("./data");

/** 
  Sorts an array of objects according to one or more keys in the object,
  in sequential, dependent order. For example, if we have a dataset with
  "color" (red, blue, green) and "number" (1-10), we sort by color first
  into groups of red, blue, and green, and only sort by number within
  each of the red group, blue group, and green group.

  Unsorted:

  [
    { color: "red", number: 6 },
    { color: "blue", number: 4},
    { color: "red", number: 1 },
    { color: "green", number: 9 },
    { color: "blue", number: 10 },
  ]

  Sorted by [["color", true], ["number", true]]:
  
  [
    { color: "blue", number: 4},
    { color: "blue", number: 10 },
    { color: "green", number: 9 },
    { color: "red", number: 1 },
    { color: "red", number: 6 },
  ]
  
  Arguments
  =========
  data (Array):
    An array of objects that share the same keys.

  keyArray (Array<[string, boolean]>):
    An array of subarrays that represent keys to sort by, in order,
    and whether to sort ascending or not, e.g. [key: string, asc: boolean]

  inPlace (boolean):
    *Optional* Functionality to either make the sort in place or to
    return a new, sorted deep copy of the array of objects.


  Returns
  =======
  (Array):
    An array of objects sorted by the keys and orders in the input arguments.
*/
function sortByKeys(data, keyArray, inPlace = true) {
  console.log(data);
}

sortByKeys(exampleDataOne, [
  ["lastName", true],
  ["firstName", false],
]);
sortByKeys(exampleDataOne, [
  ["firstName", false],
  ["age", true],
]);
sortByKeys(exampleDataOne, [
  ["favoriteFood", true],
  ["ownsCar", false],
]);
sortByKeys(exampleDataOne, [
  ["shoeSize", true],
  ["age", false],
]);
