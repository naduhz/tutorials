const calculatorDisplay = document.querySelector("#calculatorDisplay");
const allClearButton = document.querySelector("#allclear");
const clearButton = document.querySelector("#clear");
const plusMinusButton = document.querySelector("#plusminus");
const decimalButton = document.querySelector("#decimal");
const squareRootButton = document.querySelector("#squareroot");

const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");

const equalButton = document.querySelector("#equal");

var operatorMemory;
var numberMemory = Array(2);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  return b == 0 ? "ERROR" : a / b;
};
const squareroot = (a) => Math.sqrt(a);
const operate = (operator, array) => operator(array[0], array[1]);

allClearButton.addEventListener("click", (event) => {
  calculatorDisplay.textContent = 0;
  operatorMemory = undefined;
  numberMemory = Array(2);
});

clearButton.addEventListener("click", (event) => {
  function clear() {
    calculatorDisplay.textContent = calculatorDisplay.textContent.substring(
      0,
      calculatorDisplay.textContent.length - 1
    );
  }
  if (!parseInt(calculatorDisplay.textContent)) {
    calculatorDisplay.textContent = "0";
  }

  if (calculatorDisplay.textContent.length !== 1) {
    if (calculatorDisplay.textContent.length !== 2) {
      clear();
    } else {
      if (calculatorDisplay.textContent.charAt(0) !== "-") {
        clear();
      } else {
        calculatorDisplay.textContent = "-0";
      }
    }
  } else {
    if (calculatorDisplay.textContent !== "0") {
      calculatorDisplay.textContent = 0;
    }
  }
});

plusMinusButton.addEventListener("click", (event) => {
  if (calculatorDisplay.textContent.charAt(0) !== "-") {
    let tempArray = Array.from(calculatorDisplay.textContent);
    tempArray.unshift("-");
    calculatorDisplay.textContent = tempArray.join("");
  } else {
    let tempArray = Array.from(calculatorDisplay.textContent);
    tempArray.shift();
    calculatorDisplay.textContent = tempArray.join("");
  }
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
        if (![...calculatorDisplay.textContent].includes(".")) {
          calculatorDisplay.textContent = i;
        } else {
          let tempArray = Array.from(calculatorDisplay.textContent);
          tempArray.push(i);
          calculatorDisplay.textContent = tempArray.join("");
        }
      } else {
        if (![...calculatorDisplay.textContent].includes(".")) {
          calculatorDisplay.textContent = `-${i}`;
        } else {
          let tempArray = Array.from(calculatorDisplay.textContent);
          tempArray.push(i);
          calculatorDisplay.textContent = tempArray.join("");
        }
      }
    }
  });
}

decimalButton.addEventListener("click", (event) => {
  if (![...calculatorDisplay.textContent].includes(".")) {
    let tempArray = Array.from(calculatorDisplay.textContent);
    tempArray.push(".");
    calculatorDisplay.textContent = tempArray.join("");
  }
});

squareRootButton.addEventListener("click", (event) => {
  if (parseFloat(calculatorDisplay.textContent) < 0) {
    calculatorDisplay.textContent = "ERROR";
  }

  calculatorDisplay.textContent = squareroot(
    parseInt(calculatorDisplay.textContent)
  )
    .toString()
    .substring(0, 13);
});

addButton.addEventListener("click", (event) => {
  operatorMemory = add;
  if (numberMemory[1] == null) return;

  numberMemory[1] = parseFloat(calculatorDisplay.textContent);
  calculatorDisplay.textContent = operate(operatorMemory, numberMemory);
  console.log(operatorMemory, numberMemory);
});

equalButton.addEventListener("click", (event) => {
  if (!operatorMemory) return;

  if (numberMemory[1] == null) {
    numberMemory[1] = parseFloat(calculatorDisplay.textContent);
    calculatorDisplay.textContent = operate(operatorMemory, numberMemory);
    console.log(operatorMemory, numberMemory);
  } else {
    numberMemory[0] = parseFloat(calculatorDisplay.textContent);
    calculatorDisplay.textContent = operate(operatorMemory, numberMemory);
    console.log(operatorMemory, numberMemory);
  }
});
