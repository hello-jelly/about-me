import isYes from '../src/is-yes.js';

const test = QUnit.test;

test('yes should be true', function(assert) {
  const text = 'y';  
  const expected = true;
  const result = isYes(text);
  assert.equal (result, expected);
});

test('yes should be true', function(assert) {
  const text = 'yes';  
  const expected = true;
  const result = isYes(text);
  assert.equal (result, expected);
});

test('yeah should be true', function(assert) {
  const text = 'yeah';  
  const expected = true;
  const result = isYes(text);
  assert.equal (result, expected);
});

test('yup should be true', function(assert) {
  const text = 'yup';  
  const expected = true;
  const result = isYes(text);
  assert.equal (result, expected);
});

test('yup should be true', function(assert) {
  const text = 'ya';  
  const expected = true;
  const result = isYes(text);
  assert.equal (result, expected);
});