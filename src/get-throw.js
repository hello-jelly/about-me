export function getHandFromNumber(randomNumber) {
  if(randomNumber < 0.333333) {
    return 'kai';
  } else if(randomNumber >= 0.666666) {
    return 'bai';
  } else {
    return 'bo';
  }
}

export function hand() { 
  const randomNumber = Math.random();
  return getHandFromNumber(randomNumber);
}
