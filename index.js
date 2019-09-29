const inquirer = require("inquirer");
const chalk = require('chalk');
const Word = require("./Word.js");

var wordChoice = ["miles davis", "bill evans", "john coltrane", "duke ellington",
    "charlie parker", "dizzy gillespie", "herbie hancock", "thelonius monk",
    "billie holiday", "count basie", "ella fitzgerald", "wynton marsalis",
    "benny goodman", "chick corea", "chet baker", "art blakey",
    "oscar peterson", "ray charles", "frank sinatra", "stan getz",
    "louis armstrong", "buddy rich", "keith jarrett"];

var Hints = ["He made his professional debut as a member of saxophonist Charlie Parker's bebop quintet from 1944 to 1948",
    "He played in a trio with Scott LaFaro and Paul Motian",
    "He received a Pulitzer Prize in 2007",
    "He gained a national profile through the Cotton Club in Harlem",
    "A blazingly fast bebop virtuoso",
    "He formed the bebop six",
    "He started his career with Donald Byrd",
    "He is the second-most-recorded jazz composer of all time",
    "A well-known pioneer of both jazz and pop singing",
    "His orchestra was first recorded in 1936",
    "This singer won fourteen Grammy Awards",
    "He received an honorary degree from Kenyon College in 2019",
    "The King of Swing",
    "He was known for his crossover jazz fusion style",
    "He made his acting debut in the film Hell's Horizon",
    "He was the drummer for Fletcher Henderson's and Billy Eckstine's big bands",
    "He taught piano and improvisation in Toronto, Canada",
    "He put out two country albums in 1962",
    "He has sold more than 150 million records worldwide",
    "The Sound",
    "He formed the hot five in 1925",
    "He was a broadway star at only four years old",
    "This pianist was heavily influenced by Western classical music"]

var newRound = function () {
    console.log('');
    var tries = 5;
    var randInt = Math.floor(Math.random() * wordChoice.length);
    word = new Word(wordChoice[randInt].toUpperCase());
    hint = Hints[randInt];
    word.checkWord(' ');
    console.log(`Hint: ${hint}`);
    console.log(word.print());

    var Guess = function () {
        console.log('');
        var hasWon = function () {
            var won = true;
            word.print().split('').forEach(letter => {
                if (!word.checkWord(letter))
                    won = false;
            });
            return won;
        }
        var playAgain = function () {
            console.log('');
            inquirer.prompt([
                {
                    type: "confirm",
                    name: "playAgain",
                    message: "Play Again?"
                }
            ]).then(function (answer) {
                if (answer.playAgain) newRound();
                else console.log('Thanks for playing!')
            });
        }
        if (hasWon()) {
            console.log('Congrats, you named that cat!');
            playAgain();
        }
        else if (tries === 0) {
            console.log('You lose!');
            console.log(`The cat was ${word.word}`);
            playAgain();
        } else {
            inquirer.prompt([
                {
                    name: "letter",
                    message: "Guess a letter!"
                }
            ]).then(function (guess) {
                letter = guess.letter.toUpperCase();
                word.checkWord(letter);
                console.log(word.print());
                console.log('');
                if (word.checkWord(letter))
                    console.log('CORRECT!')
                else {
                    console.log('INCORRECT!');
                    tries--;
                    console.log(`${tries} guesses remaining!`);
                }
                Guess();
            });
        }
    }
    Guess();
}
console.log('');
console.log('Welcome to Name That Cat!');
console.log('-------------------------');
newRound();