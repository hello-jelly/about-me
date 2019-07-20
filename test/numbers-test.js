import compareNumbers from '../src/compare-numbers.js';

const test = QUnit.test;

test('greater than', function(assert) {
  const guess = 5;
  const correctNumber = 3;
  const expected = 1;
  const result = compareNumbers(guess, correctNumber);
  assert.equal(result, expected);
});

test('less than', function(assert) {
  const guess = 2;
  const correctNumber = 3;
  const expected = -1;
  const result = compareNumbers(guess, correctNumber);
  assert.equal(result, expected);
});

test('equals', function(assert) {
  const guess = 3;
  const correctNumber = 3;
  const expected = 0;
  const result = compareNumbers(guess, correctNumber);
  assert.equal(result, expected);
});