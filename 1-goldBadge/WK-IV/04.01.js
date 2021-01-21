/*
    - Assign API Project #1
    - Whiteboarding

    LAB TIME
        - be working on one of the items below:
            - portfolio
                - wireframing if you haven't started
            - week 4 videos
            - API project #1
            - studying/practicing for Whiteboard Assessments 
                - 4 practice challenges below
                    - break into small groups (divide challenges)
*/

/*
    CHALLENGE #1

        - Write a function that accepts two names as parameters, and then prints the full name to the console.
*/

// TRADITIONAL FUNCTION
function greeting(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}`);
}

greeting('Michael', 'Scott');

// CONCISE BODY ARROW FUNCTION
let greeting = ((firstName, lastName) => console.log(`Hello, ${firstName} ${lastName}`));

greeting('Michael', 'Scott');

// BLOCK BODY ARROW FUNCTION
let greeting = ((firstName, lastName) => {
    console.log(`Hello, ${firstName} ${lastName}`);
})

greeting('Michael', 'Scott');

/*
    - CHALLENGE #2

        - Write a program that prints all numbers from 0-100
            - for multiples of 6, instead of the number, print 'Fizz'
            - for multiples of 8, instead of the number, print 'Buzz'
            - for multiples of 6 AND 8, instead of the number, print 'Fizz Buzz'
*/

for (let i = 0; i <= 100; i++) {
    if (i % 6 === 0 && i % 8 === 0) {
        console.log('Fizz Buzz');
    } else if (i % 6 === 0) {
        console.log('Fizz');
    } else if (i % 8 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

/*
    - CHALLENGE #3

        - Write a function called findPerimeter() that accepts 2 parameters called: length, width.
            - The function should return an interpolated string of 'True: the perimeter is ___' if the perimeter is over 20
            - the function should return an interpolated string of 'False: the perimeter is ___' if the perimeter is under 20

            HINT: P = x + x + y + y
                  P = 2x + 2y
                  P = 2(x + y)
*/

// TRADITIONAL FUNCTION
function findPerimeter(x, y) {
    let perimeter;
    if (x * 2 + y * 2 > 20) {
        perimeter = x * 2 + y * 2;
        return `True: the perimeter is ${perimeter}`;
    } else {
        perimeter = x * 2 + y * 2;
        return `False: the perimeter is ${perimeter}`;
    }
}

let P = findPerimeter(7, 6);
console.log(P);

// CONCISE BODY ARROW FUNCTION
let perimeter;
let findPerimeter = ((x, y) => (x * 2 + y * 2 > 20) ? (perimeter = x * 2 + y * 2, isGreater(perimeter)) : (x * 2 + y * 2 < 20) ? (perimeter = x * 2 + y * 2, isLess(perimeter)) : console.log('Invalid'))

let isGreater = p => console.log(`True: the perimeter is ${p}`);
let isLess = p => console.log(`False: the perimeter is ${p}`);

findPerimeter(3, 4);

// BLOCK BODY ARROW FUNCTION
let findPerimeter = (length, width) => {
    let perimeter = (length * 2) + (width * 2);
    return (perimeter > 20) ? `True: the perimeter is ${perimeter}`
        : `False: the perimeter is ${perimeter}`;

}
let result = findPerimeter(5, 3);
console.log(result);

/*
    - CHALLENGE #4

        - Create an object literal called library.
            - the library object will contain 3 properties: name, address, sections
                - name and address will both hold values that are strings. You can fabricate the information.
                - sections will be an object that will store a property called collections, which is an array of more objects. You should include at least 2 objects inside the collections array.
                    - the objects stored in the collections array will hold properties of classification, count, and aisle. 
                        - both the classification and aisle properties should hold strings as values, and count should hold a value that is a number.

*/

let library = {
    name: 'Indianapolis Public Library',
    address: '123 Downtown St',
    sections: {
        collections: [{
            classification: 'Periodical',
            isle: 'A',
            count: 479
        }, {
            classification: 'Reference',
            isle: 'B',
            count: 1002
        }]
    }
}

console.log(library['sections']['collections'][0]['classification']);


for(x = 1; x <= 100; x++) {
    console.log(fizzBuzzFunc(x));
}

let fizzBuzzFunc = (x) => {
    if(x % 3 == 0 && x % 5 == 0) {
        console.log('fizz buzz');
    } else if (x % 3 == 0) {
        console.log('fizz');
    } else if (x % 5 == 0) {
        console.log('buzz');
    }
}


/*
    CHALLENGE #1

        - Write a function that accepts two names as parameters, and then prints the full name to the console.
*/

/*
    - CHALLENGE #2

        - Write a program that prints all numbers from 0-100
            - for multiples of 6, instead of the number, print 'Fizz'
            - for multiples of 8, instead of the number, print 'Buzz'
            - for multiples of 6 AND 8, instead of the number, print 'Fizz Buzz'
*/

/*
    - CHALLENGE #3

        - Write a function called findPerimeter() that accepts 2 parameters called: length, width.
            - The function should return an interpolated string of 'True: the perimeter is ___' if the perimeter is over 20
            - the function should return an interpolated string of 'False: the perimeter is ___' if the perimeter is under 20

            HINT: P = x + x + y + y
                  P = 2x + 2y
                  P = 2(x + y)
*/

/*
    - CHALLENGE #4

        - Create an object literal called library.
            - the library object will contain 3 properties: name, address, sections
                - name and address will both hold values that are strings. You can fabricate the information.
                - sections will be an object that will store a property called collections, which is an array of more objects. You should include at least 2 objects inside the collections array.
                    - the objects stored in the collections array will hold properties of classification, count, and aisle.
                        - both the classification and aisle properties should hold strings as values, and count should hold a value that is a number.

*/