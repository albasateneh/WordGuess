// Global Variables
var gameWordsArr = ["bat", "witch", "candy", "pumpkin", 'dracula', 'frankenstein', 'ghoul'];
var lettersGuessed = [];
var blanksAndSuccesses = [];
var chosenWord = [];
var wrongLettersGuessed = [];
var lettersInChosenWord = [];
var index = []
var holdIndex = []
var remainingGuesses = 0;
var wins = 0;
var losses = 0;
var userGuess = ''
var randomWord = ''
var numBlanks = 0;

// Functions
function startGame() {
// Random Word Generator
randomWord = gameWordsArr[Math.floor(Math.random() * gameWordsArr.length)]
lettersInChosenWord = randomWord.split('');
numBlanks = lettersInChosenWord.length

//Reset
remainingGuesses = 13;
blanksAndSuccesses = [];
wrongLettersGuessed = [];

//Populate Blanks and successes with right number of blanks
for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push('-');
}

// Testing
console.log(randomWord)
console.log(lettersInChosenWord)
console.log(blanksAndSuccesses)

}

// Check Letter
function checkLetter(letter) {

    var letterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;

        }

    }

    if (letterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndSuccesses[i] = letter
                console.log(blanksAndSuccesses)

            }

        }

    }
    else {
        wrongLettersGuessed.push(letter);
        remainingGuesses --;
        console.log("Wrong Letters Guessed: " + wrongLettersGuessed)
        console.log("Remaining Guesses: " + remainingGuesses)
    }

}

function roundComplete() {
    
        if(lettersInChosenWord.toString() == blanksAndSuccesses.toString()) {
            wins ++
            console.log("Wins: " + wins)
            startGame();
        }else if (remainingGuesses == 0) {
            startGame()
            losses ++
            console.log("Losses: " + losses)
        }
    
}

startGame();

document.onkeyup = function (event) {
    var userGuess = event.key
    console.log(userGuess);
    checkLetter(userGuess)
    roundComplete();

}

