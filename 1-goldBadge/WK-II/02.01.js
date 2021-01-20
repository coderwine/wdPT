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
                - 01.longestName.js
                - 02.types.js
!               - 03.fizzBuzz.js
*/

//! FIZZ BUZZ (conditionals only)

/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

//* break into smaller groups - 30 MINUTES

// ELSE/IF

let FB = 15;

if (FB % 3 === 0 && FB % 5 === 0) {
    console.log('Fizz Buzz');
} else if (FB % 5 === 0) {
    console.log('Buzz');
} else if (FB % 3 === 0) {
    console.log('Fizz');
}


// SWITCH

// let FB = 30;

switch (true) {
    case (FB % 3 === 0 && FB % 5 === 0):
        console.log('Fizz Buzz');
        break;
    case (FB % 5 === 0):
        console.log('Buzz');
        break;
    case (FB % 3 === 0):
        console.log('Fizz');
        break;
}

// TERNARY

// FB = 48;

(FB % 3 === 0 && FB % 5 === 0) ? console.log('Fizz Buzz') : (FB % 5 === 0) ? console.log('Buzz') : (FB % 3 === 0) ? console.log('Fizz') : console.log(FB)

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
                - 01.longestName.js
                - 02.types.js
                - 03.fizzBuzz.js
!               - 04.forLoops.js
*/

//! FOR LOOPS - 45 MINUTES
//? Loops offer us a quick way to iterate over something repeatedly

//* 30 MINUTES / SOLO
//* Provide alphabet variable
/* BRONZE

    - Write a for loop that runs until it's reached the end of the alphabet array, and prints each letter to the console.

*/

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//* SOLUTION ***************BRONZE*****
for(i = 0; i < alphabet.length; i++){
    console.log(alphabet[i]);
}
//* ***********************************

/* SILVER

    - Write a conditional that is nested inside of the for loop that checks if the index of each character in the alphabet array is even or odd. If the index is even, console.log the letter. If the index is odd, console.log 'the index is an odd number'.

*/

//* SOLUTION ***************SILVER*****
for(i = 0; i < alphabet.length; i++){
    if(i % 2 === 0) {
        console.log('EVEN:',alphabet[i]);
    } else {
        console.log('ODD:',alphabet[i]);
    }
}
//* ***********************************

/* GOLD

    - Declare a globally scoped variable of arr that is initialized as an empty array. If the index of the character in the alphabet array is even, add that character to the variable of arr, and console.log arr. If the index is odd - using string interpolation - console.log 'the index ___ is an odd number'.

    - Use Google to search for an array method that allows you to add one or more elements to an array

*/

//* SOLUTION ***************GOLD******
let arr = [];

for(i = 0; i < alphabet.length; i++){
    if(i % 2 === 0) {
        arr.push(alphabet[i]);
        console.log(arr);
    } else {
        console.log(`The index ${i} is an odd number`);
    }
}
//* ***********************************

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
                - 01.longestName.js
                - 02.types.js
                - 03.fizzBuzz.js
                - 04.forLoops.js
!               - 05.forOfLoops.js
*/

//! FOR OF LOOPS - 45 MINUTES
/*
    - For Of Loops parse through an iterable list of numbers.  This makes them great for working within arrays.
    - Arrays contain what are known as iterable properties.  Each property, or value, in an array, each contains its' own index (the first item in an array has an index of 0, and so on)
*/
//          value
let arrName = ['one', 'two', 'three']
//Index:     0      1       2         


/*
* BRONZE

- Using a for of loop, console.log the name of each pie from the pies array using string interpolation.

*/

let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd']

/* 
* SILVER

- Nest a conditonal inside of the for of loop that checks if a single pie from the pies array is of the type 'fruit pie' - ie. apple pie is a fruit pie / chocolate peanut butter pie is not a fruit pie. Then, using string interpolation, console.log either 'the  __ pie is a fruit pie!' or 'the __ pie is not a fruit pie :('

- Use google to search for an array method that checks if an array includes a certain value

*/

/* 
* GOLD

- Have the conditional check if EACH pie from the pies array is of the type 'fruit pie'.

*/

//* SOLUTION ***************BRONZE*****
for(p of pies) {
    console.log(p)
}
//* ***********************************


//* SOLUTION ***************Silver*****
for (pie of pies) {
    if (pie.includes('apple')) {
        console.log(`${pie} pie is a fruit pie!`);
    } else {
        console.log(`${pie} pie is not a fruit pie :(`)
    }
};
//* ***********************************

//* SOLUTION ***************Gold*******
for(p of pies) {
    if(p.includes('apple') || p.includes('blueberry') || p.includes('peach') || p.includes('cherry')) {
        console.log(`${p} is a fruit pie.`)    
    } else {
        console.log(`${p} is not a fruit pie.`)
    }
}

//* OPTIONAL:

for(p of pies) {
    switch(true) {
        case p ==='apple' || p === 'blueberry' || p === 'peach' || p === 'cherry':
            console.log(`${p} is a fruit pie`)  ;
            break;
        default:
            console.log(`${p} is not a fruit pie`)
    }
        
}
//* ***********************************


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
                - 01.longestName.js
                - 02.types.js
                - 03.fizzBuzz.js
                - 04.forLoops.js
                - 05.forOfLoops.js
!               - 05.forInLoops.js
*/

//! FOR IN LOOPS - 45 MINUTES
/*
    - For In Loops count the neumerable properties in an object.
    - Objects contain what are known as enumerable properties - which just mean countable.  So although properties in an object contain an index like arrays, ther properties can be simply counted.

?   - Consider that we have a house as an object.  Our house, has many items within it, but the front door is locked.  We need a KEY so that we can get IN.  When thinking about what we could use for objects, think how they have keys for their values.  FOR IN loops help us get IN our objects.
*/

    let sampleObj = {
        key1: 'value',
        key2: 'value',
        key3: 'value',
    }

    console.log(Object.keys(sampleObj).length);

    // for(key of sampleObj){
    //     console.log(key) //error because obj. isn't iterable
    // }

/* 
* BRONZE

    - Using a for in loop, console.log the name of each character from the members key in the fellowshipOfTheRing object.

*/
let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}


/* 
* SILVER

    - Add a conditional to the for in loop that checks if the characters name does not begin with a vowel. Then, using string interpolation, console.log either '__'s name does not begin with a vowel' or '__'s name does begin with a vowel'.

*/

/* 
* GOLD

    - Declare a globally scoped variable of arr that is initialized as an empty array. If the characters name does not begin with a vowel, add that character to the new array, and then console.log the array.

*/


//* SOLUTION ***************BRONZE*****
for(m in fellowshipOfTheRing.members) {
    console.log(m);
}
//* ***********************************


//* SOLUTION ***************SILVER*****
for(m in fellowshipOfTheRing.members) {
    if(m[0] === 'A' || m[0] === 'E' || m[0] === 'I' || m[0] === 'O' || m[0] === 'U') {
        console.log(`${m} begins with a vowel`)
    } else { 
        console.log(`${m} doesn't begin with a vowel`)
    }
}
//* ***********************************

//* SOLUTION ***************GOLD*******
let fellowshipOfTheVowel = [];

for(m in fellowshipOfTheRing.members) {
    if(m[0] === 'A' || m[0] === 'E' || m[0] === 'I' || m[0] === 'O' || m[0] === 'U') {
        console.log(`${m} begins with a vowel`)
    } else { 
        fellowshipOfTheVowel.push(m);
    }
}

console.log(fellowshipOfTheVowel);

//* ***********************************




//! NO ASSIGNMENTS TO GIVE OUT


//* PROVIDE AT THE END OF CLASS
//! ***************************************************************
/* PLATINUM 
    
    Challenge: 04.forLoops.js
        - Convert the conditional into a ternary

*/



//* PLATINUM SOLUTIONS:

//! 04.forLoops.js
// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// let arr = [];

// for (let i = 0; i < alphabet.length; i++) {
//     (i % 2 === 0) ? (arr.push(alphabet[i]), console.log(arr)) : console.log(`the index ${i} is an odd number`);
// }
