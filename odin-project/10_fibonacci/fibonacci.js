// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

const fibonacci = function(position) {
  if (+position < 0) {
    return "OOPS";
  }
  const succession = [0, 1];
  for (let i = 2; i <= +position; i++) {
    succession.push(succession[i-1] + succession[i-2]);
  }
  return succession[+position];
};

// Do not edit below this line
module.exports = fibonacci;
