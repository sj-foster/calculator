function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, operator) {
    return operator(x, y);
}

let display = document.getElementById("calc-display");

let calculatedValue = 0;

function getValue(event) {
    if (display.value === "0" && event.target.value != ".") {
        display.value = event.target.value;
    } else {
        display.value += event.target.value;
    }
}

function allClear() {
    calculatedValue = 0;
    display.value = 0;
}

function clear() {
    display.value = 0;
}

const numButtons = document.getElementsByClassName("btn-num");

for (var i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', getValue)
}

const equalsButton = document.getElementsByClassName("equals")

equalsButton[0].addEventListener('click', getValue)

const allClearButton = document.getElementsByClassName("allclear")

allClearButton[0].addEventListener('click', allClear)

const clearButton = document.getElementsByClassName("clear")

clearButton[0].addEventListener('click', clear);

const operatorButtons = document.getElementsByClassName("operator");

for (var i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', getValue)
}

const decimalButton = document.getElementsByClassName("decimal");


for (var i = 0; i < decimalButton.length; i++) {
    decimalButton[i].addEventListener('click', getValue)
}




// console.log(add(1, 1));
// console.log(subtract(1, 1));
// console.log(multiply(2, 4));
// console.log(divide(4, 2));

// console.log(operate(1, 2, add))