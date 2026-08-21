const palindromes = function (str) {
    const alpha = "abcdefghijklmonpqrstuvwxyz0123456789";

    let workingString = str
        .toLowerCase()
        .split("")
        .filter((c) => alpha.includes(c))
        .join("");

    let revStr = workingString.split("").reverse().join("");

    return workingString === revStr;
};

palindromes("A car, a man, a maraca");

// Do not edit below this line
module.exports = palindromes;
