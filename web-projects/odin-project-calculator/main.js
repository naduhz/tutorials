const calculatorDisplay = document.querySelector("#calculatorDisplay");
const displayValue = calculatorDisplay.textContent;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const squareroot = (a) => Math.sqrt(a);
const operate = (operator, array) => operator(array[0], array[1]);

function allClear() {
  displayValue = 0;
  return;
}
function clear() {
  displayValue = displayValue.substring(0, displayValue.length - 1);
}
function plusMinus() {
  if (displayValue.charAt(0) !== "-") {
    let tempArray = Array.from(displayValue);
    tempArray.unshift("-");
    displayValue = tempArray.join("");
  } else {
    let tempArray = Array.from(displayValue);
    tempArray.shift();
    displayValue = tempArray.join("");
  }
}

for (let i = 0; i < 10; i++) {
  const number = document.querySelector(`#num${i}`);
  number.addEventListener("click", (event) => {
    if (displayValue !== 0) {
      let tempArray = Array.from(displayValue);
      tempArray.push(i);
      displayValue = tempArray.join("");
    } else {
    }
  });
  console.log(number);
}
