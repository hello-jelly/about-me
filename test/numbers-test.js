import compareNumbers from '../src/compare-numbers.js';

const test = QUnit.test;

test('greater than', function(assert) {
    //Arrange
    // Set up your parameters and expectations
  const guess = 5;
  const correctNumber = 3;
  const expected = 1;

    //Act 
    // Call the function you're testing and set the result to a const
  const result = compareNumbers(guess, correctNumber);

    //Assert
  assert.equal(result, expected);
});

test('less than', function(assert) {
  //Arrange
  // Set up your parameters and expectations
  const guess = 2;
  const correctNumber = 3;
  const expected = -1;

  //Act 
  // Call the function you're testing and set the result to a const
  const result = compareNumbers(guess, correctNumber);

  //Assert
  assert.equal(result, expected);
});

test('equals', function(assert) {
  //Arrange
  // Set up your parameters and expectations
  const guess = 3;
  const correctNumber = 3;
  const expected = 0;

  //Act 
  // Call the function you're testing and set the result to a const
  const result = compareNumbers(guess, correctNumber);

  //Assert
  assert.equal(result, expected);
});