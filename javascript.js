function add(num1, num2){
    return num1 + num2;
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
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            alert("wrong operator")
    }
}

const container = document.querySelector(".container")
const displayValue = document.querySelector(".display")
let total="";


container.addEventListener("click", (e)=>{
    const isButton = (e.target.nodeName==="BUTTON" && e.target.className == "number");
    if(!isButton){
        return;
    }
    total+=e.target.innerText;
    displayValue.textContent=total;
})