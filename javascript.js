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
            alert("wrong operator")
    }
}

const container = document.querySelector(".container")
const displayValue = document.querySelector(".display")

let userInput="";
let visualResult="0";
displayValue.textContent=visualResult;
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
    userInput+=e.target.innerText;
    displayValue.textContent=userInput;
    log()
})


container.addEventListener("click", (e)=>{
    const isButton = e.target.className == "operator";
    if(!isButton){
        return;
    }
    if (justOperated){
        log("1 OPERATOR justOperated")

        if(userInput!=""){
            log("2 OPERATOR justOperated")

            num1=userInput;
        }
        justOperated=false
    }

    if(num2==""&&!(num1==="")&&operator!=""&&userInput!=""){
        log("3 OPERATOR INSIDE MULTIPLE CONDITION")

        num2=userInput; //pre operate function
        userInput=operate(num1,num2,operator);
        displayValue.textContent=userInput;
        num1=userInput //after operate function
        log("3 OPERATOR INSIDE MULTIPLE CONDITION AFTER CALCULATION")

    }
    if (num1===""){
        log("4 OPERATOR num1==")
        num1=userInput;
    }
    operator=e.target.innerText;
    log("5 OPERATOR")
    num2=""
    userInput="";
    log("6 OPERATOR RESET num2 and userInput")

})

container.addEventListener("click", (e)=>{
    const isButton = e.target.className == "operate";
    if(!isButton){
        return;
    }
    num2=userInput;
    visualResult=operate(num1,num2,operator);
    displayValue.textContent=visualResult;

    justOperated=true;
    num1=visualResult;
    num2="";
    userInput=""
    operator="";
    log()

})

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
    displayValue.textContent=visualResult;
    log()

})
function log(something){
    console.log(something)
    console.log(`userInput: ${userInput}`)
    console.log(`num1:${num1}`)
    console.log(`operator:${operator}`)
    console.log(`num2:${num2}`)
    console.log(`visualResult:${visualResult}`)
    console.log(`---------------------`)
}
