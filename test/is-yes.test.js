import isYes from '../src/is-yes.js';

const test = QUnit.test;

test('banana is yes', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'banana';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('BANANA is yes', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'BANANA';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('nana is yes', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'nana';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('apple is no', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'apple';
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});