const contains = function (obj, searhVal) {
  const values = Object.values(obj);

  if (values.includes(searhVal)) return true;

  const nestedObjects = values.filter((value) => typeof value === "object" && value !== null);

  return nestedObjects.some((nestedObject) => contains(nestedObject, searhVal));
};

// Do not edit below this line
module.exports = contains;
