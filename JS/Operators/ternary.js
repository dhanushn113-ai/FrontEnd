let person;
let age = 13;
person = (age > 18) ? 'Adult' : 'Child';
console.log(person);

person = (age > 12 && age <= 18) ? 'Teenager' : (age > 18) ? 'Adult' : 'Child';
console.log(person);