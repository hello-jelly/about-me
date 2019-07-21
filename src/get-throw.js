export function getThrowFromNumber(getThrow) {
  if(getThrow === 0) {
    return 'scissors';
  } else if(getThrow === 1) {
    return 'rock';
  } else if(getThrow === 2) {
    return 'paper';
  }
}

export function hand() { 
  const getThrow = Math.floor((Math.random() * 3));
  return getThrowFromNumber(getThrow);
}
