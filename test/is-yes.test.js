function isYes(text) {
  text = text.toLowerCase();
  if(text === 'y') {
    return true;
  } else if(text === 'yes') {
    return true;
  } else if(text === 'yeah') {
    return true;
  } else if(text === 'yup') {
    return true;
  } else if(text === 'ya') {
    return true;
  } else {
    return false;
  }
}
  
export default isYes;