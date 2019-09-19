// Word Guess Game

/*
Instructions

Use key events to listen for the letters that your players will type.


Display the following on the page:


Press any key to get started!


Wins: (# of times user guessed the word correctly).


If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.


As the user guesses the correct letters, reveal them: m a d o _ _ a.




Number of Guesses Remaining: (# of guesses remaining for the user).


Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).


After the user wins/loses the game should automatically choose another word and make the user play it.



Word Guess Game Bonuses

Play a sound or song when the user guesses their word correctly, like in our demo.
Write some stylish CSS rules to make a design that fits your game's theme.

HARD MODE: Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
Save your whole game and its properties in an object.
Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
Don't forget to place your global variables and functions above your object.

Remember: global variables, then objects, then calls.
- variable for words to guess
- slashes in place of letters
- variable for letters guessed
- change slashes into letter guessed
- Place for letters guessed to compare to word player is trying to guess
- Function for key press
- 
*/

// Global Variables

var gameWordsArr = ["bat", "witch", "candy", "pumpkin", 'dracula', 'frankenstein', 'ghoul'];
var lettersGuessed = [];
var blanksAndSuccesses = [];
var chosenWord = [];
var wrongLettersGuessed = [];
var numBlanks = 0;
var remainingGuesses = 0;
var wins = 0;
var userGuess = ''
var randomWord = gameWordsArr[Math.floor(Math.random() * gameWordsArr.length)]
console.log(randomWord)

// Functions

chosenWord.push(randomWord);


for (var i = 0; i < chosenWord.length; i ++) {
    var lettersInChosenWord = chosenWord[i].split('');
    
}

numBlanks = lettersInChosenWord
console.log(numBlanks)

for (var i = 0; i < numBlanks.length; i ++) {
    blanksAndSuccesses.push('-');
    
}

// Need to relate letter guessed to index of letter in numBlanks 
// and replace the Blank with correct letter at correspinding index


document.onkeyup = function(event) {
    var userGuess = event.key
    console.log(userGuess);
    
    for (var i = 0; i < numBlanks.length; i ++) {
        if (userGuess === numBlanks[i]) {
            console.log([i])
            var index = [i]
        }
        
    }
    console.log("console.log: " + index)
    console.log(blanksAndSuccesses)
}
