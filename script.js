// STEP 1 - convert identifiers to Camel Case notation:
// let someMonth
// function theMonth()
// let currentMonth
// let summerMonth
// let myLibraryFunction
// STEP 2 - examples of a numeric literal expression,
// 8.9
// a string literal expression, 
// "Hello"
// a Boolean literal expression, 
// true
// and a null literal expression
// null

// STEP 3 - two examples of complex / variable expressions
// let anExpression = 3 + 4
// let anotherExpression = anExpression * 2

// STEP 4 - Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.
//
// var strFirstName; 
// var strLastName;
// var strAddress;
// var strCity;
// var strState;
// var strZipCode; 
// var intYourAge;
// var strReferralSource; 
// var blnMayWeContactYou;


// STEP 5 Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
// 1.
// let strFirstName
// strFirstName = 'Dave'
// 2. 
// let strCity = 'San Diego'
// 3. 
// let strCity = 'San Diego', strState = 'CA'

// STEP 6 Create a variable. Add a number and a string and display the coerced result in the browser’s console window.
// let johnnyCashBirthDay = 26;
// window.console.log('Johnny Cash was born on February ' + johnnyCashBirthDay + ', 1932');

// STEP 7 Create two variables. For the first variable, add a Boolean and a string and display the coerced result. For the second variable, add a number and a Boolean and display the coerced result.
// let blnMayWeContactYou = true, intYourAge = 99;
// window.console.log('May we contact you?: ' + blnMayWeContactYou);
// window.console.log(intYourAge + true);

// STEP 8 Is the following string literal valid? If not, how would you fix it? 
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'console.log(someString)
// Not a string literal due to apostrophe in contraction. Fixed:
// let someString = "Who once said, 'Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.'"
// window.console.log(someString);

// STEP 9 Create a variable that produces a null value in the console window. Then, create a variable that produces an undefined value in the console window.
// let x = 100;
// x = null;
// window.console.log(x);
// let y;
// window.console.log(y);

// STEP 10 Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
// console.log(typeof 'The Man in Black');
// console.log(typeof 42);
// console.log(typeof true);
// console.log(typeof 42);
// let car = {manufacturer:'Pontiac', color:'brown'}
// console.log(typeof car)
// console.log(typeof x);

// STEP 11 Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:

// Hello Zak Ruvalcaba, welcome to the JavaScript class!

// Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.
// alert('Hello ' + 'David Walker' + ', welcome to the JavaScript class!')

// STEP 12 Declare a variable called name and set it equal to your name.
// let myName = 'David Walker'
// Substitute your name in the previous alert string with the variable instead.
// alert('Hello ' + myName + ', welcome to the JavaScript class!')

// STEP 13 Declare a variable called course and set it equal to “JavaScript”.
// let course = 'JavaScript'
// Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
// alert('Hello ' + myName + ', welcome to the' + course + ' class!')

// STEP 14 Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
// Hello Zak Ruvalcaba.
// Welcome to the JavaScript class!
// alert('Hello ' + myName + '.\nWelcome to the ' + course + ' class!')

// STEP 15 Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.
// let person = prompt('Please enter your first and last name', 'Kelly Greene');
// alert('Hello ' + person + '.\nWelcome to the ' + course + ' class!');

// STEP 16 Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
// let course = prompt('Please enter the course you are taking', 'JavaScript')
// alert('Hello ' + person + '.\nWelcome to the ' + course + ' class!');

// STEP 17 Declare a variable called x and assign it a value of 10.
// var x = 10;
// Declare a variable called y and assign it a value of 20.
// var y = 20;
// Display the sum of those two numbers in the console window.
// window.console.log(x + y)

// STEP 18 Declare a variable called x and assign it a value of 20.
// var x = 20;
// Add and assign 20 to that variable and display the result in the console window.
// window.console.log(x+=20);

// STEP 19 Declare a variable called x and assign it a value of 20.
// var x = 20;
// Multiply and assign 5 to that variable and display the result in the console window.
// window.console.log(x*=5);

// STEP  20 Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
// var x = 20 % 3;
// Divide and assign 1 to that variable and display the result in the console window.
// window.console.log(x/=1);

// STEP  21 Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
// var value1 = 10
// var value2 = 100
// if (value1 > 1 || value2 < 10) {
//     window.console.log("true");
// } 

// STEP 22 Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
// var value1 = 10
// var value2 = 100
// if (value1 === 10 && value2 !== 100) {
//      window.console.log("true");
// } else {
//   window.console.log("false");
// }
