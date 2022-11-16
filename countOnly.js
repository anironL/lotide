const assertEqual = function(actual, expected) {
  if (actual !== expected){ 
//    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
//  console.log(`✔️ Assertion Passed: ${actual} === ${expected}`);
  return true;
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  let itemsToCountKeyArray = Object.keys(itemsToCount); 
//  console.log(itemsToCountKeyArray);

//repeat 4x for the 4 different boolean comparatives
  for (x = 0; x < itemsToCountKeyArray.length; x++){
    let trueTotal = 0;

//if the boolean === false I do not check
    if(itemsToCount[itemsToCountKeyArray[x]] === true){
      let trueName = itemsToCountKeyArray[x]
//iterating down firstNames array 
//iterating up the array to increment the key value of results
      for (y = 0; y < allItems.length; y++){
        if(assertEqual(allItems[y], itemsToCountKeyArray[x]) === true){
          trueTotal++
        }
      }         
      results[trueName] = trueTotal;
    }
  }
//  console.log(results);
  return results
}

// TEST CODE
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

