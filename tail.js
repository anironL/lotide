const tail = function(arrayToCheck){
    let tailArray = arrayToCheck.slice(1);
    return tailArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);

module.exports = tail;
