const repeatString = function(string, number) {
    let repeat = '';
    if (number < 0) {
        return 'ERROR';   
    } else {
        for (i = 1; i <= number; i++) {
        repeat += string;
        }
        return repeat;
    }
};

// Do not edit below this line
module.exports = repeatString;
