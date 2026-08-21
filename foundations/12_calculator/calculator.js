const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce((accum, current) => accum + current, 0);

const multiply = (arr) => arr.reduce((accum, current) => accum * current, 1);

const power = (base, exponent) => base ** exponent;

const factorial = function (n) {
    if (n === 0) {
        return 1;
    } else {
        let fact = 1;
        for (let i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
