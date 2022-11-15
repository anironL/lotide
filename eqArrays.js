// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected){ 
		console.log(`✔️ Assertion Passed: ${actual} === ${expected}`)
	}
	else {
		console.log(`❌ Assertion Failed: ${actual} !== ${expected}`)
	}
};

const eqArrays = function(actualArray, expectedArray) {
  if (actualArray.length !== expectedArray.length){
    return false;
  }
  else for (x = 0; x < actualArray.length; x++){
    if (actualArray[x] === expectedArray[x]){
//      console.log(`${actualArray[x]} === ${expectedArray[x]}`);
    }
    else{
      console.log("false");
      return false;
    }
  }
  console.log("true");
  return true; 
};


// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
