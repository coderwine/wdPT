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
                - arrays.js
!               - objects.js
        - Projects
*/

/*
* ***********
! OBJECTS
* ***********
? Objects allow us to store various keyed collections or more complex entities.  

*/

//ex: 
let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: "Pilot"
            },
            {
                episode: 2,
                episodeName: "Diversity Day"
            },
            {
                episode: 3,
                episodeName: "Health Care"
            },
            {
                episode: 4,
                episodeName: "The Alliance"
            },
            {
                episode: 5,
                episodeName: "Basketball"
            },
            ]
        }
    },
    season2: {},
    season3: {}
};

console.log(netflix.season1.seasonInfo.episodeInfo[2].episodeName);

/*
! JSON OBJECTS
    - JSON stands for JavaScript Object Notation
    - derived from JavaScript Object Notation syntax, JSON format is text only.
    - Exists as a string.
        - useful when fetching data from a server.
        - needs to be covereted to a native JavaScript Object if we want to access the data.
    
    JSON Data Example: 
*       https://rickandmortyapi.com/api/character/

*       PASTE RAW DATA INTO: https://jsonformatter.org/
*/

/*
* ***************
! OBJECT BRACKET NOTATION/PROPERTY ACCESSORS
* ***************

? We access properties within our objects using accessors like dot notation and bracket notation.
    
    Property Accessors
        - Dot Notation
        - Bracket Notation

*/

let superHero = {};

//? We can set our keys and values using bracket notation.
superHero['name'] = 'Spider-Man';
superHero['alterEgo'] = 'Peter Parker';

console.log(superHero);
//? We can target specifics of what we created.
console.log(superHero['name'], superHero['alterEgo']);

/*
    - All keys in objects are strings even though they are not wrapped in quotes when represented within the object itself.

*/
//? We can see this by using the keys() method for our object.
let test = Object.keys(superHero);
console.log(test);
console.log(typeof test[0]);

//? Square brackets is good when we may not be able to use dot notation to dig through an object.  It's not common, but something that we are capable of doing and want to make sure that you are aware.

//? A big part of square bracket notation with an object is when spaces are involved with a key name.

let spacedObj = {
    "Spaces Here": true,
    noSpaces: true,
}

console.log(spacedObj.noSpaces);
//* try to write out for the first key and VSCode will correct.
console.log(spacedObj["Spaces Here"]);