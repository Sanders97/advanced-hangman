
var letterConstructor = require("./letter.js");

function word (value){
	this.value = value;
	this.letters = [];
	this.userGuess = "";
	for (var i = 0; i < letters.length; i++) {
		letters[i]
	}
};

word.prototype.isComplete = function(){
	for (var i = 0; i < this.letters.length; i++) {
		if (!this.letters[i].show) return false;
	}
	return true;
};

word.prototype.findLetter = function(letter){
	var lowerCaseLetter = letter.toLowerCase();

	if (this.userGuess.indexOf(toLowerCase) != -1){
		return "Duplicate";
	}
	// records the guesses and checks for repeat submissions
}
this.userGuess += lowerCaseLetter;

for (var i =0; i< this.letters.length; i++){
	if(this.letters[i].value.toLowerCase() == lowerCaseLetter){
		this.letters[i].show = true;
	}
};

word.prototype.toString =function() {
	var output = "";

	for (var i = 0; i < this.letters.length; i++){
		output += this.letters[i].printInfo();
	}
	return output;
};

exports.wordConstructor = word;