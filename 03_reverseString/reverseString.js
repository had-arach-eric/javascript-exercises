const reverseString = function(string) {
  let auxArray = string.split("");
  auxArray = auxArray.reverse();
  let newString = auxArray.join("");
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
