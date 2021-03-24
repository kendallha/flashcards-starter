const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
    let card;
    let turn;

    beforeEach(function() {
        card = new Card(1,'What data type is true/false?', ['boolean', 'array', 'string'], 'boolean');
        turn = new Turn('boolean', card);
    });

    it('should be a function', function() {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('should accept arguments for the user\'s guess and the current Card object', function() {
        expect(turn.guess).to.equal('boolean');
        expect(turn.currentCard).to.equal(card);
    });

    it('should return the user\'s guess', function() {
        turn.returnGuess();
        expect(turn.returnGuess()).to.equal(turn.guess);
    });

    it('should return the current card', function() {
        turn.returnCard();
        expect(turn.returnCard()).to.equal(card);
    });

    it('should determine if a guess is true', function() {
        turn.evaluateGuess();
        expect(turn.evaluateGuess()).to.equal(true);
    });

    it('should determine if a guess is false', function() {
        turn = new Turn('string', card);
        turn.evaluateGuess();
        expect(turn.evaluateGuess()).to.equal(false);
    });

    it('should tell the user if their guess is correct', function() {
        turn.giveFeedback();
        expect(turn.giveFeedback()).to.equal('correct!');
    });

    it('should tell the user if their guess is incorrect', function() {
        turn = new Turn('string', card);
        turn.giveFeedback();
        expect(turn.giveFeedback()).to.equal('incorrect!');
    });


})