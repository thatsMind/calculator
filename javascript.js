function add(num1, num2){
    return (+num1) + (+num2);
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
let tempVisual="0";
displayValue.textContent=tempVisual;
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
    log()
})

container.addEventListener("click", (e)=>{
    const isButton = e.target.className == "operator";
    if(!isButton){
        return;
    }
    if(operator!=""&&num1!=""){
        num2=visualInput;
        visualInput=operate(num1,num2,operator);
        displayValue.textContent=visualInput;
    }
    num1=visualInput;
    operator=e.target.innerText;
    tempVisual=visualInput;
    visualInput="";
    displayValue.textContent=tempVisual;
    log()

})

container.addEventListener("click", (e)=>{
    const isButton = e.target.className == "operate";
    if(!isButton){
        return;
    }
    num2=visualInput;
    tempVisual
    visualInput=operate(num1,num2,operator);
    displayValue.textContent=visualInput;
    visualInput=""
    num1="";
    num2="";
    operator="";
    log()

})

container.addEventListener("click", (e)=>{
    const isButton = e.target.className == "clear";
    if(!isButton){
        return;
    }
    visualInput="";
    tempVisual="";
    num1="";
    num2="";
    operator="";
    displayValue.textContent=visualInput;
    log()

})
function log(){
    console.log(`visualInput: ${visualInput}`)
    console.log(`tempVisual:${tempVisual}`)
    console.log(`num1:${num1}`)
    console.log(`num2:${num2}`)
    console.log(`operator:${operator}`)
    console.log(`---------------------`)

}
