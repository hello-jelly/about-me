import isYes from '../src/is-yes.js';

const test = QUnit.test;

test('yes', function(assert) {
  const text = 'yes';
  const expected = true;
  const result = isYes(text);
  assert.equal(result, expected);
});

test('no', function(assert) {
  const text = 'no';
  const expected = false;
  const result = isYes(text);
  assert.equal(result, expected);
});
