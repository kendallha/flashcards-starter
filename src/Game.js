const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
  }

  start() {
    this.cards = data.map(item => let card = new Card(item.id, item.question, item.answers, item.correctAnswer));
    this.deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion();
  }
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;