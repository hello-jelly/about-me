//imports hand = cpu's random play

import { hand } from './get-throw.js';

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
const balanceLeft = document.querySelector('.balance');

//States for tracking

let wins = 0;
let losses = 0;
let balance = 100;

//Dictionary used to determine wins, losses and ties by comparing the playerHand to cpuHand

const plays = {
  rock: {
    rock: 'tie',
    paper: 'loss',
    scissors: 'win'
  },
  paper: {
    rock: 'win',
    paper: 'tie',
    kai: 'loss'
  },
  scissors: {
    rock: 'loss',
    paper: 'win',
    scissors: 'tie'
  }
};

//Switch case takes result of the play and returns the response text and updates tally and balance  

function handleResult(result) {
  switch(result) {
    case 'win':
      response.innerText = 'You Won!';
      wins += 1;
      balance += betAmount();
      updateTally();
      updateBalance();
      break;
    case 'loss':
      response.innerText = 'You Lost';
      losses += 1;
      balance -= betAmount();
      updateTally();
      updateBalance();
      break;
    case 'tie':
      response.innerText = 'Samesies';
      break;
  }
}

//Switch case takes value of player's hand and reveals corresponding img 

function showPlayerHand(hand) {
  switch(hand) {
    case 'scissors':
      playerScissor.classList.remove('invisible');
      break;
    case 'rock':
      playerRock.classList.remove('invisible');
      break;
    case 'paper':
      playerPaper.classList.remove('invisible');
      break;
  }
}

//Switch case takes value of cpu's hand and reveals corresponding img 

function showCpuHand(hand) {
  switch(hand) {
    case 'scissors':
      cpuScissor.classList.remove('invisible');
      break;
    case 'rock':
      cpuRock.classList.remove('invisible');
      break;
    case 'paper':
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

//Function to increase number of wins or losses based on game outcome

function updateTally() {
  winCount.innerText = wins;
  lossCount.innerText = losses;
}

function updateBalance() {
  balanceLeft.innerText = balance;
}

function betAmount() {
  return parseInt(document.querySelector('input[name=bet]').value);
}

//Player's interaction that starts the game 

playButton.addEventListener('click', () => {
  resetHands();

  const cpuHand = hand();
  const handInput = document.querySelector('input[name=hand]:checked');
  let playerHand = handInput.value;

  showPlayerHand(playerHand);
  showCpuHand(cpuHand);
  handleResult(plays[playerHand][cpuHand]);
});