let baseURL = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';

//! Global elements to target
let quoteContainer = document.querySelector('.quoteContainer');
let logo = document.getElementById('ronLogo');

//! Event Listener
//* create this after displaying the fetch.
logo.addEventListener('click', fetchQuote);


//! Fetch random quote:
// fetch(baseURL)
//     .then(res => res.json())
//     .then(json => console.log(json))
//? But we don't want this to populate right away.  We want to interact with our page.  Let's wrap our fect into a function.

function fetchQuote() {
    fetch(baseURL)
        .then(res => res.json())
        // .then(json => console.log(json));
        .then(json => displayQuote(json));

 //* **************************************
 //! Remove logo (after button completion)
 let logoContainer = document.getElementById('genQuote');
 logoContainer.removeChild(logo);

            //* Set font conditionals 
 //* **************************************
}

//? Lets test it by invoking it:
// fetchQuote()  //? looks good -> now how about we "click something" by using an event listener?

//! Displaying our Quote:
let displayQuote = data => {
    console.log(data);
    //? Ok!  We now see that our json data is being passed into our function.  Let's start changing some things!
    //?  The first thing to consider is what we are generating:  We will need to create our elements, apply properties to these elements and then set these elemnents where we want them.
    /*
        - Set Elements
        - Apply properties
        - Put them somewhere

    */
    
    //! Set Elements:
    let quoteBy = document.createElement('p');
    quoteBy.className = 'quoteBy';
    quoteBy.innerText = '- Ron Swanson';
    quoteBy.style = 'font-size: 3rem; font-family: billionDreams; color: #3a2718;'  //* set styles after CSS injections

    //? Ok, So we are creating our p element and popping into our container as we have targeted.  Let's start injecting info from our fetch. 
    //

    let quote = document.createElement('h1');
    quote.className = 'quote';
    // quote.innerText = `${data}`; //* show without bracket notation
    quote.innerText = `${data[0]}`;
    //? Using bracket notation, we're targeting the quote itself instead of the the array.  
    console.log(data[0].length)
    quote.style = 'font-family: pinewood; color: #3a2718;'; //* set styles after CSS injections
    //? Lets not forget to append our new elemnt.

    //* ************************************************
    //! SET THE FONT SIZE CHANGES AFTER APPENDING PORTION
    
    //?  Lets consider a way that we can manage how our information is being displayed.  Let's use a conditional so that if the quote is short or long, it displays nicely.
    //! Font Conditional

    if(data[0].length >= 50 && data[0].length <= 150) {
        quote.style.fontsize = '5rem';
    } else if (data[0].length < 50){
        quote.style.fontsize = '7rem';
    } else {
        quote.style.fontsize = '3.5rem';
    }
    //* *************************************************

    //? Lastly, let's make button to generate other quotes
    // let button = document.createElement('button');
    // button.innerText = 'Another Please';
    // button.className = 'reset';
    // button.style = 'margin: 0; margin-top: 4em;'
    //? And append...
    
    let img = document.createElement('img');
    img.src ='./assets/ron.png';
    img.alt = 'Ron Swanson'    
    img.style = 'height: 100px; width: auto;'
    //? And append...

    //! Appending:
    quoteContainer.appendChild(quote); //Order matters:  Swap these
    quoteContainer.appendChild(quoteBy);
    quoteContainer.appendChild(img);
    //? Now we have a button, let's make it actually do something:

    img.addEventListener('click', () => {
        //? We give it an annon function because it's a 'one-off' type of function.  We we click this, we want to fetch a new quote.
        // fetchQuote(); //?  Well... it's doing what we want... but adding more and more items.  May want to clean that up.  How about removing the previous elements first?

        //? let's target our container:
        quoteContainer.removeChild(quote);
        quoteContainer.removeChild(quoteBy);
        quoteContainer.removeChild(img);
        fetchQuote();
        //? perfect...

        //* Let's remove the logo (line 24)
    })
}
