const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function() {
    let round;
    let card1;
    let card2;
    let card3;
    let deck;

    beforeEach(function() {
        card1 = new Card(1, 'Which of the following is not an array prototype method?', ['array.filter', 'array.map', 'array.extrapolate'], 'array.extrapolate');
        card2 = new Card(2, 'What is the index value of the first element in an array?', ['1', '0', 'null'], '0');
        card3 = new Card(3, 'Which of these is a complex data type in JS?', ['boolean', 'object', 'string'], 'object');

        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
    });

    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function() {
        expect(round).to.be.an.instanceOf(Round);
    });

    it('should have a current card that starts as the first card in the deck', function() {
        expect(round.currentCard).to.equal(deck[0]);
    });

    it('should be able to return the current card', function() {
        expect(round.returnCurrentCard()).to.equal(round.currentCard);
    });

    it('should create a new turn instance when a turn is taken', function() {
        expect(round.takeTurn()).to.equal.
    })


})



