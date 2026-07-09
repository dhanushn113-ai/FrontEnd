// understand arrow functions in java


let evenOdd = (a) => a % 2 == 0 ? "Even" : 'Odd';
console.log(evenOdd(6));



//function with in the variable

function operation(op,a,b){
    return op(a,b);
}

let add = (a,b) => a+b;
console.log(operation(add,4,5));