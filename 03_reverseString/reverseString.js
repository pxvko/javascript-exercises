const reverseString = function(string) {
    let split = [];
    for (i=0; i < string.length; i++) {
        let letter = string.at(i);
        split.unshift(letter);
    }
    return split.join('');    
};

// Do not edit below this line
module.exports = reverseString;
