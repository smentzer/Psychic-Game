
// computer genterates a letter
// user gets (x) guesses
//chances
//guesses so far...
// did the user guess the computers letter

//--------- variables
var wins = 0;
var losses = 0;
var startingGuesses = 10;
var guessesLeft = startingGuesses;
var guessesSoFar = []; // push users choices
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from


//---------functions
// computer makes choice    
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("computer guess: " + computerGuess);

// user makes choice 
document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    console.log("user guess: " + userGuess);
    if (!computerChoices.includes(userGuess)) {
        alert("Press a valid key")
       return;    
    } 

// determines the outcome
if (userGuess === computerGuess) {
    wins++;
     computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("computer guess: " + computerGuess);
    guessesSoFar = [];
    alert("you did it, play again?")
}
else if (userGuess !== computerGuess) {
    // alert("Try Again");
    guessesLeft--;
    console.log("Guess left: " + guessesLeft);
    guessesSoFar.push(" " + userGuess);
    
}
if (guessesLeft <= 0) {
    losses++;
    guessesLeft = startingGuesses;
    guessesSoFar = [];
    alert("wrong, try again.");
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("computer guess: " + computerGuess);
    
}




document.getElementById("wins-text").innerHTML = "Wins: " + wins;
document.getElementById("losses-text").innerHTML = "Losses: " + losses;
document.getElementById("guessesLeft-text").innerHTML = "Guesses Left: " + guessesLeft;
document.getElementById("lettersGuessed-text").innerHTML = "Guesses so Far: " + guessesSoFar;

}

//functions do something. please. 


