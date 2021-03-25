const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const { expect } = require('chai');

describe ('Game', function() {
    let game;
    let round;
    let deck;
    let cards;

    beforeEach(function() {
        game = new Game();
        card1 = new Card(1, 'Which of the following is not an array prototype method?', ['array.filter', 'array.map', 'array.extrapolate'], 'array.extrapolate');
        card2 = new Card(2, 'What is the index value of the first element in an array?', ['1', '0', 'null'], '0');
        card3 = new Card(3, 'Which of these is a complex data type in JS?', ['boolean', 'object', 'string'], 'object');
        
        deck = new Deck([card1, card2, card3]);;
        round = new Round(deck);
        
    });

    it('should keep track of the current round', function() {
        game.start();
        expect(game.currentRound).to.be.an.instanceOf(Round);
    });

    it('should create new Cards', function() {
        game.start();
        expect(game.cards[0]).to.be.an.instanceOf(Card);
    });

    it('should create a new deck of Cards', function() {
        game.start();
        expect(game.deck).to.be.an.instanceOf(Deck);
    });

})