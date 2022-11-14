// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    for (x = 0; x < actual.length; x++){
        if (actual[x] === expected[x]){ 
            console.log(`✔️ Assertion Passed: ${actual[x]} === ${expected[x]}`)
        }
        else {
            return (`❌ Assertion Failed: ${actual[x]} !== ${expected[x]}`)
        }
    }
    return ("✔️ Assertion Passed: "+actual+" === "+expected);
};

const head = function(arrayToCheck){
    return arrayToCheck[0];
};

const tail = function(arrayToCheck){
    let tailArray = arrayToCheck.slice(1);
    return tailArray;
};

/* TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);*/

console.log(assertEqual([1, 2, 3], [1, 2, 3]));
console.log(assertEqual([1, 2, 3], [1, 5, 3]));

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"])
