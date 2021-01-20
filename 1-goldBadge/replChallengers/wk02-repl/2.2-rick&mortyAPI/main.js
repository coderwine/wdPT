/*
    - Use the provided HTML, CSS, and JS files to fetch images of two separate characters from the Rick and Morty API. You will not need to edit/change anything in the HTML file, everything you need is already there.

    - Your fetch call to the specified endpoint is already defined in the script.js file. Finish coding the necessary promise resolvers for your fetch to access character information from the API.

    - Once you are seeing character information in the console, define a function that will be used to display the data. Your jsonified data from the API will need to be passed to this function.

    Inside the display function you will need to:
    1. Declare two variables used to store the separate character image links from the API.
    2. Grab each image element from the index.html file, and set the src to be the image link you stored in a variable during step 1.

    After you are seeing images of two different characters, use the attached style.css file to style each image with the following properties:
    1. Each image must have a border-radius
    2. Each image must have a border
    3. Each image must be centered
*/

fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(json => display(json))

function display(json) {
    console.log(json)
    let rick = json.results[0].image;
    let morty = json.results[1].image;
    document.getElementById('imageOne').src = rick;
    document.getElementById('imageTwo').src = morty;
}