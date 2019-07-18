import { hand } from './cpu-hand.js';

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

let wins = 0;
let losses = 0;

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

function resetHands() {
  cpuScissor.classList.add('invisible');
  cpuRock.classList.add('invisible');
  cpuPaper.classList.add('invisible');
  playerScissor.classList.add('invisible');
  playerRock.classList.add('invisible');
  playerPaper.classList.add('invisible');
}

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