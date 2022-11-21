const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;
