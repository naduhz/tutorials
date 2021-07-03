const sumAll = function (num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  if (num1 < 0 || num2 < 0) return "ERROR";

  let sum = 0;

  for (
    let i = num1 < num2 ? num1 : num2;
    i <= (num1 > num2 ? num1 : num2);
    i++
  ) {
    sum += i;
  }

  return sum;
};

module.exports = sumAll;
