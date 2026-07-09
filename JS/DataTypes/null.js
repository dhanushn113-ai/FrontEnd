// understand null datatype in javascript
// Null is a data type that represents the absence of any value or object. It is often used to indicate that a variable has no value or that an object property is intentionally empty.


let a = null;
console.log(typeof a,a);

let b = null;
let c = 5;
let d = b+c;
console.log(d,typeof d);  // it will return number because null is treated as 0 in javascript


console.log(null === undefined);
console.log(null == undefined);
console.log(null > 0);
console.log(null >=0);

console.log(null <0);
console.log(null <=0);

console.log(null==0);
console.log(null === 0);
