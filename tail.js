// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
//    for 


    if (actual === expected){ 
          console.log(`✔️ Assertion Passed: ${actual} === ${expected}`)
    }
    else {
          console.log(`❌ Assertion Failed: ${actual} !== ${expected}`)
    }
};

const head = function(arrayToCheck){
    return arrayToCheck[0];
};

const tail = function(arrayToCheck){
    let tailArray = arrayToCheck.slice(1);
    return tailArray;
};

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);
