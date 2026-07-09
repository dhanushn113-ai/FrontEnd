// understanding comparison operators in javascript
// Comparison operators are used to compare two values and return a boolean value (true or false) based on the comparison. 
// The most common comparison operators are ==, ===, !=, !==, >, <, >=, and <=.


let a = 10;
let b = 20;

console.log(a==b);  // it will return false because a is not equal to b 
console.log(a!=b);  // it will return true because a is not equal to b
console.log(a>b);   // it will return false because a is not greater than b
console.log(a<b);   // it will return true because a is less than b
console.log(a>=b);  // it will return false because a is not greater than or equal to b
console.log(a<=b);  // it will return true because a is less than or equal to b
console.log(a===b); // it will return false because a is not equal to b and also the data type is different


let c = '0';
let d = 0;

c = Boolean(c);
d = Boolean(d);
console.log(c==d);  

console.log('0' == 0);  // it will return true because the value is same but the data type is different
console.log('0' === 0); // it will return false because the value is same but the data type is different

console.log('5' === 5); // it will return false because the value is same but the data type is different