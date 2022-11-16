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

const eqObjects = function(object1, object2) {
  //Exit if objects do not have the same number of keys
  if(Object.keys(object1).length !== Object.keys(object2).length){
    console.log("false: length difference");
    return false;
  }
  //Use .sort to make the objects equal order for comparative
  //Can also use JSON.stringify if we don't care about eqArray compat.
  let keysObject1 = Object.keys(object1).sort();
  let keysObject2 = Object.keys(object2).sort();

  for(x = 0; x < Object.keys(object1).length; x++){
     //Exit if object keys do not match eg. a, b vs b, c
     if (keysObject1[x] !== keysObject2[x]){
      console.log("false: key",x,"does not match, exiting loop.")
      return false;
    }
    //Loop through key elements
    for (y = 0; y < keysObject1.length; y++){
//      console.log("ArrayCheck1", y, ":", object1[keysObject1[y]]);
//      console.log("ArrayCheck2", y, ":", object2[keysObject2[y]]);
      //Using stringify to easily compare already sorted arrays
      if (JSON.stringify(object1[keysObject1[y]]) !== JSON.stringify(object2[keysObject1[y]])){
        console.log("false: element",y,"does not match, exiting loop.")
        return false;
      }
    }
  }
  console.log("true: both objects match")
  return true;
};

//TEST CODE
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
