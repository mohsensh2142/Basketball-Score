let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
console.log(typeof homeScore.innerText); // The inner text is a string
let homeCount = 0; // Since the inner text is a string, we need a create a separate variable for the count so that it is a number
let guestCount = 0;


function addOne(){
    homeCount++;
    homeScore.innerText = homeCount;
}

function addTwo(){
    homeCount += 2;
    homeScore.innerText = homeCount;
}

function addThree(){
    homeCount += 3;
    homeScore.innerText = homeCount;
}

function addOneGuest(){
    guestCount++;
    guestScore.innerText = guestCount;
}

function addTwoGuest(){
    guestCount += 2;
    guestScore.innerText = guestCount;
}

function addThreeGuest(){
    guestCount += 3;
    guestScore.innerText = guestCount;
}

// RESET BUTTON

function reset(){
    homeCount = 0;
    guestCount = 0;
    guestScore.innerText = homeCount;
    homeScore.innerText = guestCount;
}