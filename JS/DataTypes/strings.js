// Understand strings in javascript

// string is a data type in javascript which is used to store text value
// string can be declared using single quotes, double quotes or backticks


// double quotes
let name = "hii, iam anbu"; // here name is variable name and "hii, iam anbu" is value assigned to the variable name
console.log(name);



// here single quotes are used to declare a string value
let class1 = 'Iam 5 th standard student'; 
console.log(class1);



//embedding quotes in string
let city = `iam from "chennai" city`; 
console.log(city);

let num = `1 + 2 = ${1+2}`; // here we are using template literal to embed the expression 1+2 in the string value.It will evaluate the expression and print the result in the string value
console.log(num);

let name1 = "Dhanush";
let sol = `name is ${name1}`;
console.log(sol);