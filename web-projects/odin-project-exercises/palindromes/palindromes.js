const palindromes = function (string) {
  const cleanedString = Array.from(string.toLowerCase())
    .filter((character) => /[a-zA-Z]/.test(character))
    .join();
  const reversedString = Array.from(cleanedString).reverse().join("");
  return cleanedString === reversedString;
};

module.exports = palindromes;
