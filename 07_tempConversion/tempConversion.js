const convertToCelsius = function(tempF) {
  let tempC = Number(((tempF - 32) * 5 / 9).toFixed(1));
  return tempC;
};

const convertToFahrenheit = function(tempC) {
  let tempF =Number((tempC * 9 / 5 + 32).toFIxed(1))
  return tempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
