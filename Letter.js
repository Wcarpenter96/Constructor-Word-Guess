var Letter = function(char,guess) {
    this.char = char;
    this.guess = guess;
    this.guessed = false;
  };
  Letter.prototype.hasGuessed = function() {
        if (this.guessed) return this.char;
        else return '_';
  };
  Letter.prototype.checkGuess = function() {
        if (this.guess === this.char) guessed = true;
  };
  module.exports = Letter;
   