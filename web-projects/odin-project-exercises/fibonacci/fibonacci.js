var sequence = [];

const fibonacci = function (number) {
  if (parseInt(number) <= 0 || !parseInt(number)) {
    return "OOPS";
  }

  let a = 0;
  let b = 1;
  for (let i = 1; i < number; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};

module.exports = fibonacci;
