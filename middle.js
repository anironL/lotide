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

const assertArraysEqual = function(actualArray, expectedArray) {
  if (actualArray.length !== expectedArray.length){
    console.log("false: differing array lengths");
//    return false;
  }
  else for (x = 0; x < actualArray.length; x++){
    if (actualArray[x] === expectedArray[x]){
//      console.log(`${actualArray[x]} === ${expectedArray[x]}`);
    }
    else{
      console.log(`false: element ${x} of array 1 (${actualArray[x]}) !== array 2 (${expectedArray[x]})`);
//      return false;
    }
  }
  console.log("true");
//  return true; 
};

const middle = function(middleArray){
  console.log("length of array to check:", middleArray.length);
  let returnArray = [];

  if(middleArray.length <= 2){
    console.log("returned array:", returnArray);
    return returnArray;
  }
  else if (middleArray.length % 2 === 1){
    let x = (middleArray.length - 1) / 2;
//    console.log(middleArray[x]);
//    console.log(typeof(middleArray[x]))
    returnArray.push(middleArray[x]);
    console.log("returned array:", returnArray);
    return returnArray;
  }
  else if (middleArray.length % 2 === 0){
    let x = middleArray.length / 2 - 1 
    let y = middleArray.length / 2 
//    console.log("XY pos:", x, y);
//    console.log("X val:", middleArray[x]);
//    console.log("Y val:", middleArray[y]);
    returnArray.push(middleArray[x], middleArray[y]);
    console.log("returned array:", returnArray);
    return returnArray;
  }
};

// TEST CODE
middle([1, 2, 3, 4]);
middle([1]);
middle([1, 2, 3]);
middle([1,7,13,1,5,18,2,6,3]);
middle([1,7,13,1,5,18,2,6,3,16]);