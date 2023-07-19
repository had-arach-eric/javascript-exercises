// Formula to convert from Celsius to Fahrenheit --> (tempºC × 9/5) + 32 = 32 °F
// Formula to convert from Fahrenheit to Celsius --> (tempºF - 32) * 5/9

const convertToCelsius = function(fahrenheit) {
  return (Math.round(((fahrenheit - 32) * 5/9) * 10)) / 10;
};

const convertToFahrenheit = function(celsius) {
  return (Math.round(((celsius * 9/5) + 32) * 10)) / 10;
};

console.log(convertToCelsius(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
