//! If you don't have it already, download the Extension "Better Comments".  This will color code some aspects of this file that may make it easier to read.
//* The purpose of this build is to dive a little bit deeper into a previous challenge to help walk through the problem solving methods.  This, by no means, is an Exactly-How-It's-Done method, but one to consider.  The aim is to try and simplify what may seem like a "big" problem so that we can seek the proper solution.  Hope this helps!

/*
! MAIN PROBLEM:

    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY

*/

//? As mentioned in class, we want to break apart what we are building.  In the challenge above, we are ultimately wanting our cosole log to respond depending on the value that is being passed through.  We are dynamically asking a question, or writing a set of code to ask a question and produce an answer or result.  In this case, we just want to see a console log, which is the environment where we, as developers, will do most of our testing.  Think of this current process as a "testing zone", not as a "live issue" that a potential user will be manipulating.  So, the first thing we want to do is:
// Create a variable named FB that takes numbers.

let FB = 5;
//? We set our variable and assigned its datatype as a number.  Easy enough, right?  Next!

// Write an ELSE/IF conditional that:
//? pause.  We are first noting what type of soltution we are seeking.  We want to check against a condition that will respond back with true or false.  We know with this statement that we are seeing to check against a few aspects.  We may want to verify how many ELSE/IFs we are possibly going to do.
// Print out ....
//? I see that we have 3 different results we are currently building upon.  If I am unsure how this syntax may be built out, perhaps I'll pop open a browser and see if anyone else has come across this issue.  In my preferred search engine (Google / Duck Duck Go / etc) I'll use the key phrase I'm seeking and include minor specifics.  

//! "else if + JS" - is what I searched.
//? With the links provided, I'll dip in them to see if any of them answers my question as to how an If/Else question works.  Here was one that could be helpful: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

//? This page helps explain the building blocks of what the syntax details:
/* 

    if (condition) {
        statements1
    } else {
        statements2
    }

*/
//? But how can we apply this to our particular problem?  Let's mirror exactly what the question states:  
// Write an ELSE/IF conditional that...

if () {
    // condition one "print"
} else if () {
    // condition two "print"
} else if () {
    // condition three "print"
} else {
    // our "catch" in case none of our statements are true
};

//? What's our next step?
// Prints out "Fizz" if the number is divisible by 3
//? There is a bit of understanding required as to what is happening within our conditional in order to properly utilize our information.  In this case, we need to understand that in order for a conditional to run, it needs to know that "something" is true.  We are looking at our variable FB.  Whenever FB is divisible by 3, we will print out (console.log) a response of "Fizz".  We can actually test this with a simple conditional instead of running it completely through an Else/If.

let FB = 3;

if (FB % 3 === 0) {
    console.log('Fizz');
}
//? We also need to understand how we ask our questions, or, in this case, to check with our condition.  Remember, our if conditional only responds when our statement is True.  If our question is: Is it divisible, how can we find out the process of doing this through JavaScript? Again, let's pull up our trusty search engine:

//! "divisible + JS" - is what I popped in Duck Duck Go.

//? Along with a few other sites (one that specifically asks the question of checking against the number 3), I found a tutorial on what Remainder/Modulus details.
// https://riptutorial.com/javascript/example/760/remainder---modulus----
//? Take a look at it and see what it's doing.  Perhaps simply reading over it can help us answer the question.  Remember, the specific question is:  Is FB divisible by 3?  Meaning, let makes sure that nothing is remaining.  So, we ask specifically:

/*
    When FB is divided by 3 does that strictly equal zero?
         FB       %       3             ===            0
*/

//* if you're practicing this out in your own IDE (integrated development environment - like VS Code), be sure to comment out the code above if you want it to run.  Or highlight what you are wanting to run specifically.
//? I would then change my variable to a value that I know for certain is NOT divisible by 3 and see if my code responds.  Getting no response here would be what we are expecting.

//? Moving on, we could very well do the same test with the next step:
// Prints out "Buzz" if the number is divisible by 5

let FB = 5;

if (FB % 5 === 0) {
    console.log('Buzz');
}

//? Now what if there are two checks?  What if FB is divisible by BOTH numbers as the next aspect is asking?
//? Here comes our trusty problem solver - the Whole Wide World!

//! "two conditions + JS" - is what I searched.

//? Side note:  You can include futher details.  I'm searching some quick things that pop in my head to see if something comes up.  If I'm not satisfied with the results displayed, I may include more of a description into what I'm seeking.

//? What pops up is a stack overflow link but I selected a link that seems more like an article that is explaining what I'm seeking:
// https://anjandutta.com/multiple-conditions-in-javascript-if-statement/

//? Using our same framework as the previous checks, let's build it up utilizing the AND syntax (&&).  Thanks internet!

let FB = 15;

if (FB % 5 === 0 && FB % 3 === 0) {
    console.log('Fizz Buzz');
}

//? We are asking two questions in order to hold a True value for our If Condition.  AND (&&) requires both questions to be true in order to provide a True value.  Our program is so very literal that we first ask, "Is FB divisible by 5 with no remainder?", it responds and then we follow it up with a "Is FB divisible by 3 with no remainder?"  Just because we ask if FB is divisible by 5 in that first question, our program will never assume that our next question is considering the same variables.  With all the power and amazing things that computers are capable of doing, we have to remember that they are still very stupid regarding intuition.  A hammer never assumes it's going to hit a nail, only strikes where we throw it.... that could be our finger.  Let's be sure with each swing, we aim for a nail.

//? Now our problem really is about putting these checks together.  
//? We walked through what is needed to build an ELSE/IF frame earlier.  Let's take that and inject what we have already tested.

//? We first need to understand what is happening.  The moment one of our conditions is true, the rest of our conditional is ignored.  Our program moves on.  What this means is that if our first condition is true, JS won't even consider anything after it.  So one problem that we may come across is that the value of 15 is both divisible by 3 and 5.  If we were to ask only if it is divisble by 3 without checking that it is ALSO divisible by 5, we will be given a true response.  So... perhaps we first check that if it is divisble by both, THEN individually.

let FB = 10;

if (FB % 3 === 0 && FB % 5 === 0) {
    console.log('Fizz Buzz');
} else if (FB % 3 === 0 ) {
    console.log('Fizz');
} else if (FB % 5 === 0 ) {
    console.log('Buzz');
} else {
    console.log(FB)
};

//? And with that, we've stepped through the process by evaluating small chunks.  We've paused to seek answers where we might not have felt comfortable and returned to our problem with the resource to help us respond to our challenge.  We want to be sure not to simply knee-jerk with the throw-away term of "Did you Google it?" but rather ask ourselves if we can find the solution?  Remember that one of the most important traits of learning how to "Code" is that it will change.  Updates will happen.  Other aspects will fall away with newer solutions.  Understanding how we can seek these answers will be one of the best tools we will have on our belts.