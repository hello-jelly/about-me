const test = QUnit.test;
import isYes from './is-yes.js';

    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

const helloJelly = true;
const isHelloJelly = 'Is my Github name Hello Jelly?';
if(isYes(isHelloJelly) === helloJelly) {
  console.log('You were right');
}