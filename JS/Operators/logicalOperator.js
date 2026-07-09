// understanding logical operators in JavaScript
// Logical operators are used to combine multiple boolean expressions and return a boolean value (true or false) based on the evaluation of those expressions. 
// The most common logical operators are && (AND), || (OR), and ! (NOT).


let age =25;

console.log(age>18 && age<30);  // it will return true because both conditions are true
console.log(age>18 || age<30);  // it will return true because at least one condition is true
console.log(!(age>18));         // it will return false because the condition is true and we are negating it

//nullish coalescing operator
let name = null;
let defaultName = "Guest";
let displayName = name ?? defaultName;
console.log(displayName);  // it will return "Guest" because name is null and we are using the nullish coalescing operator

console.log(0 || 10);   // 10              //The ?? operator returns the right-hand value only if the left-hand value is null or undefined.
console.log(0 ?? 10);   // 0

console.log("" || "Hi"); // Hi
console.log("" ?? "Hi"); // ""

console.log(null || "Hi"); // Hi
console.log(null ?? "Hi"); // Hi    