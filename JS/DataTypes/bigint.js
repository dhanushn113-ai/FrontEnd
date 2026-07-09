// Understand BigInt DataType
// BigInt is a new data type in javascript which is used to store large integer values that are beyond the range of the Number data type.

let a = 9007199254740991+1;
console.log(a);

let b = 9007199254740991 + 2; // it prints before number only print even number
console.log(b);

let c = 9007199254740991 + 4;
console.log(c);

//it will store 9007199254740991 this much only                ----->that is 2^53-1=9007199254740991;  
// incase we want to print more than 9007199254740991 this number we use BigInt datatype that is represented by n


let d = 900719925474099n;
console.log(typeof d)
console.log(d+2n);     // because n represent bigInt


let periyaNumber = 12345678910n;
console.log(periyaNumber+2025n);

