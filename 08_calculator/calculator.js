const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current)
};

const power = function(a, b) {
  return a**b;	
};

const factorial = function(a) {
	let fact = 1;
  for (let i = a; i > 0; i--)
    fact *= i;
  return fact;
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
