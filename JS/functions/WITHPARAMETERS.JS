// UNDERSTAND FUNCTIONS WITH PARAMETERS

function add(a,b){
    console.log(a+b);
}
add(10,19);

// function without parameters
let c = 10,d=5;
function diff(){
    console.log(c-d);
}
diff();

//default parameters

function multiply(e,f=3){
    console.log(e * f);
}
multiply(2);

// parameter with return

function divide(x,y){
    return x/y;
}
console.log(divide(10,2));


//even number numbers

function even(n){
    if(n % 2 == 0){
        console.log('Even');
    }else{
        console.log("Odd");
    }
}
even(20);