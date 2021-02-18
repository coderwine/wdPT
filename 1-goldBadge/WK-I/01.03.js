/*
    ! Static Layout 
        - Go over the Static Layout assignment
            - choose from listed sites
            - HTML/CSS to recreate (no JS required)
            - Buttons MUST open to a blank tab
            - Any links must go to that section (ie: contact -> contact)
            - Deployed to Github Pages
            - If the site utilizes animation, it should be in your page.
            - Must use Grid or Flexbox on at least 1 section
            - Does NOT need to be responsive.
            - Must be at least 2x the view height.

    wd<CURRENT CLASS>
        - 0-day01 (prework)
        - 1-jsFundamentals (module work)
        - inClass_Notes (REPO)
!       - projects
!           - staticLayout
!               -index.html (etc)

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
!           - Challenges
!               - 01.longestName.js
        - projects
*/


//! CHALLENGE 1:

//* Post levels within Slack - Instructor Code

/* BRONZE

Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.

*/

//* Approx 10 mins
let myName = 'Eric';
let friend = 'Jerome';

console.log(myName.length);
console.log(friend.length);

/* SILVER

Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 

Example Result: My name is longer than Adam's.

*/

//* 10 minutes 
if(myName.length > friend.length) {
    console.log(`My name is longer than ${friend}'s.`)
} else if(myName.length < friend.length) {
    console.log(`${friend}'s name is longer than mine.`);
} else {
    console.log(`Both ${friend}'s and my name are the same length.`);
}

/* GOLD

In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!

*/

//* 10 minutes
if(myName.length > friend.length) {
    let diff = myName.length - friend.length;
    console.log(`My name is longer than ${friend}'s by ${diff} letters.`);
} else if(myName.length < friend.length) {
    let diff = friend.length - myName.length;
    console.log(`${friend}'s name is longer than mine by ${diff} letters.`);
} else {
    console.log(`Both ${friend}'s and my name are the same length.`);
}

//* Pull back into main room / solve with class


//! CHALLENGE 2: Types

/*
* ****************
! FOLDER/FILE STRUCTURE
* ****************
    wd<CURRENT CLASS>
        - 0-day01 (prework)
        - 1-jsFundamentals (module work)
        - inClass_Notes (REPO)
            - HTML Lesson
*           - Challenges
                - 01.longestName.js
!               - 02.types.js
        - projects
*/

/* BRONZE

Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 
*/

let show = {
    title: "IT Crowd",
    start: 2006,
    TVseries: true,
    cast: {
        genre: 'Comedy',
        rating: 'TV-14'
    }
}

console.log(typeof show.title);
console.log(show.title);

/* SILVER

Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'

*/

let value = typeof show.title;

if(value === 'string') {
    console.log('This value is a string');
} else if( value === 'number') {
    console.log('This value is a number');
} else if(value === 'boolean') {
    console.log('This value is a boolean');
} else if(value === 'object') {
    console.log('This value is an object');
} else {
    console.log('What are you?!');
}

/*
* ***************
! GIT LESSON
* ***************

    - dir to see what directory you're currently in
    - cd into wd<CURRENT CLASS#>

    Folder structure should be:
        wd<CURRENT CLASS>
        - 0-day01 (prework)
        - 1-jsFundamentals (module work)
        - inClass_Notes  //! <------ GIT REPO HERE

    GITHUB
        - signup/signin to github
        - create a new repository called 'wd<CURRENT CLASS#>'-Notes
*/

/*
    In CMD/Powershell:
        git init  <---- To start a repo 
        git status
        git add .
        git commit -m "message"

        NOTE: The first time you try to commit, you should see the following message appear:
            git config --global user.name "John Doe" <--- your GitHub username
            git config --global user.email johndoe@example.com <--- email associated with your GitHub account

        git remote add origin //* PASTE REPO HERE
        git push origin master OR git push origin main
*/

//! Assignment:  WK II Videos