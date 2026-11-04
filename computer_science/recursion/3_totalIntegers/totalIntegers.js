// The extra null check is required since typeof null === "object" evaluates to true
// const isObject = (value) => typeof value === "object" && value !== null;

// const totalIntegers = function (obj) {
//   let count = 0;

//   if (!isObject(obj)) {
//     return;
//   }

//   const elements = Object.values(obj);

//   for (const el of elements) {
//     if (Number.isInteger(el)) {
//       count++;
//     } else if (isObject(el)) {
//       count += totalIntegers(el);
//     }
//   }
//   return count;
// };

const totalIntegers = (obj) => {
  if (typeof obj !== "object") return;

  let count = 0;

  if (Array.isArray(obj)) {
    for (const item of obj) {
      if (Number.isInteger(item)) {
        count++;
      } else if (Array.isArray(item)) {
        count += totalIntegers(item);
      } else if (typeof item === "object") {
        for (const key in item) {
          if (Number.isInteger(item[key])) {
            count++;
          } else {
            count += totalIntegers(item[key]);
          }
        }
      }
    }
  } else if (typeof obj === "object") {
    for (const key in obj) {
      if (Number.isInteger(obj[key])) {
        count++;
      }
    }
  } else {
    count += totalIntegers(obj);
  }

  return count;
};

// Do not edit below this line
module.exports = totalIntegers;

const res = totalIntegers([4, 6, { a: 1, b: { a: [5, 10], b: 11 } }, 9]);
console.log(res);
