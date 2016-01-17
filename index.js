'use strict';

/**
 * Dependencies
 */

var uniqueRandomArray = require('unique-random-array');
var catFacts = require('./cat-facts.json');


/**
 * Interesting cat facts
 */

exports.random = uniqueRandomArray(catFacts);
exports.all = catFacts;
