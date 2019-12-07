/**
 * Refer to https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/
 * Requirement:
 * - Use stack to check arithmetic expression that has balanced parentheses.
 */
const Stack = require('../stack');

function isMatchingPair(char1, char2) {
  if (char1 === '(' && char2 === ')') {
    return true;
  } else if (char1 === '[' && char2 === ']') {
    return true;
  } else if (char1 === '{' && char2 === '}') {
    return true;
  }

  return false;
}

function checkBalancedParentheses(str) {
  const len = str.length;
  const myStack = new Stack();
  const closingChar = ']})';
  const openingChar = '[{(';

  for (let index = 0; index < len; index++) {
    const char2 = str[index];
    if (openingChar.includes(char2)) {
      myStack.push(char2);
    } else if (closingChar.includes(char2)) {
      if (myStack.length()) {
        const char1 = myStack.pop();
        if (!isMatchingPair(char1, char2)) {
          return false;
        }
      } else {
        // we find closing char but there is no opening char added before
        return false;
      }
    }
  }

  // myStack must be empty because there has either no parentheses or pairs of parentheses
  if (myStack.length()) {
    return false;
  }

  return true;
}

module.exports = checkBalancedParentheses;
