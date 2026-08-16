const reverseString = function(str) {
    let splitString = str.split("");
    let reversed = [];

    for (let i = str.length - 1; i >= 0; i--) {
        reversed.push(str[i]);
    }

    return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
