//operation functions
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
        return 'OOPS';
    } else {
        return a / b;
    }  
}

function operate(a, b, op) {
    if (op == '+') {
        return add(a, b);
    } else if (op == '-') {
        return subtract(a, b);
    } else if (op == '*') {
        return multiply(a, b);
    } else if (op == '/') {
        return divide(a, b);
    }
}

//functions triggered by button presses
function firstValue(op) {
    if (firstNumber == '') {
        firstNumber = numberFrame.value;
        operator = op;
        numberFrame.value = '0';
        let equation = document.getElementById('equation').textContent + ` ${firstNumber} ${operator}`;
        document.getElementById('equation').innerHTML = equation;
    } else {
        operator = op;
        secondValue();
    }
}

function secondValue(equals) {
    secondNumber = numberFrame.value;
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    result = operate(firstNumber, secondNumber, operator);
    numberFrame.value = result;

    let equation = document.getElementById('equation').textContent + ` ${secondNumber} = ${result}`;
    document.getElementById('equation').innerHTML = equation;

    if (equals == 1) {
        firstNumber = '';
        secondNumber = '';
    } else {
        firstNumber = result;
    }
   
}

function buttonFunc(buttonNum) {
    if (numberFrame.value == '0' || numberFrame.value == result) {
        numberFrame.value = buttonNum;
    } else {
        numberFrame.value = numberFrame.value + buttonNum;
    }
}

let firstNumber = '';
let secondNumber = '';
let operator;
let result;

const numberFrame = document.querySelector('#numberFrame');
const equation = document.querySelector('#equation');

//Event listeners for the number buttons
document.getElementById('num1').addEventListener('click', function() {buttonFunc('1')});
document.getElementById('num2').addEventListener('click', function() {buttonFunc('2')});
document.getElementById('num3').addEventListener('click', function() {buttonFunc('3')});
document.getElementById('num4').addEventListener('click', function() {buttonFunc('4')});
document.getElementById('num5').addEventListener('click', function() {buttonFunc('5')});
document.getElementById('num6').addEventListener('click', function() {buttonFunc('6')});
document.getElementById('num7').addEventListener('click', function() {buttonFunc('7')});
document.getElementById('num8').addEventListener('click', function() {buttonFunc('8')});
document.getElementById('num9').addEventListener('click', function() {buttonFunc('9')});
document.getElementById('num0').addEventListener('click', function() {buttonFunc('0')});
document.getElementById('decimal').addEventListener('click', function() {buttonFunc('.')});

//Event listeners for the operator buttons
document.getElementById('add').addEventListener('click', function(){firstValue('+')});
document.getElementById('subtract').addEventListener('click', function(){firstValue('-')});
document.getElementById('multiply').addEventListener('click', function(){firstValue('*')});
document.getElementById('divide').addEventListener('click', function(){firstValue('/')});
document.getElementById('equals').addEventListener('click', function(){secondValue(1)});

//Event listeners for the AC, C, and +/- buttons
document.getElementById('clear').addEventListener('click', function() {
    numberFrame.value = '0';
    firstNumber = '';
    secondNumber = '';
})
document.getElementById('backspace').addEventListener('click', function() {

})
document.getElementById('signChange').addEventListener('click', function() {

})