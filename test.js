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
	let randomFact = catFacts.random();

	t.true(allFacts.indexOf(randomFact) >= 0);
});

test('all facts', t => {
	t.same(catFacts.all, allFacts);
});
