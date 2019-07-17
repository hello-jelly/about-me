// import numbers from './is-correct';

const guessButton = document.getElementById('button');
const result = document.getElementById('result');
const numberInput = document.getElementById('number-input');
const grandPrize = document.getElementById('hi-five'); 
const gameLost = document.getElementById('you-lose');

guessButton.addEventListener('click', function(event) { 
  event.preventDefault();
    
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
})

// After 4 attempts if player loses:
  // if(numberGuess === 4) {
  //   gameLost.classList.remove('hidden');
  // }
// test(, (assert) => {
//   const result = makeVolume(volume);
//   assert.equal(result, expected);