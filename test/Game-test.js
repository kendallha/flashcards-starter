const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const { expect } = require('chai');

describe ('Game', function() {
  let game;
  
  beforeEach(function() {
    game = new Game();
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