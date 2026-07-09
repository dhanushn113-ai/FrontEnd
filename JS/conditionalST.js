let person;
let age = 10;

if(age > 18){
    person ='adult';
}
else if(age > 12 && age <= 18){
    person = 'teenager';
}
else{
    person = 'child';
}

console.log(person);