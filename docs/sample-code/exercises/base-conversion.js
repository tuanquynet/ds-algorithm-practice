/**
 * Requirement: write functions to convert number from base 10 to other base ( 2, 8, 16)
 */
const Stack = require('../stack');

function convert(myStack, value, base) {
  const remainder = value % base;
  const result = Math.floor(value / base);

  if (result === 0) {
    myStack.push(remainder);
    return;
  }

  myStack.push(remainder);
  convert(myStack, result, base);
}

module.exports.convertToBaseWithRecursion = function convertToBaseWithRecursion(value, base) {
  const myStack = new Stack();
  let converted = '';

  convert(myStack, value, base);
  while (myStack.length()) {
    converted += myStack.pop();
  }

  return converted;
}

module.exports.convertToBase = function convertToBase(value, base) {
  const myStack = new Stack();
  let converted = '';
  let remainder;

  do {
    remainder = value % base;
    value = Math.floor(value / base);
    myStack.push(remainder);
  } while (value > 0)

  while (myStack.length()) {
    converted += myStack.pop();
  }

  return converted;
}
