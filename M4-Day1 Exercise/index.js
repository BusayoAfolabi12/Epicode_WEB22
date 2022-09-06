/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum.*/

const crazyTripleSum = function (num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
};
console.log(crazyTripleSum(3, 3));

/*2. Create a function to check two given integers. Return true if one of them is 50 or if their sum is 50.*/

const integer50 = function (a, b) {
  if (a === 50 || b === 50 || a + b === 50) {
    return true;
  } else {
    return false;
  }
};
console.log(integer50(21, 30));

/*3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string.*/

function charRemoval(pos, str) {
  return str.slice(0, pos - 2) + str.slice(pos - 1);
}
console.log(charRemoval(2, "table"));

/*4. Create a function to find and return the largest of three given integers.*/

function largestNumber(number1, number2, number3) {
  if (number1 > number2 && number1 > number3) {
    return number1;
  } else if (number2 > number1 && number2 > number3) {
    return number2;
  } else if (number3 > number1 && number3 > number2) {
    return number3;
  }
}
console.log(largestNumber(22, 67, 13));

/*5. Create a function to check if two numbers are in the range 40-60 or 70-100. Return true if they do, return false if one (or both) don’t.*/

function numRange(r1, r2) {
  if (
    (r1 >= 40 && r1 <= 60 && r2 >= 70 && r2 <= 100) ||
    (r2 >= 40 && r2 <= 60 && r1 >= 70 && r1 <= 100) ||
    (r1 >= 40 && r1 <= 60 && r2 >= 40 && r2 <= 60) ||
    (r1 >= 70 && r1 <= 100 && r2 >= 70 && r2 <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(numRange(45, 62));

/*6. Create a function to create a new string composed of a specified number of copies of a given string. Pass the string and the number of copies as parameters.*/

const createCopies = (passString, num) => {
  let newString = "";
  for (let i = 0; i < num; i++) {
    newString += passString + " ";
  }
  return newString;
};

console.log(createCopies("Epicode", 6));

/*7. Create a function to display the city name if the string begins with “Los” or “New”. Pass the city name as a parameter. Return false if they start with a different string.*/

function beginsWith(str) {
  let threeCharacters = str.slice(0, 3);

  if (
    threeCharacters.toLowerCase() === "los" ||
    threeCharacters.toLowerCase() === "new"
  ) {
    return str;
  } else {
    return "definitely does not start with Los nor New";
  }
}

/*8. Create a function to calculate and return the sum of all elements from an array with 3 elements. Pass the array as a parameter.*/

function sumCalculator(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return sum;
}

/*9. Create a function to test if an array of length 2 contains 1 OR 3. Return true is it does, false if it doesn’t.
10. Create a function to test if an array of length 2 DOES NOT contain 1 or 3. Return true if it doesn’t, false if it does.
11. Create a function to find the longest string from a given array of strings. Pass the array as parameter and return the longest string.*/

/*12. Create a function to find the types of a given angle:
    Acute angle ⇒ between 0 and 90 degrees. Return acute.
    Right angle ⇒ 90 degree. Return right
    Obtuse angle ⇒ between 90 and 180. Return obtuse
    Straight angle ⇒ 180 degrees. Return straight */

const angle = function (x) {
  if (x >= 0 && x < 90) {
    return "Acute angle";
  } else if (x === 90) {
    return "Right angle";
  } else if (x > 90 && x < 180) {
    return "Obtuse angle";
  } else if (x === 180) {
    return "Straight angle";
  } else {
    return "angle out of range";
  }
};
console.log(angle(142));

/*13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter
14. Create a function to find and return the largest even number from an array of integers that is passed a parameter.
15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. Return true if that’s the case, return false if it’s not.*/

function signChecker(a, b) {
  return (a < 0 && b > 0) || (a > 0 && b < 0);
}
console.log(signChecker(-35, -6));

/*16. Create a function to create and return a new string where the first 3 characters are in lower case and the others are in upper case. If the string’s length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter.
17. Create a function to calculate the sum of two integers (passed as parameters). If the sum is in the 50-80 range, return 65, otherwise, return 80.*/

function checkSumRange(a, b) {
  let sum = a + b;
  if (sum >= 50 && sum <= 80) {
    return 65;
  } else {
    return 80;
  }
}

/*18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example:
    The number has 3 as a factor ⇒ return Diego
    The number has 5 as a factor ⇒ return Riccardo
    The number has 7 as a factor ⇒ return Stefano
    If the number does not have 3,5, or 7, return the original number.
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder.
    One number can have more than one factor, in that case you should return both names.
    Ex: 15 has both 3 and 5 has factors: the function will return DiegoRiccardo */

function numberToString(a) {
  let string = "";

  if (a % 3 !== 0 && a % 7 !== 0 && a % 5 !== 0) return a;

  if (a % 3 === 0) string += "Diego";
  if (a % 5 === 0) string += "Riccardo";
  if (a % 7 === 0) string += "Stefano";
  return string;
}

/*19. Create a function that that takes a phrase as a parameter and returns its acronym. Ex. British Broadcasting Corporation returns BBC
 */
