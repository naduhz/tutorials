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
  if (!parseFloat(calculatorDisplay.textContent)) {
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
  if (!operatePressed) {
    if (numberMemory[0] == undefined) {
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
      if (numberMemory[1] == undefined) {
        numberMemory[1] = "-0";
        calculatorDisplay.textContent = numberMemory[1];
      } else {
        if (numberMemory[1].charAt(0) !== "-") {
          let tempArray = Array.from(numberMemory[1]);
          tempArray.unshift("-");
          numberMemory[1] = tempArray.join("");
          calculatorDisplay.textContent = numberMemory[1];
        } else {
          let tempArray = Array.from(numberMemory[1]);
          tempArray.shift();
          numberMemory[1] = tempArray.join("");
          calculatorDisplay.textContent = numberMemory[1];
        }
      }
    }
  } else {
    if (numberMemory[0].toString().charAt(0) !== "-") {
      let tempArray = Array.from(numberMemory[0].toString());
      tempArray.unshift("-");
      calculatorDisplay.textContent = tempArray.join("");
    } else {
      let tempArray = Array.from(numberMemory[0].toString());
      tempArray.shift();
      calculatorDisplay.textContent = tempArray.join("");
    }

    operatorMemory = undefined;
    numberMemory = Array(2);
    operatePressed = false;
  }
});

decimalButton.addEventListener("click", (event) => {
  if (numberMemory[0] == undefined) {
    if (![...calculatorDisplay.textContent].includes(".")) {
      let tempArray = Array.from(calculatorDisplay.textContent);
      tempArray.push(".");
      calculatorDisplay.textContent = tempArray.join("");
    }
  } else {
    if (numberMemory[1] == undefined) {
      numberMemory[1] = "0.";
      calculatorDisplay.textContent = numberMemory[1];
    } else {
      if (![...numberMemory[1]].includes(".")) {
        let tempArray = Array.from(numberMemory[1]);
        tempArray.push(".");
        numberMemory[1] = tempArray.join("");
        calculatorDisplay.textContent = numberMemory[1];
      }
    }
  }
});

squareRootButton.addEventListener("click", (event) => {
  if (numberMemory[0] == undefined) {
    if (calculatorDisplay.textContent == 0) return;
    if (parseFloat(calculatorDisplay.textContent) < 0) {
      calculatorDisplay.textContent = "ERROR";
      return;
    }

    calculatorDisplay.textContent = squareroot(
      parseFloat(calculatorDisplay.textContent)
    ).toString();

    numberMemory[0] = parseFloat(calculatorDisplay.textContent);
  } else {
    if (!operatePressed) {
      if (!numberMemory[1] || numberMemory[1] == 0) return;
      if (parseFloat(numberMemory[1]) < 0) {
        calculatorDisplay.textContent = "ERROR";
        return;
      }

      numberMemory[1] = squareroot(parseFloat(numberMemory[1])).toString();
      calculatorDisplay.textContent = numberMemory[1];
    } else {
      if (calculatorDisplay.textContent == 0) return;
      if (parseFloat(calculatorDisplay.textContent) < 0) {
        calculatorDisplay.textContent = "ERROR";
        return;
      }

      calculatorDisplay.textContent = squareroot(
        parseFloat(calculatorDisplay.textContent)
      ).toString();

      numberMemory[0] = parseFloat(calculatorDisplay.textContent);
    }
  }
});

for (let i = 0; i < 10; i++) {
  const number = document.querySelector(`#num${i}`);
  number.addEventListener("click", (event) => {
    function updateDisplay() {
      let tempArray = Array.from(calculatorDisplay.textContent);
      tempArray.push(i);
      calculatorDisplay.textContent = tempArray.join("");
    }

    if (!operatePressed) {
      if (numberMemory[0] == undefined) {
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
        if (numberMemory[1] == undefined) {
          numberMemory[1] = `${i}`;
          calculatorDisplay.textContent = numberMemory[1];
        } else {
          if (numberMemory[1].charAt(0) !== "-") {
            if (![...numberMemory[1]].includes(".")) {
              if (numberMemory[1].charAt(0) == 0) {
                numberMemory[1] = `${i}`;
                calculatorDisplay.textContent = numberMemory[1];
              } else {
                numberMemory[1] += `${i}`;
                calculatorDisplay.textContent = numberMemory[1];
              }
            } else {
              numberMemory[1] += `${i}`;
              calculatorDisplay.textContent = numberMemory[1];
            }
          } else {
            if (parseFloat(numberMemory[1]) == 0) {
              if (![...numberMemory[1]].includes(".")) {
                numberMemory[1] = `-${i}`;
                calculatorDisplay.textContent = numberMemory[1];
              } else {
                numberMemory[1] += `${i}`;
                calculatorDisplay.textContent = numberMemory[1];
              }
            } else {
              numberMemory[1] += `${i}`;
              calculatorDisplay.textContent = numberMemory[1];
            }
          }
        }
      }
    } else {
      calculatorDisplay.textContent = i;
      operatorMemory = undefined;
      numberMemory = Array(2);
      operatePressed = false;
    }
  });
}

addButton.addEventListener("click", (event) => {
  if (!operatorMemory) {
    operatorMemory = add;
    operatePressed = false;

    if (numberMemory[1] == undefined) {
      numberMemory[0] = parseFloat(calculatorDisplay.textContent);
    } else {
      calculatorDisplay.textContent = operate(operatorMemory, numberMemory);
      numberMemory[0] = parseFloat(calculatorDisplay.textContent);
      numberMemory[1] = undefined;
    }
  } else {
    if (numberMemory[1] == undefined) {
      operatorMemory = add;
    } else {
      calculatorDisplay.textContent = operate(operatorMemory, numberMemory);
      numberMemory[0] = parseFloat(calculatorDisplay.textContent);
      numberMemory[1] = undefined;
      operatorMemory = add;
    }
  }
});

subtractButton.addEventListener("click", (event) => {
  if (!operatorMemory) {
    operatorMemory = subtract;
    operatePressed = false;

    if (numberMemory[1] == undefined) {
      numberMemory[0] = parseFloat(calculatorDisplay.textContent);
    } else {
      calculatorDisplay.textContent = operate(operatorMemory, numberMemory);
      numberMemory[0] = parseFloat(calculatorDisplay.textContent);
      numberMemory[1] = undefined;
    }
  } else {
    if (numberMemory[1] == undefined) {
      operatorMemory = subtract;
    } else {
      calculatorDisplay.textContent = operate(operatorMemory, numberMemory);
      numberMemory[0] = parseFloat(calculatorDisplay.textContent);
      numberMemory[1] = undefined;
      operatorMemory = subtract;
    }
  }
});

multiplyButton.addEventListener("click", (event) => {
  if (!operatorMemory) {
    operatorMemory = multiply;
    operatePressed = false;

    if (numberMemory[1] == undefined) {
      numberMemory[0] = parseFloat(calculatorDisplay.textContent);
    } else {
      calculatorDisplay.textContent = operate(operatorMemory, numberMemory);
      numberMemory[0] = parseFloat(calculatorDisplay.textContent);
      numberMemory[1] = undefined;
    }
  } else {
    if (numberMemory[1] == undefined) {
      operatorMemory = multiply;
    } else {
      calculatorDisplay.textContent = operate(operatorMemory, numberMemory);
      numberMemory[0] = parseFloat(calculatorDisplay.textContent);
      numberMemory[1] = undefined;
      operatorMemory = multiply;
    }
  }
});

divideButton.addEventListener("click", (event) => {
  if (!operatorMemory) {
    operatorMemory = divide;
    operatePressed = false;

    if (numberMemory[1] == undefined) {
      numberMemory[0] = parseFloat(calculatorDisplay.textContent);
    } else {
      calculatorDisplay.textContent = operate(operatorMemory, numberMemory);
      numberMemory[0] = parseFloat(calculatorDisplay.textContent);
      numberMemory[1] = undefined;
    }
  } else {
    if (numberMemory[1] == undefined) {
      operatorMemory = divide;
    } else {
      calculatorDisplay.textContent = operate(operatorMemory, numberMemory);
      numberMemory[0] = parseFloat(calculatorDisplay.textContent);
      numberMemory[1] = undefined;
      operatorMemory = divide;
    }
  }
});

equalButton.addEventListener("click", (event) => {
  if (!operatorMemory) return;
  if (numberMemory[0] == undefined || numberMemory[1] == undefined) return;

  calculatorDisplay.textContent = operate(operatorMemory, numberMemory);
  console.log(calculatorDisplay.textContent);

  numberMemory[0] = parseFloat(calculatorDisplay.textContent);
  numberMemory[1] = undefined;
  operatePressed = true;
  operatorMemory = undefined;
});

window.addEventListener("keydown", (event) => {
  if (event.repeat) return;

  if (event.key === "Backspace") {
    document.getElementById("allclear").click();
  }
  if (event.key === "Delete") {
    document.getElementById("clear").click();
  }
  if (event.key === "_") {
    document.getElementById("plusminus").click();
  }
  if (event.key === "`") {
    document.getElementById("squareroot").click();
  }
  if (event.key === ".") {
    document.getElementById("decimal").click();
  }

  if (event.key === "+") {
    document.getElementById("add").click();
  }
  if (event.key === "-") {
    document.getElementById("subtract").click();
  }
  if (event.key === "*") {
    document.getElementById("multiply").click();
  }
  if (event.key === "/") {
    document.getElementById("divide").click();
  }
  if (event.key === "Enter") {
    document.getElementById("equal").click();
  }

  for (let i = 0; i < 10; i++) {
    if (event.key === `${i}`) {
      document.getElementById(`num${i}`).click();
    }
  }
});
