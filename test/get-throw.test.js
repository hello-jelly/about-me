import { getThrowFromNumber, hand } from '../src/get-throw.js';

const test = QUnit.test;

QUnit.module('Cpu Hand');

test('hand should give us a random scissors, rock, or paper', function(assert) {
  assert.equal(true, ['scissors', 'rock', 'paper'].includes(hand()));
});

test('getThrowFromNumber should give scissors when give a number less than .333333', function(assert) {
  assert.equal('scissors', getThrowFromNumber(.25));
});

test('getThrowFromNumber should give rock when give a number greater than .666666', function(assert) {
  assert.equal('rock', getThrowFromNumber(.75));
});

test('getThrowFromNumber should give paper when given a number greater than .333333 and less than .666666', function(assert) {
  assert.equal('paper', getThrowFromNumber(.5));
});