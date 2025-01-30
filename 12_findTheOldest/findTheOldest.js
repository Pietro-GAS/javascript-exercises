const findTheOldest = function(people) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    for (person of people) {
        if (Object.hasOwn(person, "yearOfDeath")) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else {
            person.age = currentYear - person.yearOfBirth;
        };     
    };

    people.sort((a, b) => b.age - a.age);

    return people[0]

};

// Do not edit below this line
module.exports = findTheOldest;
