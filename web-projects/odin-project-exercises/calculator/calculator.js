const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, number) => total + number, 0);
};

const multiply = function (array) {
  return array.reduce((total, number) => total * number, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  const numbersArray = [...Array(number).keys()].map((x) => ++x);
  return multiply(numbersArray);
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
