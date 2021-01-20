/*
    * navigate to Static Layout folder within Projects.
        - If a student doesn't have this; have them create it.
    * make sure html doc is: index.html BEFORE pushing to GitHub.

    - Open Github
        - Create repo: staticLayout

*/

/*
* ****************
! FOLDER/FILE STRUCTURE
* ****************
    wd<CURRENT CLASS>
        - 0-day01 (prework)
        - 1-jsFundamentals (module work)
        - inClass_Notes (REPO)
            - HTML Lesson
            - Challenges
*           - Notes
                - literals.js
                - hoisting.js
                - scope.js
!               - functions.js
        - Projects
*/

/*
* **************
! FUNCTIONS
* **************
    ? We define functions using the keyword "function".  These can be written as declarations or expressions.
    ? functions without names are known as anonymous functions.
        Types of Functions:
            - funciton declaration
            - function expression
            - anonymous functions
*/

//! FUNCTION DECLARATION
function declaration() {
    console.log('I\'m a Function Declaration!');
}

declaration();
//? These are hoisted in our code, and run only when we call them.  Any function declarations in our code sits and waits to be run.  Consider a coffee maker.  It has the complete capability to run but won't until we press start.  Only when we do so does our coffee maker (function) begin.
/*
    - are hoisted
    - runs when we call them (invoke)
*/

//! FUNCTION EXPRESSION                 
let expression = function () {  // <--- anonymous function
    console.log('I\'m a Function Expression')
}

//?  These types of functions are not hoisted and stored within a variable.  After they are stored in a variable, we use the variables name to run the function.
expression();
//? As an aside: we have an anonymous function as the value within our variable "expression".

/*
* ****************
! FOLDER/FILE STRUCTURE
* ****************
    wd<CURRENT CLASS>
        - 0-day01 (prework)
        - 1-jsFundamentals (module work)
        - inClass_Notes (REPO)
            - HTML Lesson
            - Challenges
*           - Notes
                - literals.js
                - hoisting.js
                - scope.js
                - functions.js
!               - parameters.js
        - Projects
*/

/*
* **************
! PARAMETERS
* **************

?   Parameters can be considered as newly declared variables that we haven't provided values to yet.  That value is passed into our function when we call to run it.  This is known as an argument.  This argument is what gets assigned to the parameter.
    - Parameters are values we haven't assigned yet.
    - Passed through function calls as arguments.

    ex: 
        function nameFunc(parameter) {
            return...
        }

        nameFun(argument);

?   We must also consider the naming convention.  These parameters should reflect a relationship to what kind of data we may want to pass into it.  This could be "num" for an expected number or "name" if it were expecting someone's name.  
    - naming should reflect desired data.    
?   This isn't so much for syntax but in simply making clean code.  Remember,  people have to read this too.    
*/

//ex:
function coffeePot(filter) {  //"filter" is my paramter
    console.log(`I brewed some ${filter}.`);
}

coffeePot('dark roast'); //"dark roast" is my argument/value being passed
coffeePot('medium roast');
coffeePot('peppermint tea');
//? With this build, I can pass anything through my "filter" and produce my desired results.

let kettle = coffeePot;  // <-- a function reference
//? Notice that I'm not invoking coffeePot with the parans.  I am assigning my function to this variable named "kettle".  This is known as a function reference.  This variable is referring to my function "coffeePot".
// - not being invoked/called
kettle(); // <--- returns an undefined where our value should be.
//? Because we didn't provide a value, it returns as undefined.  We still called it, but that's it.
kettle('green tea');

//! MULTIPLE PARAMETERS & ARGUMENTS
//? We are fully capable of passing many different arguments into our functions as long as our function has our parameters available.

function dinner(main, side, drink) {
    console.log(`For dinner, I had ${main} and ${side}.  To wash it down, I had a ${drink}.`);
}

dinner('steak', 'potatoes', 'coke');
//? positions matter:
dinner('poatoes', 'coke', 'steak');
// - arguments fall in line with parameters regarding their position.

//! RETURN
// - Functions can manipulate our data and return a new value.

function calc(one,two,three) {
    let total = one + two + three;
    let average = Math.round(total / 3); // Math.round() rounds the value to the nearest integer.
    return average;
}

let avgWeight = calc(15,60,55);
//? Because we are retuning a value from this function, we need a new variable to capture it.  We then invoke our function, or call it.  The value returned is assigned to our variable "waiting" to capture it.
// - variable is used to capture the returned value.

console.log(`These three dogs weigh an average of ${avgWeight} lbs.`);

/*
* ****************
! FOLDER/FILE STRUCTURE
* ****************
    wd<CURRENT CLASS>
        - 0-day01 (prework)
        - 1-jsFundamentals (module work)
        - inClass_Notes (REPO)
            - HTML Lesson
            - Challenges
*           - Notes
                - literals.js
                - hoisting.js
                - scope.js
                - functions.js
                - parameters.js
!               - arrowFunctions.js
        - Projects
*/

/*
* **************
! ARROW FUNCTIONS
* **************
? Introduced in ES6, arrow functions, or fat arrow funcitons, are basically a concise way to write a function expression.  These are not declarations.  This means that they do NOT get hoisted.
    - aka Fat Arrow Functions
    - NOT declarations
    - Do NOT get hoisted.
?  There are two types of arrow functions:  Concise Body and Block Body.  A return is automatic with a concise but not with a block body.     
    - Two Types:
        - Concise Body - Return is automatic
        - Block Body - Return is NOT automatic
*/

//! CONCISE BODY
// speak('dog'); // <- error
let speak = (name) => console.log(`The ${name} goes woof!`);
speak('dog');

//! w Return
let firstName = 'Eric';
let lastName = 'Winebrenner'

let concatName = (first, last) => `${first} ${last}`;
let fullName = concatName(firstName, lastName);
console.log(fullName);

//! BLOCK BODY
let speakAgain = name => {
    console.log(`The ${name} goes woof`);
}

speakAgain('dog');

let concat = (first, last) => {
    return `${first} ${last}`
}

let newFullName = concat(firstName, lastName);
console.log(newFullName);

let x = 1;
let y = 2;

let sum = (num1, num2) => {
    // num1 + num2; //<- needs to be retuned otherwise we get an undefined.
    return num1 + num2;
}

let returnedValue = sum(x, y);
console.log(returnedValue);

//! ASSIGNMENTS:
/*
    - Repls: 1.1 & 1.2
*/