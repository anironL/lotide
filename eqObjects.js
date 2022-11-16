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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length){
    console.log("false: length difference");
    return false;
  }

  //use .sort to make the objects equal order for comparative
  //can also use stringify
  let keysObject1 = Object.keys(object1).sort;
  let keysObject2 = Object.keys(object2).sort;

  for(x = 0; x < Object.keys(object1).length; x++){
    if (keysObject1[x] !== keysObject2[x]){
      console.log("false: key",x,"does not match, exiting loop.")
      return false
    }
  }
  console.log("true: both objects match")
  return true;
};


//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false