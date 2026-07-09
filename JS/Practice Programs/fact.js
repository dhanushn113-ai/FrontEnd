// factorial number


let factt = 1;
function fact(num){
    for(let i = 1; i <= num;i++){
        factt = factt * i;
    }
    return factt;
}
console.log(fact(5));

