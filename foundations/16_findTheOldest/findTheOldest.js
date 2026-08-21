const findTheOldest = function (people) {
    for (person of people) {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
    }
    const sorted = people.sort(
        (a, b) =>
            a.yearOfDeath - a.yearOfBirth - (b.yearOfDeath - b.yearOfBirth),
    );
    return sorted.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
