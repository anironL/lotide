// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected){ 
		console.log(`✔️ Assertion Passed: ${actual} === ${expected}`)
	}
	else {
		console.log(`❌ Assertion Failed: ${actual} !== ${expected}`)
	}
};

const assertArraysEqual = function(actualArray, expectedArray) {
  if (actualArray.length !== expectedArray.length){
    console.log("false: differing array lengths");
    return false;
  }
  else for (x = 0; x < actualArray.length; x++){
    if (actualArray[x] === expectedArray[x]){
//      console.log(`${actualArray[x]} === ${expectedArray[x]}`);
    }
    else{
      console.log(`false: element ${x} of array 1 (${actualArray[x]}) !== array 2 (${expectedArray[x]})`);
      return false;
    }
  }
  console.log("true");
  return true; 
};

const without = function (arrayModify, elementWithout){
  let arrayWithout = [];
  let compareArray = arrayModify;
  let compareElement = elementWithout[0];

  for (x = 0; x < arrayModify.length; x++){
    if (compareArray[x] !== compareElement){
      arrayWithout.push(compareArray[x]);
      console.log(arrayWithout);
    }
  }
  console.log(arrayWithout);
}


// TEST CODE
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);