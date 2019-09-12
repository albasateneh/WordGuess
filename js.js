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

var gameWordsArr = ["apple", "orange", "banana"];
var lettersGuessed = [];
var blanksAndSpaces = [];
var wrongLettersGuessed = [];
var remainingGuesses = 0;
var wins = 0;

var randomWord = gameWordsArr[Math.floor(Math.random() * gameWordsArr.length)]
console.log(randomWord)

// Functions
blanksAndSpaces.push(randomWord);


for (i = 0; i < blanksAndSpaces.length; i ++) {
    var split = blanksAndSpaces[i].split('');
    var str = split[i];
    var numbBlanks = str.replace
    
    console.log(split);
    console.log(numbBlanks)
  
    
}

/*for (i = 0; i < split.length; i ++) {
    var numbBlanks = split.length
    console.log(numbBlanks)
    var word = split[i].replace(split[i], '-')
   var newWord = word.replace(word, '-');
    console.log(word)
}
function strReplace(){
    var myStr = 'quick_brown_fox';
    var newStr = myStr.replace(myStr, "-");
    console.log(newStr)
}

strReplace()
*/


document.onkeyup = function(event) {
    var userGuess = event.key
    console.log(userGuess);
}

// Objects 
