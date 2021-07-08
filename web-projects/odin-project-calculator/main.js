const calculatorDisplay = document.querySelector("#calculatorDisplay");
const allClearButton = document.querySelector("#allclear");
const clearButton = document.querySelector("#clear");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const decimalButton = document.querySelector("#decimal");
const equalButton = document.querySelector("#equal");
const plusMinusButton = document.querySelector("#plusminus");
const squareRootButton = document.querySelector("#squareroot");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const squareroot = (a) => Math.sqrt(a);
const operate = (operator, array) => operator(array[0], array[1]);

function allClear() {
  calculatorDisplay.textContent = 0;
  return;
}
function clear() {
  calculatorDisplay.textContent = calculatorDisplay.textContent.substring(
    0,
    calculatorDisplay.textContent.length - 1
  );
}
function plusMinus() {
  if (calculatorDisplay.textContent.charAt(0) !== "-") {
    let tempArray = Array.from(calculatorDisplay.textContent);
    tempArray.unshift("-");
    calculatorDisplay.textContent = tempArray.join("");
  } else {
    let tempArray = Array.from(calculatorDisplay.textContent);
    tempArray.shift();
    calculatorDisplay.textContent = tempArray.join("");
  }
}

allClearButton.addEventListener("click", (event) => {
  allClear();
});

clearButton.addEventListener("click", (event) => {
  if (calculatorDisplay.textContent.length !== 1) {
    clear();
  } else {
    if (calculatorDisplay.textContent !== "0") {
      calculatorDisplay.textContent = 0;
    }
  }
});

plusMinusButton.addEventListener("click", (event) => {
  plusMinus();
});

for (let i = 0; i < 10; i++) {
  const number = document.querySelector(`#num${i}`);
  number.addEventListener("click", (event) => {
    if (parseInt(calculatorDisplay.textContent) !== 0) {
      let tempArray = Array.from(calculatorDisplay.textContent);
      tempArray.push(i);
      calculatorDisplay.textContent = tempArray.join("");
    } else {
      if (calculatorDisplay.textContent.charAt(0) !== "-") {
        calculatorDisplay.textContent = i;
      } else {
        calculatorDisplay.textContent = `-${i}`;
      }
    }
  });
}
