function add(num1, num2){
    return (+num1) + (+num2);
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}

function operate(num1, num2, operator){
    switch(operator){
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return 0
    }
}

//const html = document.querySelector("html")

const container = document.querySelector(".container")
const displayValue = document.querySelector(".visual")
const historyDisplay = document.querySelector(".history")


let userInput="";
let visualResult="0";
displayValue.textContent=visualResult;
historyDisplay.textContent="";
let num1="";
let num2="";
let operator="";
let justOperated=false;

//This should be ok
container.addEventListener("click", (e)=>{
    const isButton = e.target.className == "number";
    if(!isButton){
        return;
    }
    inputtingNumbers(e.target.innerText);
})

function inputtingNumbers(input){
    if (userInput.length<13){
        userInput+=input;
    }
    displayValue.textContent=userInput;
}

addEventListener("keydown", (e)=>{
    console.log(e.key)
    if ("0123456789".includes(e.key)){
        inputtingNumbers(e.key);
    } else if(".".includes(e.key)&&!(userInput.includes("."))){
        inputtingNumbers(e.key);
    } else if ("/*+-".includes(e.key)){
        inputtingOperator(e.key)
    } else if ("=Enter".includes(e.key)){
        inputtingOperate()
    } else if ("Backspace".includes(e.key)){
        inputtingDelete()
    }
})


container.addEventListener("click", (e)=>{
    const isButton = e.target.className == "operator";
    if(!isButton){
        return;
    }
  
    inputtingOperator(e.target.innerText)
})

function inputtingOperator(input){
    if (justOperated){
        if(userInput!=""){
            num1=userInput;
        }
        justOperated=false
    }

    if(num2===""&&!(num1==="")&&operator!=""&&userInput!=""){
        num2=userInput; //pre operate function
        
        userInput=operate(num1,num2,operator).toString();
        console.log(userInput)

        if (userInput.length>=13){
            userInput=visualResult.slice(0,13)
        }
        displayValue.textContent=userInput;
        num1=userInput //after operate function

    }
    if (num1===""){
        num1=userInput;
    }

    operator=input;
    historyDisplay.textContent=`${num1} ${operator}`;

    console.log(`${num1} ${operator}`)
    num2=""
    userInput="";

}

container.addEventListener("click", (e)=>{
    const isButton = e.target.className == "operate";
    if(!isButton){
        return;
    }
    inputtingOperate()
})

function inputtingOperate(){
    historyDisplay.textContent=history;
    num2=userInput;
    visualResult=operate(num1,num2,operator).toString();
    console.log(visualResult)
    if (visualResult.length>=13){
        visualResult=visualResult.slice(0,13)
    }
    displayValue.textContent=visualResult;

    justOperated=true;
    historyDisplay.textContent=`${num1} ${operator} ${num2} =`;
    console.log(`${num1} ${operator} ${num2} =`)
    num1=visualResult;
    console.log(num1)
    num2="";
    userInput=""
    operator="";

}

//This should be ok
container.addEventListener("click", (e)=>{
    const isButton = e.target.className == "clear";
    if(!isButton){
        return;
    }
    userInput="";
    visualResult="0";
    num1="";
    num2="";
    operator="";
    historyDisplay.textContent="";
    displayValue.textContent=visualResult;

})

container.addEventListener("click", (e)=>{
    const isButton = e.target.className == "decimal";
    if(!isButton){
        return;
    }
    if (!userInput.includes(".")){
        userInput+=".";
    }

    displayValue.textContent=userInput;

})

container.addEventListener("click", (e)=>{
    const isButton = e.target.className == "delete";
    if(!isButton){
        return;
    }
    inputtingDelete()
})

function inputtingDelete(){
    userInput=userInput.slice(0,userInput.length-1) 
    if (userInput.length===0){
        visualResult="0";
        displayValue.textContent=visualResult;

    }else{
        displayValue.textContent=userInput;
    }
}
function log(something){
    console.log(something)
    console.log(`userInput: ${userInput}`)
    console.log(`num1:${num1}`)
    console.log(`operator:${operator}`)
    console.log(`num2:${num2}`)
    console.log(`visualResult:${visualResult}`)
    console.log(`---------------------`)
}
