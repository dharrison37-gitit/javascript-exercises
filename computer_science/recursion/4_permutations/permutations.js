const permutations = function (array) {
  if (array.length === 0) return [[]];

  const results = [];

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const remaining = array.filter((_, idx) => idx !== i);
    const smallerPermutaions = permutations(remaining);
    const combined = smallerPermutaions.map((perm) => [current, ...perm]);

    results.push(...combined);
  }
  return results;
};

// Do not edit below this line
module.exports = permutations;
