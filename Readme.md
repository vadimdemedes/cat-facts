# cat-facts

[![Build Status](https://travis-ci.org/vdemedes/cat-facts.svg?branch=master)](https://travis-ci.org/vdemedes/cat-facts)

Interesting cat facts

![](http://i.giphy.com/xT77XZrTKOxycjaYvK.gif)


## Installation

```
$ npm install cat-facts --save
```


## Usage

```js
const catFacts = require('cat-facts');

let randomFact = catFacts.random();
// 'Grown cats have 30 teeth'

let allFacts = catFacts.all;
// [
//   'Grown cats have 30 teeth',
//   'A group of cats is called a clowder'
//   ...
// ]
```


## Tests

```
$ npm test
```


## License

MIT © [Vadim Demedes](https://github.com/vdemedes)
