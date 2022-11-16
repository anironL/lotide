const assertEqual = function(actual, expected) {
  if (actual !== expected){ 
//    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
//  console.log(`✔️ Assertion Passed: ${actual} === ${expected}`);
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

const letterPositions = function(sentence) {
  const results = {};
  //format input string
  let trimString = sentence.split(" ").join("").toUpperCase(); 
  let sentenceString = sentence.toUpperCase();

  //assign keys
  for (x = 0; x < trimString.length; x++){ 
    results[trimString.charAt(x)] = [];
  }
  //increment keys
  for (x = 0; x < sentenceString.length; x++){
    if (sentenceString.charAt(x) !== " "){
      results[sentenceString.charAt(x)].push(x);
    }
  }
  console.log("Returned Keys:", Object.keys(results));
  console.log("Sample:", results.L);
  return results;
};

console.log(letterPositions("LHL labs"));
assertArraysEqual(letterPositions("hello").E, [1]);