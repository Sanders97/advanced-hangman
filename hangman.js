// requires the npm package "inquirer" from npm
var inquirer = require('inquirer');
// imports words.js into the main file
var words = require('./word.js');
// imports letter.js into the main file
var letterCheck = require('./letter.js');


prompt.start();

inquirer.prompt([{
        name: "letter",
        type: "text",
        message: "Please enter a letter",
        }
        ]).then(function(letterInput){
        var letter = letterInput.letter;
        myWord.findLetter(letter);

        if (myWord.isComplete()){
            console.log("Correct! The word was " + myWord.toString() + "!");
            return;
        }
         console.log("------Next guess------");
        console.log("You have " + (maxGuess - myWord.userGuesses.length) + " guesses left");
        makeGuess();
        });
}

//Starts the game:
makeGuess();