//imported "hand" which is the result of cpu's hand randomNumber outcome

import { hand } from './cpu-hand.js';

//Variables for DOM elements to be used

const playButton = document.getElementById('play-button');
const playerRock = document.getElementById('player-rock');
const playerScissor = document.getElementById('player-scissor');
const playerPaper = document.getElementById('player-paper');
const cpuRock = document.getElementById('cpu-rock');
const cpuScissor = document.getElementById('cpu-scissor');
const cpuPaper = document.getElementById('cpu-paper');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const response = document.getElementById('response');

//States for tracking

let wins = 0;
let losses = 0;

//Variable plays used to determine wins, losses and ties by comparing the playerHand to cpuHand

const plays = {
  bai: {
    bai: 'tie',
    bo: 'loss',
    kai: 'win'
  },
  bo: {
    bai: 'win',
    bo: 'tie',
    kai: 'loss'
  },
  kai: {
    bai: 'loss',
    bo: 'win',
    kai: 'tie'
  }
};

//Function to compare  

function handleResult(result) {
  switch(result) {
    case 'win':
      response.innerText = 'You Won!';
      wins += 1;
      updateTally();
      break;
    case 'loss':
      response.innerText = 'You Lost';
      losses += 1;
      updateTally();
      break;
    case 'tie':
      response.innerText = 'Samesies';
      break;
  }
}

//Switch function determined by case - Removes invisibility on corresponding img based on Player's Hand 

function showPlayerHand(hand) {
  switch(hand) {
    case 'kai':
      playerScissor.classList.remove('invisible');
      break;
    case 'bai':
      playerRock.classList.remove('invisible');
      break;
    case 'bo':
      playerPaper.classList.remove('invisible');
      break;
  }
}

//Switch function determined by case - Removes invisibility on corresponding img based on CPU's Hand 

function showCpuHand(hand) {
  switch(hand) {
    case 'kai':
      cpuScissor.classList.remove('invisible');
      break;
    case 'bai':
      cpuRock.classList.remove('invisible');
      break;
    case 'bo':
      cpuPaper.classList.remove('invisible');
      break;
  }
}

//Function to reset visibility of potential hands for each play

function resetHands() {
  cpuScissor.classList.add('invisible');
  cpuRock.classList.add('invisible');
  cpuPaper.classList.add('invisible');
  playerScissor.classList.add('invisible');
  playerRock.classList.add('invisible');
  playerPaper.classList.add('invisible');
}

//Function to increase number of wins or losses

function updateTally() {
  winCount.innerText = wins;
  lossCount.innerText = losses;
}

playButton.addEventListener('click', () => {
  resetHands();

  const cpuHand = hand();
  const handInput = document.querySelector('input[name=hand]:checked');
  let playerHand = handInput.value;

  showPlayerHand(playerHand);
  showCpuHand(cpuHand);
  handleResult(plays[playerHand][cpuHand]);
});