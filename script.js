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
function mod(a,b){
    return a%b;
}


function operate(a, operation, b){
    if (operation == "%"){
        return mod(a,b);
    }
    else if (operation =="÷"){
        return divide(a,b);
    }
    else if (operation == "×"){
        return multiply(a, b);
    }
    else if (operation == "-"){
        return subtract(a, b);
    }
    else if (operation == "+"){
        return add(a, b);
    }
}

function updateDisplay(){
    document.querySelector("#current-input").textContent=displayInput;
}

function updateHistory(){
    document.querySelector("#history").textContent=history;
}

let input =""; //Make input be equal to the firstNum they enter and the ensuing results
//Its a string cause when we click a button, it would return string. We also want "1" + "1" = "11"
let operator=""; //stores current operator
let currResult="";
let displayInput = "";
let history ="";


const numBtns = document.querySelectorAll(".number");
numBtns.forEach(btn =>{
    btn.addEventListener("click", () => {
        displayInput = displayInput + btn.textContent;
        input = input + btn.textContent;
        updateDisplay();
        })
})
//Note that btn.textContent is a string which is ok because we want "1" + "1" = "11"
//Each click, we update our firstNum 

const opBtns = document.querySelectorAll(".operations");
opBtns.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        if (currResult =="" && operator ==""){ //Initial case - first inputs
            currResult = parseInt(input);
            operator = btn.textContent;
        }
        else{
            currResult = operate(currResult, operator, parseInt(input));
            operator = btn.textContent; //updates operator
        }
        input=""; //resets input
        history = `${currResult}  ${btn.textContent}`;
        updateHistory();
        displayInput=""; //resets display
        updateDisplay();
    })
})
