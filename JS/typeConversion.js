// Understand type conversion in JavaScript

let a = 23;
console.log(typeof a);
a=String(a);                       // converting number into String
console.log(a);
console.log(typeof a);


let b = "Anbu"; 
console.log(b);
b = Number(b);                    // converting String into number
console.log(b);                   // it will print NaN because Anbu is not a number
console.log(typeof b); 



let c = '23';
console.log(typeof c);  
c= Number(c);
console.log(c + 2);          // it will print 25 because c is converted into number
console.log(typeof c);


let d = true;
console.log(typeof d);
d = String(d);                   // converting boolean into String
console.log(d);
console.log(typeof d);

let e = undefined;
console.log(typeof e);
e = Number(e);                   // converting undefined into number
console.log(e);                  // it will print NaN because undefined is not a number
console.log(typeof e);



let f = null;
console.log(typeof f);
f = Number(f);                   // converting null into number
console.log(f);



let g = 1;
console.log(typeof g);
g = Boolean(g);                 // converting number into boolean
console.log(g);                // it will print true because 1 is treated as true in javascript

let h = 0;
console.log(typeof h);
h = Boolean(h);
console.log(h);               // it will print false because 0 is treated as false in javascript


let i = "Anbu";
console.log(typeof i);
i = Boolean(i);
console.log(i);               // it will print true because a non-empty string is treated as true in javascript


let j = "";
console.log(typeof j);
j = Boolean(j);
console.log(j);               // it will print false because an empty string is treated as false in javascript