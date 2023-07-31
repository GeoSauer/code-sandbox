// given the following array of grocery items:
// [{item: 'avocados', aisle: 4}, {item: 'tomatoes', aisle: 4}, {item: 'coconut milk', aisle: 2}, {item: 'soyrizo', aisle: 2}, {item: 'bred', aisle: 1}, {item: 'bamble gam', aisle: null}]

// write a function that organizes items into their respective aisles, returning an object with the following shape:
// {
//   1: [// array of item(s)],
//   2: [// array of item(s)],
// ...
// }

//separate our keys to organize our values
//create a key for bad entries, null/undefined/NaN

const groceryItems = [
  { item: "avocados", aisle: 4 },
  { item: "tomatoes", aisle: 4 },
  { item: "coconut milk", aisle: 2 },
  { item: "soyrizo", aisle: 2 },
  { item: "bred", aisle: 1 },
  { item: "bamble gam", aisle: null },
];

//want a new object with the value of aisle as the key and value of item as value
const sortGroceries = (groceryItems) => {
  const organizedGroceries = {};
  for (const grocItem of groceryItems) {
    //create variables to store item and aisle
    const item = grocItem.item;
    let aisle = grocItem.aisle;
    //if aisle is a falsy push it into the naughty array
    if (!grocItem.aisle) {
      aisle = "Aisle number undefined";
    }
    //if aisle exists, push the item into it's value array
    if (organizedGroceries[aisle]) {
      organizedGroceries[aisle].push(item);
      //if aisle doesn't exist, set it as the key and create a new array containing the item as the value
    } else {
      organizedGroceries[aisle] = Array(item); // or = [item]
    }
  }
  console.log(organizedGroceries);
  return organizedGroceries;
};

sortGroceries(groceryItems);
