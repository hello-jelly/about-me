import { getThrowFromNumber, hand } from '../src/get-throw.js';

const test = QUnit.test;

QUnit.module('Cpu Hand');

test('hand should give us a random scissors, rock, or paper', function(assert) {
  assert.equal(true, ['scissors', 'rock', 'paper'].includes(hand()));
});

test('getThrowFromNumber should give scissors when number equals 0', function(assert) {
  assert.equal('scissors', getThrowFromNumber(0));
});

test('getThrowFromNumber should give rock when when number equals 1', function(assert) {
  assert.equal('rock', getThrowFromNumber(1));
});

test('getThrowFromNumber should give paper when when number equals 2', function(assert) {
  assert.equal('paper', getThrowFromNumber(2));
});