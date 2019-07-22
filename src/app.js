/* eslint-disable no-console */
import isYes from './tests.js';

// Reference needed DOM elements
const quizButton = document.getElementById('quiz-button');
const result = document.getElementById('quiz-result');

// Initialization (setup, state variables)

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
  
  let correctAnswers = 0;
  const exoticResult = true;
  const isExoticShorthair = prompt('Is Bisbee an Exotic Shorthair (Y/N)?');
  if(isYes(isExoticShorthair) === exoticResult) {
    correctAnswers += 1;
    console.log(correctAnswers);
  }

  const tinyResult = true;
  const isTinyResult = prompt('Does Bisbee love tiny boxes (Y/N)?');
  if(isYes(isTinyResult) === tinyResult) {
    correctAnswers += 1;
    console.log(correctAnswers);
  }

  const hatesResult = false;
  const isHatesResult = prompt('Does Bisbee love Jerome (Y/N)?');
  if(isYes(isHatesResult) === hatesResult) {
    correctAnswers += 1;
    console.log(correctAnswers);
  }
  
  alert('Are you ready for your score?');
  let response = 'Hey ' + firstLastName + ', You scored ';
  if(correctAnswers === 3) {
    response += correctAnswers + '/3 (' + (correctAnswers / 3 * 100).toFixed(0) + '%)...the Biz is pleased!';
    result.classList.add('win');
  } else {
    response += correctAnswers + '/3 (' + (correctAnswers / 3 * 100).toFixed(0) + '%)...the Biz is insulted!';
    result.classList.add('finish');
    result.classList.remove('win');
  }  
  result.textContent = response;
};