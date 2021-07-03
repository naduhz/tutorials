const repeatString = function (string, times) {
  let returnedString = "";
  if (times < 0) {
    return "ERROR";
  }
  for (let i = 1; i <= times; i++) {
    returnedString += string;
  }
  return returnedString;
};

module.exports = repeatString;
