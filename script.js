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

let firstNum =""; //Make firstNum be equal to the firstNum they enter and the ensuing results
//Its a string cause when we click a button, it would return string. We also want "1" + "1" = "11"
let operator="";
let secondNum="";


const numBtns = document.querySelectorAll(".number");
numBtns.forEach(btn =>{
    btn.addEventListener("click", () => {
        firstNum = firstNum + btn.textContent;
        updateDisplay();
        })
})
//Note that btn.textContent is a string which is ok because we want "1" + "1" = "11"
//Each click, we update our firstNum 

function updateDisplay(){
    document.querySelector("#current-input").textContent=firstNum;
}

