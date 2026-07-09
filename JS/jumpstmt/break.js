// uderstand break statement in javaScript


let num = 4;
let sum = 0;

for(let i = 1; i < num; i++){ 
    if(num % 2 == 0){
        break;
    }
    sum = sum + i;
}
console.log(sum);

