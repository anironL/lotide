const assertEqual = function(actual, expected) {
  if (actual !== expected){ 
//    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
//  console.log(`✔️ Assertion Passed: ${actual} === ${expected}`);
  return true;
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
//  console.log("Number of Keys:", Object.keys(allItems).length);
//  console.log(allItems);
//  console.log("Number of Keys:", Object.keys(itemsToCount).length);
//  console.log(Object.keys(itemsToCount));
  const results = {};

  let itemsToCountKeyArray = Object.keys(itemsToCount); 
//  console.log(itemsToCount[itemsToCountKeyArray[0]])

  for (x = 0; x < itemsToCountKeyArray.length; x++){
    let trueTotal = 0;

    if(itemsToCount[itemsToCountKeyArray[x]] === true){
      //      console.log(itemsToCountKeyArray[x]);
      let trueName = itemsToCountKeyArray[x]

      for (y = 0; y < allItems.length; y++){
        if(assertEqual(allItems[y], itemsToCountKeyArray[x]) === true){
          trueTotal++
        }
      }         
      results[trueName] = trueTotal;
//      console.log("Returned object:", results);
    }
//    console.log(itemsToCountKeyArray[x],"total:", trueTotal);
  }
  return results
}

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));
