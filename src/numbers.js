// import numbers from './number-guess';

// What do I need to get from DOM?

const guessButton = document.getElementById('button');
const result = document.getElementById('result');
const numberInput = document.getElementById('number-input');
const grandPrize = document.getElementById('hi-five'); 
const gameLost = document.getElementById('you-lose');
let numberGuess = 4;

guessButton.addEventListener('click', function(event) { 
  event.preventDefault();
  numberGuess -= 1;  
  let guessNumber = parseInt(numberInput.value);
  
  if(guessNumber < 3) {
    result.textContent = 'Oops, that\'s too low, guess again';
  }
  
  if(guessNumber > 3) {
    result.textContent = 'Yikes, that\'s too high, guess again';
  }

  if(guessNumber === 3) {
    result.textContent = 'CONGRATULATIONS!';
    grandPrize.classList.remove('hidden');
  }

  if(numberGuess === 0) {
    result.textContent = '';
    gameLost.classList.remove('hidden');
  }
});