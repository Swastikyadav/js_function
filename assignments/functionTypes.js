// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

 // Function Decleration
 function addOne(n) {
   return Number( n++ );
 }
 // Function Expression
 let addOne = function(n) {
   return Number( n++ );
 }
 // Arrow function without curly braces.
 let addOne = n => Number( n++ );

// Arrow function with curly braces.
let addOne = (n) => {
  return Number( n++ );
}
addOne(5); // 6

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

// Function Decleration
function subtractOne(n) {
  return Number( n-- );
}
// Function Expression
let subtractOne = function(n) {
  return Number( n-- );
}
// Arrow function without curly braces.
let subtractOne = n => Number( n-- );

// Arrow function with curly braces.
let subtractOne = (n) => {
 return Number( n-- );
}
subtractOne(8); // 7

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

 // Function Decleration
 function add(x, y) {
   return Number( x + y );
 }
 // Function Expression
 let add = function(x, y) {
   return Number( x + y );
 }
 // Arrow function without curly braces.
 let add = (x, y) => Number( x + y );

// Arrow function with curly braces.
let add = (x, y) => {
  return Number( x + y );
}
add(8, 5); // 13

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

// Function Decleration
function difference(x, y) {
  return Number( y - x );
}
// Function Expression
let difference = function(x, y) {
  return Number( y - x );
}
// Arrow function without curly braces.
let difference = (x, y) => Number( y - x );

// Arrow function with curly braces.
let difference = (x, y) => {
 return Number( y - x );
}
difference(9, 7); // 2

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

// Function Decleration
function multiply(x, y) {
  return Number( x * y );
}
// Function Expression
let multiply = function(x, y) {
  return Number( x * y );
}
// Arrow function without curly braces.
let multiply = (x, y) => Number( x * y );

// Arrow function with curly braces.
let multiply = (x, y) => {
 return Number( x * y );
}
multiply(8, 4); // 32

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

// Function Decleration
function division(x, y) {
  return Number( x / y );
}
// Function Expression
let division = function(x, y) {
  return Number( x / y );
}
// Arrow function without curly braces.
let division = (x, y) => Number( x / y );

// Arrow function with curly braces.
let division = (x, y) => {
 return Number( x / y );
}
divide(8, 4); // 2

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

// Function Decleration
function square(x) {
  return Number(x ** 2);
}
// Function Expression
let square = function(x) {
  return Number(x ** 2);
}
// Arrow function without curly braces.
let square = n => Number(x ** 2);

// Arrow function with curly braces.
let square = (x) => {
 return Number(x ** 2);
}
square(8); // 64

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

// Arrow function
let operation = (operation, x, y) => {
	switch (operation) {
		case "add":
			console.log(`${x} + ${y} = ${x + y}`);
			break;
		case "subtract":
			console.log(`${x} - ${y} = ${x - y}`);
			break;
		case "multiply":
			console.log(`${x} * ${y} = ${x * y}`);
			break;
		case "divide":
			console.log(`${x} / ${y} = ${x / y}`);
			break;
	}				
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

// Function Decleration
function isAGreater(a, b) {
  if (Number(a) > Number(b)) {
    return true;
  }
}
// Function Expression
let isAGreater = function(a, b) {
  if (Number(a) > Number(b)) {
    return true;
  }
}
// Arrow function
let isAGreater = (a, b) => {
  if (Number(a) > Number(b)) {
    return true;
  }
}
isAGreater(8, 6); // true

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

// Function Decleration
function isASmaller(a, b) {
  if (Number(a) < Number(b)) {
    return true;
  }
}
// Function Expression
let isASmaller = function(a, b) {
  if (Number(a) < Number(b)) {
    return true;
  }
}
// Arrow function
let isASmaller = (a, b) => {
  if (Number(a) < Number(b)) {
    return true;
  }
}
isASmaller(8, 6); // false

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

// Function Decleration
function isEquall(a, b) {
  if (Number(a) == Number(b)) {
    return true;
  }
}
// Function Expression
let isEquall = function(a, b) {
  if (Number(a) == Number(b)) {
    return true;
  }
}
// Arrow function
let isEquall = (a, b) => {
  if (Number(a) == Number(b)) {
    return true;
  }
}
isEquall(6, 6); // true

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

// Function Decleration
function smaller(x, y) {
  return Math.min(x, y);
}
// Function Expression
let smaller = function(x, y) {
  return Math.min(x, y);
}
// Arrow function without curly braces
let smaller = (x, y) => Math.min(x, y);
// Arrow function
let smaller = (x, y) => {
  return Math.min(x, y);
}
smaller(7, 3); // 3

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

// Function Decleration
function greater(x, y) {
  return Math.max(x, y);
}
// Function Expression
let greater = function(x, y) {
  return Math.min(x, y);
}
// Arrow function without curly braces
let greater = (x, y) => Math.max(x, y);
// Arrow function
let greater = (x, y) => {
  return Math.min(x, y);
}
greater(9, 6); // 9

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

// Function decleration
function even(n) {
  return n % 2 ? false : true;
}
// Function Expression
let even = function(n) {
  return n % 2 ? false : true;
}
// Arrow function without curly braces.
let even = n => n % 2 ? false : true;
// Arrow function 
let even = n => {
  return n % 2 ? false : true;
}
even(8); // true

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

// Function decleration
function odd(n) {
  return n % 2 ? true : false;
}
// Function Expression
let odd = function(n) {
  return n % 2 ? true : false;
}
// Arrow function without curly braces.
let odd = n => n % 2 ? true : false;
// Arrow function 
let odd = n => {
  return n % 2 ? true : false;
}
odd(8); // false

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

 // Function decleration
 function grade(score) {
  if (score >= 90 && score < 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D"
  } else if (score >= 50 && score < 60) {
    return "F"
  }
 }
// Function Expression
let grade = function(score) {
  if (score >= 90 && score < 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D"
  } else if (score >= 50 && score < 60) {
    return "F"
  }
}
// Arrow Function
let grade = (score) => {
  if (score >= 90 && score < 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D"
  } else if (score >= 50 && score < 60) {
    return "F"
  }
}
grade(65); // D

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

// Function decleration
function addString(word1, word2) {
  return `${word1} ${word2}`;
}
// Function Expression
let addString = function(word1, word2) {
  return `${word1} ${word2}`;
}
// Arrow function without curly braces.
let addString = (word1, word2) => `${word1} ${word2}`;
// Arrow function
let addString = (word1, word2) => {
  return `${word1} ${word2}`;
}
addString("Hello", "World!");
