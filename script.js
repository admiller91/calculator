//add
const add = function (a, b) {
  displayAnswer(a + b);
};

//subtract
const subtract = function (a, b) {
  displayAnswer(a - b);
};

//multiply
const multiply = function (a, b) {
  displayAnswer(a * b);
};

//divide
const divide = function (a, b) {
  displayAnswer(a / b);
};

const operate = function (num1, operator, num2) {
  if (operator == "+") {
    add(num1, num2);
  }
  if (operator == "-") {
    subtract(num1, num2);
  }
  if (operator == "*") {
    multiply(num1, num2);
  }
  if (operator == "/") {
    divide(num1, num2);
  }
};

const displayAnswer = function (a) {
  console.log(parseInt(a));
  const h1 = document.getElementById("displayAnswer");
  h1.innerText = a;
};

const getNumbers = function () {
  let num1 = prompt("Enter the first number");
  let op = prompt("Enter the operator (+,-,*,/)");
  let num2 = prompt("Enter the second number");

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  operate(num1, op, num2);
};




window.onload = function () {
    const displayText = document.getElementById('display');

    //clear button event listener to clear the display when pressed
    const clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', function() {
        displayText.innerText = '';
    });

    //event listener for each number button
    const oneBtn = document.getElementById('one');
    oneBtn.addEventListener('click', function() {
        displayText.innerText = '1';
    });

    const twoBtn = document.getElementById('two');
    twoBtn.addEventListener('click', function() {
        displayText.innerText = '2';
    });

    const threeBtn = document.getElementById('three');
    threeBtn.addEventListener('click', function() {
        displayText.innerText = '3';
    });

    const fourBtn = document.getElementById('four');
    fourBtn.addEventListener('click', function() {
        displayText.innerText = '4';
    });

    const fiveBtn = document.getElementById('five');
    fiveBtn.addEventListener('click', function() {
        displayText.innerText = '5';
    });

    const sixBtn = document.getElementById('six');
    sixBtn.addEventListener('click', function() {
        displayText.innerText = '6';
    });

    const sevenBtn = document.getElementById('seven');
    sevenBtn.addEventListener('click', function() {
        displayText.innerText = '7';
    });

    const eightBtn = document.getElementById('eight');
    eightBtn.addEventListener('click', function() {
        displayText.innerText = '8';
    });

    const nineBtn = document.getElementById('nine');
    nineBtn.addEventListener('click', function() {
        displayText.innerText = '9';
    });

    const zeroBtn = document.getElementById('zero');
    zeroBtn.addEventListener('click', function() {
        displayText.innerText = '0';
    });
}
