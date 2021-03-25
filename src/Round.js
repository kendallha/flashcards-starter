const Turn = require("./Turn");

class Round {
    constructor(deck) {
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
        turn.evaluateGuess();
        if (turn.correct) {
            this.correctGuesses.push(this.deck.cards.id);
        } else {
            this.incorrectGuesses.push(this.deck.cards.id);
        }
        this.currentCard = this.deck.cards[this.turns];
        return turn.giveFeedback();
    }

    calculatePercentCorrect() {
        return Math.round((this.correctGuesses.length / this.turns) * 100);
    }

    endRound() {
        var percentCorrect = this.calculatePercentCorrect();
        console.log(`** Round over! ** You answered ${percentCorrect}% of the questions correctly!`);
        return `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`;
    }
}

module.exports = Round;