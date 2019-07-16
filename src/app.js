/* eslint-disable no-console */
//import isYes from './is-yes.js';

// Reference needed DOM elements
const quizButton = document.getElementById('quiz-button');
//const result = document.getElementById('quiz-result');

// Initialization (setup, state variables)
//result.textContent = response;

// Event Handlers
quizButton.onclick = function() {
  alert('Were you paying attention?');
  const confirmed = confirm('Are you sure about that?');
  if(confirmed === false) {
    return;
  }
  let nameResponse = '';
  const firstLastName = prompt('What\'s your first and last name?');
  if(firstLastName === null || firstLastName === '') {
    return;
  } else {
    nameResponse = 'Hello ' + firstLastName + '! Let\'s get to it!';
    alert(nameResponse);
  }
};

  // const isExoticShorthair = prompt('Is Bisbee an Exotic Shorthair (Y/N)?');
  // if(isYes(isExoticShorthair) === correctAnswers) {
  //   correctAnswers += 1;
  // }
  

//   const lovesTinyBoxes = prompt('Does Bisbee love tiny boxes (Y/N)?');
//   const correctlovesTinyBoxes = true;
//   if(isYes(lovesTinyBoxes) === correctlovesTinyBoxes) {
//     correctAnswers += 1;
//   }

//   const hatesJerome = prompt('Does Bisbee hate Jerome (Y/N)?');
//   const correctHatesJerome = true;
//   if(isYes(hatesJerome) === correctHatesJerome) {
//     correctAnswers += 1;
//   }
    
//   let correctAnswers = 0;
//   if(correctAnswers >= 2) {
//     response = 'You scored' + XX + ', the Biz is insulted';
//   } else {
//     response += 'You scored' + XX + ', the Biz is insulted';
//   }  
// };
