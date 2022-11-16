const assertEqual = function(actual, expected) {
  if (actual !== expected){ 
//    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
//  console.log(`✔️ Assertion Passed: ${actual} === ${expected}`);
  return true;
};

const countLetters = function(countedString){
  let countLetters = {};
  //format input string
  let trimString = countedString.split(" ").join("").toUpperCase();

  //assign keys
  for (x = 0; x < trimString.length; x++){ 
    countLetters[trimString.charAt(x)] = 0
  }
  //increment keys
  for (x = 0; x < trimString.length; x++){
    countLetters[trimString.charAt(x)]++
  }
  return countLetters;
}

console.log(countLetters("LHL labs"));