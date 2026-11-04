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
      } else if (Array.isArray(obj[key] || (typeof obj[key] === "object" && obj[key] !== null))) {
        count += totalIntegers(obj[key]);
      }
    }
  } else {
    count += totalIntegers(obj);
  }

  return count;
};

// Do not edit below this line
module.exports = totalIntegers;
