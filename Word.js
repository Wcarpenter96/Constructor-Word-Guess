var Letter = require("./Letter");

var Word = function (word) {
    this.word = word;
    this.letters = [];
    for (let i = 0; i < this.word.length; i++)
        this.letters.push(new Letter(this.word[i]));
};
Word.prototype.print = function () {
    return this.letters.join(' ');
};
Word.prototype.checkWord = function (guess) {
    this.letters.forEach(letter => letter.checkLetter(guess));
};

module.exports = Word;
