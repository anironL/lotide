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
  for (letter of trimString){
    if (!countLetters[letter]){
      countLetters[letter] = 1;
    }
    else{
      countLetters[letter]++;
    }
  }
  return countLetters;
}

console.log(countLetters("LHL labs"));
