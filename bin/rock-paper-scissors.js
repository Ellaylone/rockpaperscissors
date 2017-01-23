#!/usr/bin/env node

'use strict';
module.exports = function() {
    const readline = require('readline'),
          choises = [
              "scissors",
              "paper",
              "rock"
          ];

    let userChoice,
        userInput,
        pcChoice;

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function playGame () {
        rl.question('Your choice beatch[rock|paper|scissors]?', (answer) => {
            pcChoice = Math.floor(3 * Math.random());
            userInput = answer.toLowerCase();
            userChoice = choises.indexOf(userInput);

            if (userChoice < 0) {
                console.log('I don\'t understand.');
                rl.close();
            } else {
                switch (userChoice) {
                    case pcChoice:
                        console.log('draw');
                        break;
                    case pcChoice + 1:
                    case pcChoice - 2:
                        console.log('lose');
                        break;
                    case pcChoice - 1:
                    case pcChoice + 2:
                        console.log('win');
                        break;
                    default:
                        console.log('alarm! something went wrong');
                        break;
                }

                console.log(choises[userChoice], choises[pcChoice]);
            }
            playGame();
        });
    }

    playGame();
}
