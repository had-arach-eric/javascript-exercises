const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arrayOfNumbers) {
  return arrayOfNumbers.reduce((accumulator, element) => {
    return accumulator + element;
  }, 0);
};

const multiply = function(...numbers) {
  let result = 1;
  return numbers.reduce((accumulator, element) => {
    return accumulator * element;
  }, 1);
};

const power = function(basis, exponent) {
	let result = basis;
  for (let i = 2; i <= exponent; i++) {
    result *= basis;
  }
  return result;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

