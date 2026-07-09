// understand Number DataType in javascript

// Number is a data type that represents numeric values in JavaScript. It can be used to perform mathematical operations and store both integer and floating-point numbers.
let a = 10;
let b = 20;

console.log(a,typeof a);
console.log(b,typeof b);

let c = -2;
let d = 0;

console.log(c,typeof c);
console.log(d,typeof d);

//special numeric value is also a number data type

let infi = Infinity;
let infi1 = -Infinity;

console.log(infi, typeof infi);
console.log(infi1, typeof infi1);


//NOT A NUMBER  ---->NaN
// NaN is a special numeric value that represents an undefined or unrepresentable value, such as the result of dividing zero by zero or taking the square root of a negative number.


let nan = NaN;
console.log(NaN, typeof NaN);

let temp = NaN * 2;     // anything which is multiple bt NaN is NaN
console.log(temp);

let temp1 = NaN ** 0;
console.log(temp1);     //but while perforn power Anything power zero is 1 thats it print 1 and NaN power Anything remais NAN

let temp2 = NaN ** 1;
console.log(temp2);


console.log(1/0);   // it not throw any exception error

let task = 543+234;
console.log(task,typeof task);