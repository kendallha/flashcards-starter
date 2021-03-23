const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
    let card1;
    let card2;
    let card3;
    let deck;

    beforeEach(function() {
        card1 = new Card(1, 'Which of the following is not an array prototype method?', ['array.filter', 'array.map', 'array.extrapolate'], 'array.extrapolate');
        card2 = new Card(2, 'What is the index value of the first element in an array?', ['1', '0', 'null'], '0');
        card3 = new Card(3, 'Which of these is a complex data type in JS?', ['boolean', 'object', 'string'], 'object');

        deck = new Deck([card1, card2, card3]);
    });

    it('should be a function', function() {
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of Deck', function() {
        expect(deck).to.be.an.instanceOf(Deck);
    });

    it('should accept an array of cards as an argument', function() {
        expect(deck.cards).to.deep.equal([card1, card2, card3]);
    });

    it('should be able to count the cards in the deck', function() {
        expect(deck.countCards()).to.equal(3);
    });
})