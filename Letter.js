const Letter = function (char) {
    this.char = char;
    this.guessed = false;
};
Letter.prototype.toString = function () {
    if (this.guessed) return this.char;
    else return '_';
};
Letter.prototype.checkLetter = function (guess) {
    var correct = false;
    if (guess === this.char) {
        this.guessed = true;
        correct = true;
    }
    return correct;
};

module.exports = Letter;
