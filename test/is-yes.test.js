import isYes from '../src/is-yes.js';

const test = QUnit.test;

test('yes', function(assert) {
    //Arrange
    // Set up your parameters and expectations
  const text = 'yes';
  const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
  const result = isYes(text);

    //Assert
  assert.equal(result, expected);
});

test('no', function(assert) {
  //Arrange
  // Set up your parameters and expectations
  const text = 'no';
  const expected = false;

  //Act 
  // Call the function you're testing and set the result to a const
  const result = isYes(text);

  //Assert
  assert.equal(result, expected);
});


