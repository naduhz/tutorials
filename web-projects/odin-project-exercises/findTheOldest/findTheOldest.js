const findTheOldest = function (array) {
  const sorted = array.sort((personA, personB) => {
    let aAge;
    let bAge;
    let currentYear = new Date().getFullYear();

    "yearOfDeath" in personA
      ? (aAge = personA.yearOfDeath - personA.yearOfBirth)
      : (aAge = currentYear - personA.yearOfBirth);

    "yearOfDeath" in personB
      ? (bAge = personB.yearOfDeath - personB.yearOfBirth)
      : (bAge = currentYear - personB.yearOfBirth);

    return aAge > bAge ? -1 : 1;
  });

  const oldest = sorted[0];
  return oldest;
};

module.exports = findTheOldest;
