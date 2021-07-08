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

var operatePressed = false;
var operatorMemory;
var numberMemory = Array(2);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  return b == 0 ? "ERROR" : a / b;
};
const squareroot = (a) => Math.sqrt(a);
const operate = (operator, array) => operator(array[0], parseFloat(array[1]));

allClearButton.addEventListener("click", (event) => {
  calculatorDisplay.textContent = 0;
  operatorMemory = undefined;
  numberMemory = Array(2);
  operatePressed = false;
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
  if (numberMemory[0] == null) {
    if (calculatorDisplay.textContent.charAt(0) !== "-") {
      let tempArray = Array.from(calculatorDisplay.textContent);
      tempArray.unshift("-");
      calculatorDisplay.textContent = tempArray.join("");
    } else {
      let tempArray = Array.from(calculatorDisplay.textContent);
      tempArray.shift();
      calculatorDisplay.textContent = tempArray.join("");
    }
  } else {
    if (numberMemory[1] == null) {
      numberMemory[1] = "-0";
    } else {
      if (numberMemory[1].charAt(0) !== "-") {
        let tempArray = Array.from(numberMemory[1]);
        tempArray.unshift("-");
        numberMemory[1] = tempArray.join("");
      } else {
        let tempArray = Array.from(numberMemory[1]);
        tempArray.shift();
        numberMemory[1] = tempArray.join("");
      }
    }
  }

  console.log(operatePressed, operatorMemory, numberMemory);
});

decimalButton.addEventListener("click", (event) => {
  if (numberMemory[0] == null) {
    if (![...calculatorDisplay.textContent].includes(".")) {
      let tempArray = Array.from(calculatorDisplay.textContent);
      tempArray.push(".");
      calculatorDisplay.textContent = tempArray.join("");
    }
  } else {
    if (numberMemory[1] == null) {
      numberMemory[1] = "0.";
    } else {
      if (![...numberMemory[1]].includes(".")) {
        let tempArray = Array.from(numberMemory[1]);
        tempArray.push(".");
        numberMemory[1] = tempArray.join("");
      }
    }
  }

  console.log(operatePressed, operatorMemory, numberMemory);
});

squareRootButton.addEventListener("click", (event) => {
  if (numberMemory[0] == null) {
    if (numberMemory[1] == null || numberMemory[1] == 0) return;
    if (parseFloat(calculatorDisplay.textContent) < 0) {
      calculatorDisplay.textContent = "ERROR";
      return;
    }

    calculatorDisplay.textContent = squareroot(
      parseFloat(calculatorDisplay.textContent)
    )
      .toString()
      .substring(0, 13);

    numberMemory[0] = parseFloat(calculatorDisplay.textContent);
    numberMemory[1] = null;
  } else {
    if (numberMemory[1] == null || numberMemory[1] == 0) return;
    if (parseFloat(numberMemory[1]) < 0) {
      calculatorDisplay.textContent = "ERROR";
      return;
    }

    numberMemory[0] = parseFloat(calculatorDisplay.textContent);
    numberMemory[1] = squareroot(parseFloat(numberMemory[1]))
      .toString()
      .substring(0, 13);
  }

  console.log(operatePressed, operatorMemory, numberMemory);
});

for (let i = 0; i < 10; i++) {
  const number = document.querySelector(`#num${i}`);
  number.addEventListener("click", (event) => {
    function updateDisplay() {
      let tempArray = Array.from(calculatorDisplay.textContent);
      tempArray.push(i);
      calculatorDisplay.textContent = tempArray.join("");
    }

    if (numberMemory[0] == null) {
      if (parseFloat(calculatorDisplay.textContent) !== 0) {
        updateDisplay();
      } else {
        if (calculatorDisplay.textContent.charAt(0) !== "-") {
          if (![...calculatorDisplay.textContent].includes(".")) {
            calculatorDisplay.textContent = i;
          } else {
            updateDisplay();
          }
        } else {
          if (![...calculatorDisplay.textContent].includes(".")) {
            calculatorDisplay.textContent = `-${i}`;
          } else {
            updateDisplay();
          }
        }
      }
    } else {
      if (numberMemory[1] == null) {
        numberMemory[1] = `${i}`;
      } else {
        if (numberMemory[1].charAt(0) !== "-") {
          if (![...numberMemory[1]].includes(".")) {
            if (numberMemory[1].charAt(0) == 0) {
              numberMemory[1] = `${i}`;
            } else {
              numberMemory[1] += `${i}`;
            }
          } else {
            numberMemory[1] += `${i}`;
          }
        } else {
          if (parseFloat(numberMemory[1]) == 0) {
            if (![...numberMemory[1]].includes(".")) {
              numberMemory[1] = `-${i}`;
            } else {
              numberMemory[1] += `${i}`;
            }
          } else {
            numberMemory[1] += `${i}`;
          }
        }
      }
      console.log(operatePressed, operatorMemory, numberMemory);
    }
  });
}

addButton.addEventListener("click", (event) => {
  operatorMemory = add;
  operatePressed = false;

  if (numberMemory[1] == null) {
    numberMemory[0] = parseFloat(calculatorDisplay.textContent);
  } else {
    calculatorDisplay.textContent = operate(operatorMemory, numberMemory);
    numberMemory[0] = parseFloat(calculatorDisplay.textContent);
    numberMemory[1] = null;
  }

  console.log(operatePressed, operatorMemory, numberMemory);
});

subtractButton.addEventListener("click", (event) => {
  operatorMemory = subtract;
  operatePressed = false;

  if (numberMemory[1] == null) {
    numberMemory[0] = parseFloat(calculatorDisplay.textContent);
  } else {
    calculatorDisplay.textContent = operate(operatorMemory, numberMemory);
    numberMemory[0] = parseFloat(calculatorDisplay.textContent);
    numberMemory[1] = null;
  }

  console.log(operatePressed, operatorMemory, numberMemory);
});

equalButton.addEventListener("click", (event) => {
  if (!operatorMemory) return;
  if (numberMemory[0] == null || numberMemory[1] == null) return;

  numberMemory[0] = parseFloat(calculatorDisplay.textContent);
  calculatorDisplay.textContent = operate(operatorMemory, numberMemory);

  numberMemory[0] = parseFloat(calculatorDisplay.textContent);
  numberMemory[1] = null;
  operatePressed = true;

  console.log(operatePressed, operatorMemory, numberMemory);
});
