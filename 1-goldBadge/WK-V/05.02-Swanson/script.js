/*
* ************
! ASYNCHRONOUS PROGRAMMING
* ************

    ? Generally, JS is read and implemented line by line - this is known as synchronous programming.
        - synchronous programming is code read line by line.
    ? While fetching data from an outside source, like we do for an API, if JS didn't have the ability to run code asynchronously, it would have to run each line of code, wait for the response from the API and THEN finish running the rest of the code.
    ? Using asynchronous programming, like callbacks and promises (async/await), we are capable of running long network requests without halting the main thread.
        - Asynchronous programming allows a program to do more than one thing at a time.
        - Makes it possible to run long-running actions without stopping the program to wait for a response.
    
    ? Async Programming allows our code to continue to run while we're waiting on a response from an API  Once that fetch has finished retrieving the data, it then presents us with that data without having to wait on any other process.

* *** Have 07.01 open for possible examples from jsLessons-ew * 

* ************
! API
* ************
? What is an API?
    - API: Application Program Interface

    ? APIs just allow applications to communicate with one another.  The API is not the database or even the server, it is the code that allows us access point(s) to the server.
    ? Access points come in the form of endpoints, which directs us to different sets of data that we can access.
    - is NOT a database or server.  
    - Allows us access points to server.
        - comes in the form of ENDPOINTS.
        - endpoints directs us to sets of data

    ? REST API
    - REpresentational State Transfer
        - creates an object of requested data by the client, send values in response to user.   
    - Methods:
        CRUD
            Create (POST)
            Read (GET)
            Update (PUT)
            Delete (DELETE)
            
    ? We will dive headlong into this more within Blue Badge
*/
//* ****************************************************

let baseURL = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';

//? Let's set our global information.  These will be variable that we want our functions to have access to.  But how can we dip into it exactly?  Let's look what our console can do for us.
console.log(document);
console.log(document.childNodes);
console.log(document.childNodes[1].childNodes);
//? These are just means of us using the console to help us navigate the object of our HTML.  We can utilize methods to help us target various aspects just like CSS.  We will utilize querySelector and getElementbyId to target our containers within our HTML.  


//! Global elements to target
let quoteContainer = document.querySelector('.quoteContainer');
let logo = document.getElementById('ronLogo');

//! Event Listener
//* create this after displaying the fetch.
logo.addEventListener('click', fetchQuote);

//* ****************************************************
/* 
! FETCH
? What is fetch doing for us?  Fetch is our most recent means of sending network requests.  Some of you may have heard AJAX, which stands for Asynchronous JavaScript And XML, but we no longer have to use XML and we now have more updated ways to do so.  

let promise = fetch(url, [options])

? We have a promise that is returned by our fetch method.  This resolves with an object of the built-in Response class as soon as the server responds with headers.  The Promise is returned successful or unsuccessful depending on the HTTP-requests.  This could be determined based on networks status or if the site exists or not.
    - url: The URL we wish to access
    - options: optional parameters like methods, headers, etc.
    
    Promise:
    - an unknown value when created.
    - represents the eventual fulfilled value or rejection (error)
? A promise is always one of these states:
    - Always:
        - Pending: initial state, neither fulfilled or rejected
        - Fulfilled: the operation completed successfully
        - Rejected: Operation failed.

*/
//* ****************************************************

// fetch(baseURL)
//     .then(res => res.json())
//     .then(json => console.log(json))

//? Lets test it by invoking it:
// fetchQuote()  //? looks good -> now how about we "click something" by using an event listener?

//? But we don't want this to populate right away.  We want to interact with our page.  Let's wrap our fetch into a function.
//* Add Event Listener above

//! Fetch Function:
//* Use this first before the Ascyn/Await
// function fetchQuote() {
//     fetch(baseURL)
//         .then(res => res.json())
        // .then(json => console.log(json));
        // * after event listener:
        //? So we are console logging our information.  Let's pass that information into a new function that will help us display it to our DOM.
        // .then(json => displayQuote(json))
        // .catch(e => console.log(e));

 //! Remove logo (after button completion)
//  let logoContainer = document.getElementById('genQuote');
//  logoContainer.removeChild(logo);  // <- targeting global variable

// }

//* ****************************************************

/*
* *****************
! Aysnc/Await
* *****************
    ? Async/Await allow us to program using asynchronous requests, like a request to an API, in a "synchronous" manner - while still allowing other code to run in the background.  This helps us keep our site or application responsive, reducing waiting time for the user.

    - Allows us to program in a synchronous manner while still allowing code to run in the background.
    - Makes our sites as responsive as possible.

    ? We can make a normal function into an asynchronous function.  This allows us to unlock the "await" capability.
    - Async keyword can be used on a normal function.
        - Async used at the beginning of the function declaration.  
    - Can use await keyword

    ex: 
        async function myFn() {
            await...
        }
    
    ? Lets turn our current fetch into an async/await
*/
//* ****************************************************

//! Async/Await: 

async function fetchQuote() {

    const response = await fetch(baseURL); 
    //? our variable response won't have a value until the promise is returned.
    // console.log(response)
    const json = await response.json();
    //? our variable json won't have a value until response has been fulfilled.
    // console.log('ASYNC/AWAIT:', json);
    displayQuote(json);

}

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
   let logoContainer = document.getElementById('genQuote');
//    console.log(logoContainer.firstElementChild);

    //! Remove Logo
    logoContainer.firstElementChild != null ? 
    logoContainer.removeChild(logo) : // <- targeting global variable
    null;
    

    //! Set Elements:
    let quoteBy = document.createElement('p');
    quoteBy.className = 'quoteBy';
    quoteBy.innerText = '- Ron Swanson';
    quoteBy.style = 'font-size: 3rem; font-family: billionDreams; color: #3a2718;'  //* set styles after CSS injections

    //? Ok, So we are creating our p element and popping into our container as we have targeted.  Let's start injecting info from our fetch. 
    

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
        // fetchQuote(); 
        //?  Well... it's doing what we want... but adding more and more items.  May want to clean that up.  How about removing the previous elements first?

        //? let's target our container:
        quoteContainer.removeChild(quote);
        quoteContainer.removeChild(quoteBy);
        quoteContainer.removeChild(img);
        fetchQuote();
        //? perfect...

        //* Let's remove the logo (line 164)
    })
}

//* CSS if there is time.
