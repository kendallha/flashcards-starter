class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
    this.correct;
  }

  returnGuess = () => this.guess;
  
  returnCard = () => this.currentCard;

  evaluateGuess = () => {
    if (this.guess === this.currentCard.correctAnswer) {
      this.correct = true;
      return true;
    } else {
      this.correct = false;
      return false;
    }
  }

  giveFeedback = () => {
    if (this.guess === this.currentCard.correctAnswer) {
      this.correct = true;
      return 'correct!';
    } else {
      this.correct = false;
      return 'incorrect!';
    }
  }
}

module.exports = Turn;