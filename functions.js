/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */



var numberToString = function (number) {
  var str = number.toString();
  console.log(number,' is converted to ',str);
  return str;
};
numberToString(15);


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

var increase = function (number){
  return number +1;
};
increase(15);



/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
var decrease = function (number) {
  return number - 1;
};
decrease(15);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
var add = function (x,y) {
  return x+y;
};
add(10,20);



/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

var subtract = function (x,y) {
  return x-y;
};
subtract(20,10);

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

var multiply = function (x,y) {
  return x*y;
};
multiply(10,2);


/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
var divide = function (x,y) {
  return x/y;
};
divide(10,2);


/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
var square = function (x) {
  return x*x;
};
square(5);

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */


var calculate = function (operation,x,y) {
  var result = 0;
  if (operation === 'add') {
    result = add(x,y);
    console.log(x + ' + ' + y + ' = ' + result);
  } if (operation === 'subtract') {
    result = subtract(x,y);
    console.log(x + ' - ' + y + ' = ' + result);
  } if (operation === 'multiply') {
    result = multiply(x,y);
    console.log(x + ' * ' + y + ' = ' + result);
  } if (operation === 'divide') {
    result = divide(x,y);
    console.log(x + ' / ' + y + ' = ' + result);
  }
  return result;
};
calculate('add',10,20);

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
var isGreaterThan = function (a,b) {
  if (a>b) {
    return true;
  } else {
    return false;
  }
};
isGreaterThan(20,10);

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
var isLessThan = function (a,b) {
  if (a<b) {
    return true;
  } else {
    return false;
  }
};
isLessThan(20,10);

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
var areEqual = function (a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
};
areEqual(20,10);
areEqual(2,2);

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
var minimum = function (x,y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
};
minimum(20,0);

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
var maximum = function (x,y) {
  if (x < y) {
    return y;
  } else {
    return x;
  }
};
maximum(20,0);

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
var isEven = function (n) {
  if (n%2 === 0) {
    return true;
  } else {
    return false;
  }
};
isEven(11);

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
var isOdd = function (n) {
  if (n%2 !== 0) {
    return true;
  } else {
    return false;
  }
};
isOdd(11);

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
var gradeArray = [
  {minimum: 0, maximum:60, grade: 'F'},
  {minimum: 60, maximum:70, grade: 'D'},
  {minimum: 70, maximum:80, grade: 'C'},
  {minimum: 80, maximum:90, grade: 'B'},
  {minimum: 90, maximum:100, grade: 'A'},
];
var letterGrade = function (score,maxScore) {
  percentage = (score/maxScore)*100;
  //console.log(percentage);
  for (var i = 0; i < gradeArray.length; i++) {
    if (percentage >= gradeArray[i].minimum && percentage < gradeArray[i].maximum) {
      letter = gradeArray[i].grade;
      //console.log(letter);
    }
  }
  return letter;
};

letterGrade(559,800);
console.log("559,800 grade is ",letter);

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
var incrementReviews = function (restaurant) {
  if (restaurant.reviews > 0) {
    ++restaurant.reviews;
  } else {
    restaurant.reviews = 1;
  }
  return restaurant;
};

var eatWell = {
  reviews: 100
};
var meatBall = {
  reviews: 0
};

incrementReviews(eatWell);
console.log('eatWell',eatWell);


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
//var word = '';
var combine = function (word1,word2) {
  //word = word1 + ' ' + word2;
  return word1 + ' ' + word2;
};
combine('help','me');


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

var circle = {};
console.log('empty',circle);

var createCircle = function(radius) {
  circle = {};
  circle.radius = radius;
  circle.circumference = 2*radius*Math.PI;
  circle.area = radius*radius*Math.PI;
  return circle;
};

createCircle(10);
console.log('circle object: ', circle);

