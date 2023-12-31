//Basic Operations. Added rounding to 1 decimal place
function add(a, b){
    return Math.round((a+b) * 10) / 10;
}
function subtract(a,b){
    return Math.round((a-b) * 10) / 10;
}
function multiply(a,b){
    return Math.round((a*b) * 10) / 10;
}
function divide(a, b){
    return Math.round((a/b) * 10) / 10;
}
function mod(a,b){
    return Math.round((a%b) * 10) / 10;
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
    document.querySelector("#current-input").textContent=input;
}

function updateHistory(){
    document.querySelector("#history").textContent=history;
}

let input =""; //Make input be equal to the firstNum they enter and the ensuing results
//Its a string cause when we click a button, it would return string. We also want "1" + "1" = "11"
let operator=""; //stores current operator
let currResult="";
let history ="";


const numBtns = document.querySelectorAll(".number");
numBtns.forEach(btn =>{
    btn.addEventListener("click", () => {
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
            currResult = parseFloat(input);
            operator = btn.textContent;
            input=""; //resets input
            history = `${currResult}  ${btn.textContent}`;
            updateHistory();
            updateDisplay();
        }
        else if(operator==""){
            operator=btn.textContent;
            history = `${currResult}  ${btn.textContent}`;
            updateHistory();
            input=""; //resets input
            updateDisplay();
        }
        else if(input==""&& btn.textContent=="-"){
            input="-";
            updateDisplay();
        }
        else if(input=="" || input=="-"){
            return; //do nothing if input is empty b/c that we are adding an operation
            //and we would get ++ or -- or smthing like that
        }
        else{
            currResult = operate(currResult, operator, parseFloat(input));
            operator = btn.textContent; //updates operator after using operate() with previous operator
            input=""; //resets input
            history = `${currResult}  ${btn.textContent}`;
            updateHistory();
            updateDisplay();
        }
    })

})

const equalBtn = document.querySelector("#equals");
equalBtn.addEventListener("click", ()=> {
    history=""; //empties history
    currResult = input = operate(currResult, operator, parseFloat(input)); //has final answer on main display
    operator = "";
    updateHistory();
    updateDisplay();
})

document.querySelector("#ac").addEventListener("click", ()=> { //clears everything
    history="";
    currResult=""
    input="";
    operater="";
    updateHistory();
    updateDisplay();
});

document.querySelector("#del").addEventListener("click", ()=> {
    if (input !=""){
        input=input.slice(0, -1); //removes last character
        updateDisplay();
    }
})