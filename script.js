let num1 = 0;
let num2 = 0;
//add
const add = function (a, b) {
  alert('a is ' + a + ' b is ' + b);
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
  num1=0;
  num2=0;
};

const displayAnswer = function (a) {
  const displayText = document.getElementById('display');
  displayText.innerText = a;
};

const getNumbers = function () {
  let num1 = prompt("Enter the first number");
  let op = prompt("Enter the operator (+,-,*,/)");
  let num2 = prompt("Enter the second number");

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  operate(num1, op, num2);
};

const waitForEquals = function (num1, op) {
  displayText = document.getElementById('display');
  const equalsBtn = document.getElementById('equalsBtn');
    equalsBtn.addEventListener('click', function() {
      num2 = displayText.innerText;
      num2 = parseInt(num2);
      operate(num1, op, num2);
    });
}


window.onload = function () {
    const displayText = document.getElementById('display');
  let num2 = 0;
    //clear button event listener to clear the display when pressed
    const clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', function() {
        displayText.innerText = '';
        num1 = 0;
        num2=0;
    });

    //event listener for each number button
    const oneBtn = document.getElementById('one');
    oneBtn.addEventListener('click', function() {
        displayText.innerText = displayText.innerText + '1';
    });

    const twoBtn = document.getElementById('two');
    twoBtn.addEventListener('click', function() {
      displayText.innerText = displayText.innerText + '2';
    });

    const threeBtn = document.getElementById('three');
    threeBtn.addEventListener('click', function() {
      displayText.innerText = displayText.innerText + '3';
    });

    const fourBtn = document.getElementById('four');
    fourBtn.addEventListener('click', function() {
      displayText.innerText = displayText.innerText + '4';
    });

    const fiveBtn = document.getElementById('five');
    fiveBtn.addEventListener('click', function() {
      displayText.innerText = displayText.innerText + '5';
    });

    const sixBtn = document.getElementById('six');
    sixBtn.addEventListener('click', function() {
      displayText.innerText = displayText.innerText + '6';
    });

    const sevenBtn = document.getElementById('seven');
    sevenBtn.addEventListener('click', function() {
      displayText.innerText = displayText.innerText + '7';
    });

    const eightBtn = document.getElementById('eight');
    eightBtn.addEventListener('click', function() {
      displayText.innerText = displayText.innerText + '8';
    });

    const nineBtn = document.getElementById('nine');
    nineBtn.addEventListener('click', function() {
      displayText.innerText = displayText.innerText + '9';
    });

    const zeroBtn = document.getElementById('zero');
    zeroBtn.addEventListener('click', function() {
      displayText.innerText = displayText.innerText + '0';
    });

    const addBtn = document.getElementById('addBtn');
    addBtn.addEventListener('click', function () {
      //let num1 = displayText.innerText;
      num1 = displayText.innerText;
      num1 = parseInt(num1);
      displayText.innerText = '';
      waitForEquals(num1,'+');
    });
}

//when + is clicked, save displayText.innerText and make it an int.

//or when + is clicked, put it in the display text area
//then when = is pressed, use regex to get the numbers and operator
//so when = is pressed, displayText will be "56+32"

//when you git +, save innerText
//then have variable saved as '+' to pass into operate
//then get the second number
//when enter is hit, run the add function with the first
//variable and the second


