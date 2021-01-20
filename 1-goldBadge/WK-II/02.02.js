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
!           - Notes
!               - literals.js
        - Projects
*/

/*
* ***********
! LITERALS
* ***********

    - Literal represent value in JS.  These are fixed values - not variables - that are literally provided in your code.

    ex: 
        (keyword)                (value)
            let    placeholder = 'text';
                    (variable)

        The value of 'text' is a value that we provide directly in our code.
    
    There are:
        - String literals
        - Numeric literals
        - Boolean literals
        - Object literals
        - Array literals
*/

//! STRING LITERAL
let city = 'Indianapolis';

//! NUMERIC LITERAL
let dieRoll = 6;

//! BOOLEAN LITERAL
let isOn = false;

//! OBJECT LITERAL
let movie = {
    title: 'Elf',
    rating: 'PG',
    release: 'November 7th 2003'
}

//! ARRAY LITERAL
let groceryList = ['apples', 'milk', 'bread', 'cheese'];

//? Because we explicityly added these values to our variables, these would be considered "literals".  Also known as "Hard Coded" values.  A quick way of stating that we provided the information instead of having it provided from an outside source.

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
!               - hoisting.js
        - Projects
*/

/*
* ***********
! HOISTING
* ***********

    ? What does hoisting mean and what does it do?  Consider opening up a book with multiple chapters.  One of the beginning pages may include an index that details various chapters and where to locate them.  We can "scan" this page to get an idea of what to expect but the information will need to be acquired later.
    
    ?  Hoisting does this in a similar fashion.  There are two general phases that happen when we run our code:
        - Creation Phase:  Any variable (var, let, const) and function in our code are stored to memory.
        - Execution Phase: Values are assigned to the variable and functions that were stored to memory during the create phase.
        
    ? What's on the left of our = is stored to memory.  What's on the right is assigned during execution.
           (create)  = (execute)
        let variable = value;
    
    ? Using that same book analogy, consider that we read from top to bottom.  We've taken all of our variables and function and popped them to the top.  JS is stating that they understand it exists like reading the index of a book.
    ? JS then reads line by line, top to bottom, in sequential order to execute what has been assigned.

*/

//? lets test this out:
// console.log(num);  

//?   Before we create a variable of 'num', lets console log to see our error:  It comes back as "num is not defined"

// let num = 12;

//?   When we try it again with a variable that exists below it: Our error returns as "Cannot access 'num' before initialization".  This is showing us that within our first test, JS didn't recoginize a variable that even existed; whereas the second time, it saw our variable but wasn't in proper sequence to run our request correctly.

/*
    1. num has been hoisted - JS recognized our variable
    2. JS read from top to bottom which means that when we called our console log, we haven't assigned num with a value yet (in this example: 12).
*/

//? We can also call functions before its declared because they are hoisted as well.
//* will need to comment out variable example above ^^^

sayHi();

function sayHi() {
    console.log('Hello!');
    let hi = 'Hola';
    console.log(hi);
}

//? Function expression, which is simply storing a function within a variable, are not hoisted.

// varFunc(); //? 'Cannot acces 'varFunc' before initialization.

let varFunc = function () {
    console.log('Anything?');
}

varFunc();

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
!               - scope.js
        - Projects
*/

/*
* ***********
! SCOPE
* ***********
? Scope is simply the hierachy of variables within our code.  We know them to be called:
    - Global Scope or Parent Scope
    - Local Scope or Child Scope
? We'll refer them as Global and Local for the most part.

*/

let global = 'Earth';

function scopeExample() {
    let local = 'Fishers';
    console.log(local);
    console.log(`${local} is but one of many cities on ${global}`)
}

scopeExample();
// console.log(local); //? Our ReferenceError notes that "local" is not defined.  

//! ASSIGNMENTS:
/*
    - WK 3 VIDEOS
*/