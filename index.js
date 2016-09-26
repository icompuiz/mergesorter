'use strict';

const assert = require('assert');
const sort = require('./mergesorter.js');

// given array

var array = [];
for (let i =0; i < 10; i++) {
	array.push(getRandomIntInclusive(0, 25));
}

// sort it
console.time(`MergeSort n: ${array.length}`);
sort(array);
console.timeEnd(`MergeSort n: ${array.length}`);

// confirm the results
for (let j = 0; j < array.length - 1; j++) {
	assert.ok(array[j] <= array[j+1]);
}


// ==============================================

array = [];
for (let i =0; i < 1000; i++) {
	array.push(getRandomIntInclusive(0, 25));
}


// sort it
console.time(`MergeSort n: ${array.length}`);
sort(array);
console.timeEnd(`MergeSort n: ${array.length}`);

// confirm the results
for (let j = 0; j < array.length - 1; j++) {
	assert.ok(array[j] <= array[j+1]);
}

// ==============================================

array = [];
for (let i =0; i < 1000000; i++) {
	array.push(getRandomIntInclusive(0, 25));
}

// sort it
console.time(`MergeSort n: ${array.length}`);
sort(array);
console.timeEnd(`MergeSort n: ${array.length}`);


// confirm the results
for (let j = 0; j < array.length - 1; j++) {
	assert.ok(array[j] <= array[j+1]);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}