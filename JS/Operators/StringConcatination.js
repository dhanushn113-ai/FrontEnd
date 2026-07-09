 // understand string concatenation in javascript
 // String concatenation is the process of combining two or more strings together to form a new string. In JavaScript, the + operator is used for string concatenation.

let a = "Hello";
let b = "World";

console.log(a+b);  // it will return HelloWorld because + operator is used for string concatenation

let c = '22';
let d = '33';
console.log(c+d);   // it will return 2233 because + operator is used for string concatenation

console.log(+c + +d);  // it will return 55 because + operator is used for string concatenation but we are using unary operator to convert string into number
  