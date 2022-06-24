/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE */
//There are five(5) common datatypes

// 1. number: JavaScript has only one numberType(positive,negative,integers,decimal) e.g 16, -4, 3.945

//2. string: Are used to represent text, they must be wrapped in quotes(""/''/) or template literal(``) e.g "cat", "56"

//3. boolean: These accept conditional statements can only either be one value true or false

//4. undefined:  This define variables with neither assignment/value e.g let countryName

//5. null: This represents intentional absence, removal of value(with assignment and null value) e.g let cityName = null

/* EXERCISE 2
 Try to describe what an object is, in your own words.
*/

/* WRITE YOUR ANSWER HERE */

// Objects are key-value pair to represent a single entity

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* WRITE YOUR ANSWER HERE */

let num1 = 12;
let num2 = 20;
let sum = num1 + num2;

console.log(sum);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/
/* WRITE YOUR ANSWER HERE */

let x = 12;

/* EXERCISE 5
 Create a variable called name and assign to it your name as a string.
*/
/* WRITE YOUR ANSWER HERE */
let myName = "Busayo";

console.log(myName);

/* EXERCISE 6
 Execute a subtraction between the number 4 and the variable x you declared before (which is storing the value 12).
*/

/* WRITE YOUR ANSWER HERE */

let num4 = 4;
let difference = x - num4;

console.log(difference);

/* EXERCISE 7
Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
 YOU DON'T NEED AN IF/ELSE BLOCK. It is enough to use console.log()
*/

/* WRITE YOUR ANSWER HERE */

let name1 = "john";
let name2 = "John";

console.log(name1 === name2);

console.log(name1 === "john");

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
