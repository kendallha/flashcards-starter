const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let card;
  let turn;

  beforeEach(function() {
    card = new Card(1, 'What data type is true/false?', ['boolean', 'array',    'string'], 'boolean');
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
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('should return the current card', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should determine if a guess is true', function() {
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should determine if a guess is false', function() {
    turn = new Turn('string', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should tell the user if their guess is correct', function() {
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should tell the user if their guess is incorrect', function() {
    turn = new Turn('string', card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
})