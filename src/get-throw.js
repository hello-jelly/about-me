export function getThrowFromNumber(getThrow) {
  if(getThrow < 0.333333) {
    return 'scissors';
  } else if(getThrow >= 0.666666) {
    return 'rock';
  } else {
    return 'paper';
  }
}

export function hand() { 
  const getThrow = Math.floor((Math.random() * 3));
  return getThrowFromNumber(getThrow);
}
