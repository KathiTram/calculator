// Buttons
const display = document.getElementById("displaytext");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const clearButton = document.getElementById("clrbtn");
const backspace = document.getElementById("backspace");

display.innerHTML = "";
let firstValue = "";
let secondValue = "";
let operator = "";

numbers.forEach(number => {
    number.addEventListener("click", e => {
        if (operator === "") {
            firstValue += parseFloat(e.target.innerText);
            console.log("first value", firstValue);
            display.innerHTML += e.target.innerText;
        } else {
            display.innerHTML = "";
            secondValue += parseFloat(e.target.innerText);
            console.log("second value", secondValue)
            display.innerHTML += e.target.innerText;
        }
    });
});

operators.forEach(op => {
    op.addEventListener("click", e => {
        if (op.innerHTML == "+") {
            if (operator === "") {
                operator = "+";
            } else {
                operate(operator, firstValue, secondValue);
                operator = "+";
                firstValue = secondValue;
                secondValue = "";
            }
        } else if (op.innerHTML == "-") {
            if (operator === "") {
                operator = "-";
            } else {
                operate(operator, firstValue, secondValue);
                operator = "-";
                firstValue = secondValue;
                secondValue = "";
            }
        } else if (op.innerHTML == "/") {
            if (operator === "") {
                operator = "/";
            } else {
                operate(operator, firstValue, secondValue);
                operator = "/";
                firstValue = secondValue;
                secondValue = "";
            }
        } else if (op.innerHTML == "*") {
            if (operator === "") {
                operator = "*";
            } else {
                operate(operator, firstValue, secondValue);
                operator = "*";
                firstValue = secondValue;
                secondValue = "";
            }
        } else if (op.innerHTML == "=") {
            console.log("last operator was", operator);
            operate(operator, firstValue, secondValue);
            firstValue = secondValue;
            secondValue = "";
        }
    });
});

function operate (op, a, b) {
    switch(op) {
        case "+": 
            secondValue = parseFloat(a) + parseFloat(b);
            display.innerHTML = parseFloat(a) + parseFloat(b);
            break;
        case "-": 
            secondValue = parseFloat(a) - parseFloat(b);
            display.innerHTML = parseFloat(a) - parseFloat(b);
            break;
        case "/": 
            if (b == 0) {
                alert("Can't divide by 0.")
            } else {
                secondValue = parseFloat(a) / parseFloat(b);
                display.innerHTML = parseFloat(a) / parseFloat(b);
                break;
            };
        case "*": 
            secondValue = parseFloat(a) * parseFloat(b);
            display.innerHTML = parseFloat(a) * parseFloat(b);
            break;
    }
};

clearButton.addEventListener("click", function() {
    display.innerHTML = "";
    firstValue = "";
    secondValue = "";
    operator = "";
});

