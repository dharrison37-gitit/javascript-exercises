const fibonacci = function (n) {
    n = parseInt(n);

    if (n < 0) return "OOPS";

    let fibs = [0, 1];

    for (let i = 2; i <= n; i++) {
        fibs[i] = fibs[i - 1] + fibs[i - 2];
    }

    return fibs[n];
};

// Do not edit below this line
module.exports = fibonacci;
