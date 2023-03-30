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

let firstNumber;
let secondNumber;
let operator;

const btnOne = document.querySelector('#num1');
const numberFrame = document.querySelector('#numberFrame');
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

