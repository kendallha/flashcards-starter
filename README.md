# Flash Cards Game

## Abstract

The goal of this project was to use test driven development to complete a partially written flashcard app that is played through the terminal. Using mocha and chai for testing, I developed unit tests to drive the implementation of code. The result of the project is a thoroughly-tested, fully-functional flashcard study application.

The project plan for this assignment can be found [here](https://trello.com/b/l2bXpamL/flashcards-project-mod-2).


![flashcards gameplay gif](https://media.giphy.com/media/aL3mThjJmGJgxHXUTQ/giphy.gif)


## Installation / Setup

Clone down the repo from Github. Run the command `npm test` to install any dependencies. To view unit tests and their statuses, use the command `npm test`. 

To launch the flashcard game, run the command `node index.js`. The game will automatically display the first question; to answer enter the number that corresponds with your guess and press `enter`. After your result is displayed, hit press `enter` again to move on to the next question.

The round is finished when all of the cards have been shown. At this point, the player will be notified of the percent of questions they answered correctly. 

---
