import { getHandFromNumber, hand } from '../src/get-throw.js';

const test = QUnit.test;

QUnit.module('Cpu Hand');

test('hand should give us a random kai, bai, or bo', function(assert) {
  assert.equal(true, ['kai', 'bai', 'bo'].includes(hand()));
});

test('getHandFromNumber should give kai when give a number less than .333333', function(assert) {
  assert.equal('kai', getHandFromNumber(.25));
});

test('getHandFromNumber should give bai when give a number greater than .666666', function(assert) {
  assert.equal('bai', getHandFromNumber(.75));
});

test('getHandFromNumber should give bo when given a number greater than .333333 and less than .666666', function(assert) {
  assert.equal('bo', getHandFromNumber(.5));
});