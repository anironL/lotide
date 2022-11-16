const assertEqual = function(actual, expected) {
  if (actual !== expected){ 
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
  console.log(`✔️ Assertion Passed: ${actual} === ${expected}`);
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

const findKeyByValue = function (actualGenre, showName){
//  console.log(actualGenre);
//  console.log(Object.keys(actualGenre));
  let genresToCount = Object.keys(actualGenre);
  
  for (x = 0; x < genresToCount.length; x++){
  let comparedShow = actualGenre[genresToCount[x]];
    if (comparedShow === showName){
//      console.log(showName,"is", genresToCount[x]);
        return genresToCount[x];
    }
  }
};

//TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
