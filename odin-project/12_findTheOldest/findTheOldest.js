const findTheOldest = function(people) {
  let age = 0;
  let index = 0;
  for (let i = 0; i < people.length; i++) {
    if (!("yearOfDeath" in people[i])) {
      const currentYear = new Date().getFullYear();
      if ((currentYear - people[i].yearOfBirth) > age) {
        age = currentYear - people[i].yearOfBirth;
        index = i;
      }
    }
    else if ((people[i].yearOfDeath - people[i].yearOfBirth) > age) {
      age = people[i].yearOfDeath - people[i].yearOfBirth;
      index = i;
    }
  }
  return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
