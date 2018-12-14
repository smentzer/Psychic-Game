
// computer genterates a letter
// user gets (x) guesses
//chances
//guesses so far...
// did the user guess the computers letter

//--------- variables
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = []; // push users choices
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from


//---------functions
 // computer makes choice    
 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// user makes choice 
document.onkeyup = function() {
    var usersGuess = event.key
    console.log(userGuess);
}
 // determines the outcome
 if ((userGuess === computerGuess)) {
     win++;
 }
else {
    losses++
}

// functions do something 