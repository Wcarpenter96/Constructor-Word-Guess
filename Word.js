const Letter = require("./Letter.js");

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
    correct = false;
    this.letters.forEach(letter => {
        letter.checkLetter(guess);
        if (letter.checkLetter(guess))
            correct = true;
    });
    return correct;
};

module.exports = Word;

var world = new Word('hello world');
console.log(world.checkWord('z'));