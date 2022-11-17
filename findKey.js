const assertEqual = function(actual, expected) {
  if (actual === expected){ 
		//console.log("✔️ Assertion Passed: ${actual} === ${expected}!");
		console.log(`✔️ Assertion Passed: ${actual} === ${expected}`)
	}
	else {
		//console.log('❌ Assertion Failed: ${actual} !== ${expected}!'); 
		console.log(`❌ Assertion Failed: ${actual} !== ${expected}`)
	}
};

const findKey = function(object, callback) {
  const results = Object.keys(object);
 
  for (x = 0; x < Object.keys(object).length; x++){
    if (callback(object[results[x]])){
      console.log(object[results[x]]);
      console.log(results[x]);
      return results[x];
    }
  }
  return "No match.";
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"