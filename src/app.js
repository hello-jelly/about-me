/* eslint-disable no-console */
//import isYes from './is-yes.js';

// Reference needed DOM elements
const quizButton = document.getElementById('quiz-button');
const result = document.getElementById('quiz-result');

// Initialization (setup, state variables)

// Event Handlers
quizButton.onclick = function() {
  alert('Were you paying attention?');
  const firstName = prompt('What\'s your first name?');
  name = name + firstName;
  
  const lastName = prompt('What\'s your last name?');
  name = name + ' ' + lastName;
  alert('Hello ')
    
  const isExoticShorthair = prompt('Is Bisbee an Exotic Shorthair (Y/N)?');
  const correctisExoticShorthair = true;
  if(isYes(isExoticShorthair) === correctisExoticShorthair) {
    correctAnswers += 1;
  }

  const lovesTinyBoxes = prompt('Does Bisbee love tiny boxes (Y/N)?');
  const correctlovesTinyBoxes = true;
  if(isYes(lovesTinyBoxes) === correctlovesTinyBoxes) {
    correctAnswers += 1;
  }

  const hatesJerome = prompt('Does Bisbee hate Jerome (Y/N)?');
  const correctHatesJerome = true;
  if(isYes(hatesJerome) === correctHatesJerome) {
    correctAnswers += 1;
  }
    
  let correctAnswers = 0;
  let response = 'Your name is ' + name;
  if(correctAnswers >= 2) {
    response += '\, the Biz is pleased';
  } else {
    response += '\, the Biz is insulted';
  }
    
  result.textContent = response;
}


