const assertArraysEqual = function(actualArray, expectedArray) {
  if (actualArray.length !== expectedArray.length){
    console.log("false: differing array lengths");
    return false;
  }
  
  for (x = 0; x < actualArray.length; x++){
    if (actualArray[x] === expectedArray[x]){
//    console.log(`${actualArray[x]} === ${expectedArray[x]}`);
    }
    else{
      console.log(`false: element ${x} of array 1 (${actualArray[x]}) !== array 2 (${expectedArray[x]})`);
      return false;
    }
  }
  console.log("true");
  return true; 
};

module.exports = assertArraysEqual;
