const assertEqual = function(actual, expected) {
  if (actual === expected){ 
//		console.log(`✔️ Assertion Passed: ${actual} === ${expected}`)
      return true;
	}
	else {
//		console.log(`❌ Assertion Failed: ${actual} !== ${expected}`)
    return false;
	}
};

const assertArraysEqual = function(actualArray, expectedArray) {
  if (actualArray.length !== expectedArray.length){
//    console.log("false: differing array lengths");
   return false;
  }
  else for (x = 0; x < actualArray.length; x++){
    if (actualArray[x] === expectedArray[x]){
//      console.log(`${actualArray[x]} === ${expectedArray[x]}`);
    }
    else{
//      console.log(`false: element ${x} of array 1 (${actualArray[x]}) !== array 2 (${expectedArray[x]})`);
     return false;
    }
  }
//  console.log("true");
  return true; 
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

//TEST CODE
console.log(results1);
console.log(assertArraysEqual(results1, ["g","c","t","m","t"]));
console.log(assertArraysEqual(results1, ["g","t","m","t"]));
console.log(assertArraysEqual(results1, []));