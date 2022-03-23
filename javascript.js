function add(num1, num2){
    return +num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
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
let visualInput="";
let tempVisual="";
let num1="";
let num2="";
let operator="";


container.addEventListener("click", (e)=>{
    const isButton = e.target.className == "number";
    if(!isButton){
        return;
    }
    visualInput+=e.target.innerText;
    displayValue.textContent=visualInput;
})

container.addEventListener("click", (e)=>{
    const isButton = e.target.className == "operator";
    if(!isButton){
        return;
    }
    num1=visualInput;
    operator=e.target.innerText;
    tempVisual=visualInput;
    visualInput="";
    displayValue.textContent=tempVisual;
})

container.addEventListener("click", (e)=>{
    const isButton = e.target.className == "operate";
    if(!isButton){
        return;
    }
    num2=visualInput;
    visualInput=operate(num1,num2,operator);
    displayValue.textContent=visualInput;
})

container.addEventListener("click", (e)=>{
    const isButton = e.target.className == "clear";
    if(!isButton){
        return;
    }
    visualInput="";
    displayValue.textContent=visualInput;
})