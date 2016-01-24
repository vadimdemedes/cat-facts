'use strict';

/**
 * Dependencies
 */

const allFacts = require('./cat-facts.json');
const catFacts = require('./');
const test = require('ava');


/**
 * Tests
 */

test('random fact', t => {
	const randomFact = catFacts.random();

	t.true(allFacts.indexOf(randomFact) >= 0);
});

test('all facts', t => {
	t.same(catFacts.all, allFacts);
});

test('no facts should have extranous whitespace', t => {
	catFacts.all.forEach(fact => {
		t.same(fact.trim(), fact);
	});
});

test('no facts should be duplicate', t => {
	const set = new Set(catFacts.all);

	t.same(set.size, catFacts.all.length);
});
