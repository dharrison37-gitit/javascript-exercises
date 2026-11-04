const pascal = function (n) {
  const triangle = [1];

  if (n === 1) {
    return triangle;
  }

  const previousTriangle = pascal(n - 1);
  previousTriangle.forEach((number, idx) => {
    const right = previousTriangle[idx + 1] ?? 0;
    triangle.push(number + right);
  });

  return triangle;
};

// Do not edit below this line
module.exports = pascal;
