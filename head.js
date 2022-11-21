const assertEqual = require('./assertEqual');

const head = function(arrayToCheck){
    return arrayToCheck[0];
}

/*TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), "undefined");
*/
