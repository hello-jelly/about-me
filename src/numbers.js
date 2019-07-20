import compareNumbers from './compare-numbers.js';

// What do I need to get from DOM?

const guessButton = document.getElementById('button');
const result = document.getElementById('result');
const numberInput = document.getElementById('number-input');
const hiFive = document.getElementById('hi-five'); 
const youLose = document.getElementById('you-lose');

let numberOfGuesses = 4;

guessButton.addEventListener('click', function(event) { 
  event.preventDefault();
  decrementGuesses();
  let userGuess = parseInt(numberInput.value);
  let result = compareNumbers(userGuess, 3);
  
  if(result === -1) {
    resultMessage('Oops, that\'s too low, guess again');
  }
  
  if(result === 1) {
    resultMessage('Yikes, that\'s too high, guess again');
  }

  if(result === 0) {
    winDisplay();
  }

  if(numberOfGuesses === 0) {
    loseDisplay();
  }
});

function disableButton() {
  guessButton.disabled = true;
}

function resultMessage(string) {
  result.textContent = string;
}

function winDisplay() {
  result.textContent = 'CONGRATULATIONS!';
  hiFive.classList.remove('hidden');
  disableButton();
}

function loseDisplay() {
  result.textContent = '';
  youLose.classList.remove('hidden');
  disableButton();
}

function decrementGuesses() {
  numberOfGuesses -= 1;
}