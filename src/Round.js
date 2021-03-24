const Turn = require("./Turn");

class Round {
    constructor(deck, cardNumber) {
        this.deck = deck;
        this.turns = 0;
        this.currentCard = this.deck.cards[0];
        this.incorrectGuesses = [];
        this.correctGuesses = [];
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(guess) {
        let turn = new Turn(guess, this.currentCard);
        this.turns++;
        this.currentCard = this.deck.cards[this.turns];
        turn.evaluateGuess();
        if (turn.correct) {
            this.correctGuesses.push(this.deck.cards.id);
        } else {
            this.incorrectGuesses.push(this.deck.cards.id);
        }
        turn.giveFeedback();
    }

    calculatePercentCorrect() {
        console.log(this.correctGuesses.length);
        console.log(this.turns);
        var percentCorrect = Math.round((this.correctGuesses.length / this.turns) * 100);
        return percentCorrect;
    }

    endRound() {
        var percentCorrect = this.calculatePercentCorrect();
        console.log(`** Round over! ** You answered ${percentCorrect}% of the questions correctly!`);
        return `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`;
    }
}

module.exports = Round;