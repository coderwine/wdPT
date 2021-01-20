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
                - arrowFunctions.js
!               - arrays.js
        - Projects
*/

/*
* ***********
! ARRAYS
* ***********
? We use arrays to store multiple values within a single array.  They are indexed, starting with 0.  This means that the first value we see within an array has an index of 0.

ex: 
    let array = [value, value, value];
    index pos:    0       1      2 
*/

//? How we target certain values within our array
let arr = ['first value', 'second value', 'third value'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

//? What if we don't know the length of our array or we are pulling from a data set that has a variety of array lengths?  

console.log(arr[arr.length - 1]);  //takes the total value length and subtracts 1 to find the last index position. 
//? arr.length tells us the total number of values within our array.  Understanding that we start at zero, we will need to subtract one to obtain the correct positioning.


//? We can create Array objects using an Array() constructor:
let test = new Array();
console.log(test);

let test2 = new Array(3);
console.log(test2)
console.log(test2.length);

test2[0] = 'New Value';
console.log(test2);

//?  When creating an Array using a constructor and passing a single number through it, you are creating an Array with an initial size.  However, passing different value types will create an Array that hold those elements.

let nums = Array(1,2,3,4,5);
console.log(nums);

let strings = Array('this','holds','strings');
console.log(strings);

//! METHODS
//? We can utilize methods to help us traverse, as well as mutate, the data that within our Arrays.
// - Methods are a way to pull out and/or manipulate data within our arrays.

//! forEach()
//? This method runs a function over each index of our arrays.  Think of this like looping over our array.

let boardGames = ['Catan', 'Zombicide', 'Ticket to Ride', 'Root', 'Pandemic'];

//Loop
for(i = 0; i < boardGames.length; i++) {
    console.log(boardGames[i]);
}
//Consice Body Arrow Function
boardGames.forEach(game => console.log(`Concise: ${game}`));

//Block Body Arrow Function
boardGames.forEach(game => {
    console.log(`Block: ${game}`)
});

//Anonymous Function
boardGames.forEach(function(game) {
    console.log(`Anon: ${game}`)
})

//! Various Methods:
// Array.length → returns the number of elements in the array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.length); // returns 5

// Array.push() → adds element to the end of the array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.push("salt");
console.log(shoppingList);

// Array.pop() → removes the last element in the array and returns that element.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.pop();
console.log(shoppingList);

// Array.unshift() → adds a new element at the beginning of the array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.unshift("salt");
console.log(shoppingList);

// Array.shift() → removes the first element in an array, and returns that element.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.shift();
console.log(shoppingList);

// Array.map() → transforms the elements in the original array by calling the given function once for each element in the array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.map(item => item.toUpperCase()));

// Array.filter() → creates a new array with only the elements that pass the test in a given function.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.filter(item => item.startsWith("l")));

// Array.find() → returns the first element in an array that passes a test given as a function.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.find(item => item.startsWith("l")));

// Array.reduce() → executes a given function for each value of the array and returns a single value.
let costs = [2.00, 3.00, 4.00, 13.00];
console.log(costs.reduce((total, cost) => total + cost));

// Array.includes() → determines whether an array has a specific element.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.includes("limes"));
console.log(shoppingList.includes("salt"));

// Array.indexOf() → search the array for a specific element and returns its first index. Returns -1 when element is not found
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"]
console.log(shoppingList.indexOf("lemons"));
console.log(shoppingList.indexOf("salt"));

// Array.findIndex() → returns the index of the first element in an array that passes the test in a given function. Returns -1 when element is not found
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.findIndex(item => item.startsWith("g")));

// Array.every() → checks if all elements in an array pass a test given as a function. If there is 1 element that returns a false value, the function returns false and does not check the rest of the elements
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.every(item => item.length > 1));

// Array.concat() → merge two or more arrays, and returns a new array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let anotherList = ["salt", "mint leaves", "olives"];
console.log(shoppingList.concat(anotherList));

// Array.slice() → selects a part of an array, and returns a new array. Selects the elements starting at the provided start argument, and ends at, but does not include, the provided end argument.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.slice(1, 3));

// Array.splice() → add/removes elements in an array and returns the removed elements. First argument takes in an integer that specifies at what index to add/remove elements. Second argument takes in the number of items to be removed. Optional third argument takes in the new elements to be added to the array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.splice(2, 1);
console.log(shoppingList);

shoppingList.splice(2, 1, "cherries");
console.log(shoppingList);

// Array.sort() → sorts the items in an array. The sort order can either be alphabetic or numeric, and either ascending or descending. By default, sort() orders the values as strings in alphabetical and ascending order. Can take in a compare function which indicates if you want to sort by ascending or descending.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.sort());

let costs = [3, 2, 13, 4];
console.log(costs.sort((a, b) => b - a));
//want to sort by descending order
console.log(costs.sort((a, b) => a - b));
//want to sort by ascending order

// Array.reverse() → reverses the order of the elements in an array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.reverse());

// Array.toString() → converts an array into a string.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.toString());

// Array.join() → converts the elements of an array into a string. Can accept an optional parameter, “separator”, which indicates how the elements will be separated. Default separator is a comma.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.join("! and "));

// Lastly, an ES6 feature: the spread operator. The spread operator, indicated by these 3 dots “…” expands the contents of the array and takes it out of the array structure.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(...shoppingList);

