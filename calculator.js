function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return "OOPS";
    } else {
        return a / b;
    }  
}

function operate(a, b, op) {
    if (op == "+") {
        return multiply(a, b);
    } else if (op == "-") {
        return subtract(a, b);
    } else if (op == "*") {
        return multiply(a, b);
    } else if (op == "/") {
        return divide(a, b);
    }
}

function firstValue(op) {
    firstNumber = numberFrame.value;
    operator = op;
    numberFrame.value = "";
    //equation.textContent = `${firstNumber} ${operator}`;
}

function secondValue() {
    secondNumber = numberFrame.value;
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    result = operate(firstNumber, secondNumber, operator);
    
    numberFrame.value = result;
}

let firstNumber;
let secondNumber;
let operator;
let result;

const numberFrame = document.querySelector('#numberFrame');
const equation = document.querySelector('#equation');

//Event listeners for the number buttons
document.getElementById('num1').addEventListener('click', function() {
    numberFrame.value = numberFrame.value + "1";
});
document.getElementById('num2').addEventListener('click', function() {
    numberFrame.value = numberFrame.value + "2";
});
document.getElementById('num3').addEventListener('click', function() {
    numberFrame.value = numberFrame.value + "3";
});
document.getElementById('num4').addEventListener('click', function() {
    numberFrame.value = numberFrame.value + "4";
});
document.getElementById('num5').addEventListener('click', function() {
    numberFrame.value = numberFrame.value + "5";
});
document.getElementById('num6').addEventListener('click', function() {
    numberFrame.value = numberFrame.value + "6";
});
document.getElementById('num7').addEventListener('click', function() {
    numberFrame.value = numberFrame.value + "7";
});
document.getElementById('num8').addEventListener('click', function() {
    numberFrame.value = numberFrame.value + "8";
});
document.getElementById('num9').addEventListener('click', function() {
    numberFrame.value = numberFrame.value + "9";
});
document.getElementById('num0').addEventListener('click', function() {
    numberFrame.value = numberFrame.value + "0";
});

//Event listeners for the operator buttons
document.getElementById('add').addEventListener('click', function(){firstValue('+')});
document.getElementById('subtract').addEventListener('click', function(){firstValue('-')});
document.getElementById('multiply').addEventListener('click', function(){firstValue('*')});
document.getElementById('divide').addEventListener('click', function(){firstValue('/')});
document.getElementById('equals').addEventListener('click', secondValue);