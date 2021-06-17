//define the variables
const displayText = document.getElementById('display');
const numButtons = document.getElementsByClassName('number');
const opButtons = document.getElementsByClassName('operator');
const clearBtn = document.getElementById('clearBtn');
const eqBtn = document.getElementById('equalsBtn');

let num1 = 0;
let num2 = 0;
let answer = 0;
let operatorPressed = '';

for (let button of numButtons) {
    button.addEventListener('click', function() {
        //add number to the display
        let num = button.dataset.number;
        displayText.innerHTML = displayText.innerHTML + num;
    });
}

clearBtn.addEventListener('click', function() {
    displayText.innerHTML = '';
    num1 = 0;
    num2 = 0;
    answer = 0;
    operatorPressed = '';
    console.log('cleared: ' + num1 + num2 + + answer + operatorPressed);
});

for (let button of opButtons) {
    button.addEventListener('click', function() {
        num1 = displayText.innerHTML;
        console.log(num1);
        operatorPressed = button.innerHTML;
        displayText.innerHTML = '';
    });
}

eqBtn.addEventListener('click', function() {
    num2 = displayText.innerHTML;
    console.log(num2);
    doTheMath(num1, num2, operatorPressed);
})

const doTheMath = function() {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (operatorPressed == '+') {
        answer = num1+num2;
        console.log(answer);
    }
    if (operatorPressed == '-') {
        answer = num1-num2;
        console.log(answer);
    }
    if (operatorPressed == 'X') {
        answer = num1*num2;
        console.log(answer);
    }
    if (operatorPressed == '/') {

        if (num2 == 0) {
            answer = 'Error';
        } else {
            answer = num1/num2;
            console.log(num1/num2);
        }
    }
    displayText.innerHTML = '= ' + answer;
}