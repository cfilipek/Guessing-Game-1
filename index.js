//Game variables
let mysteryNumber = Math.floor(Math.random() * 99);
let playersGuess = 0;
let guessesRemaining = 5;
let guessesMade = 0;
let gameWon = false;

//The input and output fields
let input = document.getElementById("input");
let output = document.getElementById("change-text");
let bottomText = document.getElementById("guess-number");

//The button
let button = document.querySelector("#guess");
let resetButton = document.querySelector("#reset");

//change syle of the cursor
button.style.cursor = "pointer";
resetButton.style.cursor = "pointer";
//add event listener
button.addEventListener('click', clickHandler, false);

resetButton.addEventListener('click', resetHandler, false);

window.addEventListener("keydown", keydownHandler, false);


function resetHandler(){
    guessesMade = 0;
    guessesRemaining = 5;
    output.innerHTML = `Can you guess the AI's number?<br>*it is a number between 1 - 100`;
    bottomText.innerHTML = `Remaining guesses: ${guessesRemaining}`;
    document.getElementById("header-img").src = "img/img-1-01.png";
    document.getElementById("colored-bkgrd").style.backgroundColor = "#fed3cb";
    mysteryNumber = Math.floor(Math.random() * 99);

}

function keydownHandler(event) {
    if(event.keyCode === 13){
        validateInput();
    }
}

function clickHandler () {
    validateInput();
}

function validateInput() {
    playersGuess = parseInt(input.value);

    if(isNaN(playersGuess)){
        output.innerHTML = "Please enter a number.<br>*it is a number between 1 - 100";
        document.getElementById("header-img").src = "img/number-03.png";
        document.getElementById("colored-bkgrd").style.backgroundColor = "#ddcae8";
        bottomText.innerHTML = `Press reset to play again!`
    } else {
        playGame();
    }

}


function playGame() {
    guessesRemaining --;
    guessesMade ++;
    bottomText.innerHTML = `Remaining guesses ${guessesRemaining}`;


    if(playersGuess > mysteryNumber){
        output.innerHTML = `Try guessing a lower number<br>*it is a number between 1 - 100`;
        document.getElementById("header-img").src = "img/low-05.png";
        document.getElementById("colored-bkgrd").style.backgroundColor = "#eae8ca";
        if(guessesRemaining < 1){
            endGame();
        }
    } else if (playersGuess < mysteryNumber){
        output.innerHTML = `Try guessing a higher number.<br>*it is a number between 1 - 100`;
        document.getElementById("header-img").src = "img/high-06.png";
        document.getElementById("colored-bkgrd").style.backgroundColor = "#badedb";
        if(guessesRemaining < 1){
            endGame();
        }
    } else {
        gameWon = true;
        endGame();
    }
}

function endGame() {
    if(gameWon){
        output.innerHTML = "Yes, it's " + mysteryNumber + "!" + "<br>" 
        + "It only took you " + guessesMade + " guesses.";
        bottomText.innerHTML = `Press reset to play again!`;
        document.getElementById("header-img").src = "img/winner-06.png";
        document.getElementById("colored-bkgrd").style.backgroundColor = "#cae8d9";
    } else {
        output.innerHTML = "No more guesses left!" + "<br>" +
        "The number was: " + mysteryNumber + ".";
        bottomText.innerHTML = `Press reset to play again!`
    }
}
