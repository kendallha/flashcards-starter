// const Deck = require('../src/Deck');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = this.deck.cards[0];
        this.turns = 0;
        this.incorrectGuesses = [];
        this.correctGuesses = [];
    }

    returnCurrentCard() {
        // console.log(this.deck.cards[0]);
        // console.log([this.currentCard][question]);
        // return [this.currentCard].question;
        // console.log(this.deck);
        console.log(this.currentCard);
        // return this.currentCard.question;
    }

}

module.exports = Round;