//Basic Operations
function add(a, b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a, b){
    return a/b;
}

function operate(a, operation, b){
    return operation(a, b);
}

console.log(operate(5, add, 3));