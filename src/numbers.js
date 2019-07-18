// import numbers from './number-guess';

// What do I need to get from DOM?

const guessButton = document.getElementById('button');
const result = document.getElementById('result');
const numberInput = document.getElementById('number-input');
const hiFive = document.getElementById('hi-five'); 
const youLose = document.getElementById('you-lose');
let numberOfGuesses = 4;

guessButton.addEventListener('click', function(event) { 
  event.preventDefault();
  numberOfGuesses -= 1;
  let userGuess = parseInt(numberInput.value);
  
  if(userGuess < 3) {
    result.textContent = 'Oops, that\'s too low, guess again';
  }
  
  if(userGuess > 3) {
    result.textContent = 'Yikes, that\'s too high, guess again';
  }

  if(userGuess === 3) {
    result.textContent = 'CONGRATULATIONS!';
    hiFive.classList.remove('hidden');
    disableButton();
  }

  if(numberOfGuesses === 0) {
    result.textContent = '';
    youLose.classList.remove('hidden');
    disableButton();  
  }
});

function disableButton() {
  guessButton.disabled = true;
}

