// Psychic Game JS

// Define counters
var wins = 0;
var losses = 0;
var guesses = 0;
computerLetter = null;

// Game letters
var gameLetters =
    ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Choose random computer letter
function chooseLetter() {
    
    // Select random number from gameLetters
    var charSelect = Math.floor(Math.random() * gameLetters.length);
    console.log(charSelect);

    // Assign computer game letter to random number
    computerLetter = gameLetters[charSelect];
    console.log(computerLetter);
}

// Update HTML with new values
function updateGame() {
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses").innerHTML = guesses;
}

chooseLetter();

// Listen for user letter, determine if they won or loss
document.onkeyup = function(event) {
        
    let letter = event.key.toLowerCase();

    // console.log(letter);
    
    if (letter === computerLetter) {
        wins++;
        guesses = 0;
        updateGame();
        chooseLetter();
    } else if (guesses < 9) {
        guesses++;
        updateGame();
    } else {
        guesses = 0;
        losses++;
        updateGame();
        chooseLetter();
    }
}

