# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @chandanikumari/lotide`

**Require it:**

`const _ = require('@chandanikumari/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual(array1, array2): assertion check if two arrays are equal.
* assertEqual(value1, value2): assertion check if two values are equal.
* assertObjectsEqual(object1, object2): assertion check if two objects are equals.
* eqArrays(array1, array2): check if two arrays are equal.
* eqObjects(object1, object2): check if two objects are equal.
* countLetters(string): returns the count of each letter in a string.
* countOnly(array, object): counts and returns object occurrence in an array.
* findKey(object, callback): returns true if the key of an object exist.
* findKeyByValue(object, objectValue): returns the key of the object value, based on the object given.
* head(array): returns the first element of an array.
* letterPositions(string): returns all the indices/position of each character in the provided string.
* map(array, callback): returns a new array based on the response of callback function.
* middle(array): returns the middle element of an array
* tail(array): returns the entire array except the first element.
* takeUntil(array, callback): returns an array with elements till the callback returns true.
* without(source, itemsToRemove): returns a new array removing the unwanted items provided as itemsToRemove from the source array.