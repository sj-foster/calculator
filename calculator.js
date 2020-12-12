function add(x, y) {
    return Number(x) + Number(y);
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y == 0) {
        return "ERROR";
    }
    return x / y;
}

function operate(x, y, operator) {
    if (operator === "multiply") {
        return multiply(x, y)
    } 
    if (operator === "add") {
        return add(x, y);
    }
    if (operator === "subtract") {
        return subtract(x, y);
    }
    if (operator === "divide") {
        return divide(x, y);
    }
}

let display = document.getElementById("calc-display");

let inputValue = null;
let calculatedValue = null;
let currentOperator = "";
let displayCalculated = true;

function allClear() {
    currentOperator = "";
    inputValue = 0;
    calculatedValue = null;
    displayCalculated = true;
    display.value = 0;
}

function clear() {
    display.value = 0;
}

function setDisplay(e) {
    console.log(displayCalculated)
    if (displayCalculated) {
        display.value = e.target.value;
        displayCalculated = false;
    }
    else {
        display.value += e.target.value;
        displayCalculated = false;
    }
}

function displayFormat(out) {
    console.log(typeof(out));
    let outStr = out.toString();
    console.log("outStr", outStr)
    console.log("outStr.length", outStr.length)
    if (outStr.length > 9) {
        decimalLocation = outStr.indexOf(".")
        console.log("decimalLocation", decimalLocation)
        if (decimalLocation > -1) {
            console.log("decimal", decimalLocation);
            let decimalPlaces = 9 - decimalLocation;
            let fixedOut = Number(outStr).toFixed(decimalPlaces);
            console.log("fixedOut", fixedOut);
            return fixedOut;
        }
    }
    else {
        return outStr
    }
}

function setOperator(e) {
    currentOperator = e.target.value;
    // console.log(currentOperator)
}
const numButtons = document.getElementsByClassName("btn-num");

for (var i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', (e) => {
        setDisplay(e);
    });
}

const equalsButton = document.getElementsByClassName("equals")

equalsButton[0].addEventListener('click', (e) => {
    inputValue = display.value;
    calculatedValue = operate(calculatedValue, inputValue, currentOperator);
    // console.log(calculatedValue)
    display.value = displayFormat(calculatedValue)
    currentOperator = "";
    inputValue = 0;
    calculatedValue = null;
    displayCalculated = true;
    
});

const allClearButton = document.getElementsByClassName("allclear")

allClearButton[0].addEventListener('click', allClear)

const clearButton = document.getElementsByClassName("clear")

clearButton[0].addEventListener('click', clear);

const operatorButtons = document.getElementsByClassName("operator");

for (var i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', (e) => {
        inputValue = display.value;
        
        if (calculatedValue === null) {
            calculatedValue = inputValue;
            setOperator(e)
        } else { 
            calculatedValue = operate(calculatedValue, inputValue, currentOperator)
            setOperator(e)
        }
        // console.log(calculatedValue)
        displayCalculated = true;
    });
}

const decimalButton = document.getElementsByClassName("decimal");

for (var i = 0; i < decimalButton.length; i++) {
    decimalButton[i].addEventListener('click', (e) => {
        if (display.value.indexOf(".") <= -1) {
            // console.log("setting .")
            setDisplay(e)
        }
    });
}
