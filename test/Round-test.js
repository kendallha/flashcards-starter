const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
// const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function() {
    let round;
    let card1;
    let card2;
    let card3;
    let deck;
    let turn;

    beforeEach(function() {
        card1 = new Card(1, 'Which of the following is not an array prototype method?', ['array.filter', 'array.map', 'array.extrapolate'], 'array.extrapolate');
        card2 = new Card(2, 'What is the index value of the first element in an array?', ['1', '0', 'null'], '0');
        card3 = new Card(3, 'Which of these is a complex data type in JS?', ['boolean', 'object', 'string'], 'object');

        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
        turn = new Turn('array.filter', card1);
    });

    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function() {
        expect(round).to.be.an.instanceOf(Round);
    });

    it('should have a current card that starts as the first card in the deck', function() {
        expect(round.currentCard).to.deep.equal(round.deck.cards[0]);
    });

    it('should be able to return the current card', function() {
        expect(round.returnCurrentCard()).to.equal(round.currentCard);
    });

    it('should create a new turn instance when a turn is taken', function() {
        round.takeTurn('array.filer');
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('should update the turn counter if the guess is incorrect', function() {
        round.takeTurn('array.map');
        expect(round.turns).to.equal(1);
    });

    it('should update the turn counter if the guess is correct', function() {
        round.takeTurn('array.extrapolate');
        expect(round.turns).to.equal(1);
    });

    it('should update the current card to the next in the deck after a turn is taken', function() {
        round.takeTurn('array.map');
        expect(round.currentCard).to.deep.equal(round.deck.cards[1]);

        round.takeTurn('1');
        expect(round.currentCard).to.deep.equal(round.deck.cards[2]);
    });

    it.skip('should determine if a guess is correct', function() {
        round.takeTurn('array.extrapolate');
        expect(turn.correct).to.equal(true);
    });

    it.skip('should determine if a guess is incorrect', function() {
        round.takeTurn('array.map');
        expect(turn.correct).to.equal(false);
    });

    it('should record if an answer is correct', function() {
        round.takeTurn('array.extrapolate');
        expect(round.correctGuesses.length).to.deep.equal(1);
        expect(round.incorrectGuesses.length).to.deep.equal(0);
    });

    it('should record if an answer is incorrect', function() {
        round.takeTurn('array.filter');
        expect(round.incorrectGuesses.length).to.deep.equal(1);
        expect(round.correctGuesses.length).to.deep.equal(0);
    });

    it('should calculate the percentage of correct guesses', function() {
        round.takeTurn('array.extrapolate');
        round.takeTurn('0');
        round.takeTurn('string');
        round.calculatePercentCorrect();
        expect(round.calculatePercentCorrect()).to.equal(67);
   });

    it('should tell the user their percent correct when the round is over',function() {
        round.takeTurn('array.extrapolate');
        round.takeTurn('0');
        round.takeTurn('string');
        round.endRound();
        expect(round.endRound()).to.equal(`** Round over! ** You answered 67% of the questions correctly!`);
});


})



