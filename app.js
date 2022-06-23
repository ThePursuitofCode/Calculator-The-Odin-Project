// Create functions for adding, subtracting, multiplication, and dividing.

// Create a function operate that takes an operator(*, -, x, /) and 2 numbers and then calls one of the above functions.


function addition(x,y) {
    calcValue = x + y;
    updateDisplay()
    calcValueX = ""
    calcValueY = ""
    operatorValue = ""
}

function subtraction(x,y) {
    calcValue = x - y;
    updateDisplay()
    calcValueX = ""
    calcValueY = ""
    operatorValue = ""
}

function multiplication(x,y) {
    calcValue = x * y;
    updateDisplay()
    calcValueX = ""
    calcValueY = ""
    operatorValue = ""
}

function division(x,y) {
    calcValue = x / y;
    updateDisplay()
    calcValueX = ""
    calcValueY = ""
    operatorValue = ""
}


// Display
const displayOutput = document.querySelector('#output')

// Attempting with querySelectorAll
const numBtns = document.querySelectorAll('.numBtn')

const operatorBtns = document.querySelectorAll('.operatorBtn')
// Operator Buttons

const clearBtn = document.querySelector('#clear')
const equalsBtn = document.querySelector('#equals')

let calcValue = ""
let calcValueX = ""
let calcValueY = ""
let operatorValue = ""

numBtns.forEach((e) => {
    e.addEventListener('click', (num) =>{
        value = num.target.textContent
        calcValue += value
        updateDisplay()
    })
})

operatorBtns.forEach((e) => {
    e.addEventListener('click', (operator) => {
        operatorValue = operator.target.textContent

        if(calcValueX == ""){
            calcValueX = calcValue;
            calcValue = "";
            updateDisplay()
        }
    })
})

function updateDisplay() {
    displayOutput.innerText = calcValue
}

equalsBtn.addEventListener('click', ()=>{
    if (calcValue != "" && calcValueX != ""){
        calcValueY = calcValue;
        calcValue = "";
        updateDisplay()
    
        if(calcValueX != "" && calcValueY != ""){
            if(operatorValue == "+"){
                addition(parseInt(calcValueX), parseInt(calcValueY))
            } else if (operatorValue == "-"){
                subtraction(parseInt(calcValueX), parseInt(calcValueY))
            } else if (operatorValue == '*'){
                multiplication(parseInt(calcValueX), parseInt(calcValueY))
            } else if (operatorValue == "/"){
                division(parseInt(calcValueX), parseInt(calcValueY))
            }
        }
    }
})

clearBtn.addEventListener('click', ()=>{
    calcValueX = ""
    calcValueY = ""
    operatorValue = ""
    calcValue = ""
    updateDisplay()
})