//! GLOBAL VARIABLES
const RandomURL = 'https://randomuser.me/api/';
const roboURL = 'https://robohash.org/'

const img = document.getElementById('imgID');
const cardInfo = document.getElementById('userInfo');
const infoBtn = document.getElementById('moreInfo');
const moreDisplay = document.querySelector('#moreInfoDisplay');
const addUser = document.getElementById('addUserInfo');
const addInfo = document.querySelector('.add_info');
const avatarImg = document.getElementById('avatar');

//! Base Display
infoBtn.style.display = 'none';
moreDisplay.style.display = 'none';
img.style.display = 'none'

let newUser = () => {
    // console.log('New user!')

    fetch(RandomURL)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(info => userID(info.results[0], roboURL))
        .catch(e => console.log(e));

}

const userID = (data, avatar) => {
    //! Clear Previous add_info data:
    while(addInfo.firstChild) {
        addInfo.removeChild(addInfo.firstChild);
    }

    while(avatarImg.firstChild) {
        avatarImg.removeChild(avatarImg.firstChild);
    }

    //! Set base display
    img.style.display = 'block';
    infoBtn.style.display = 'block';
    
    //! local variables
    let user = data;
    // console.log('User', user);
    // console.log('Avatar', avatar)
    
    let userAge = user.dob.age;
    let userDOB = new Date(user.dob.date);
    // console.log('ISO date', userDOB.toString);
    // console.log('String length', userDOB.toString().length);
    // console.log('UPdate:  ', userDOB.toString().substring(0,15));
    let regDate = new Date(user.registered.date).toString().substring(4,15);
    let buildAvatarURL = `${avatar}/${userAge}/?set=set4`;

    //! Inject info 
    //set IMG info
    img.src = user.picture.large;
    
    //set Card info
    cardInfo.innerHTML = `
    <h3>${user.name.title}. ${user.name.first} ${user.name.last}</h3>
    <p>DOB: ${userDOB.toString().substring(0,15)}</p> 
    <p>Age: ${userAge}</p>
    <p>${user.location.street.number} ${user.location.street.name}</p>
    <p>${user.location.city}, ${user.location.state}</p>
    `;
    
    //! More Info Display 

    //creating 
    let email = document.createElement('p');
    let registered = document.createElement('p');
    let avatarDisplay = document.createElement('img');

    //attributes
    email.innerText = `Email: ${data.email}`;
    registered.innerText = `Date Registered: ${regDate}`;
    avatarDisplay.src = buildAvatarURL;
    avatarDisplay.alt = `${user.name.first} ${user.name.last} avatar`;

    //place elements
    addUser.appendChild(email);
    addUser.appendChild(registered);
    avatarImg.appendChild(avatarDisplay);

}

const moreInfo = () => {
    moreDisplay.style.display = 'flex';
}
