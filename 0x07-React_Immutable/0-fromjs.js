/*
* Task 0 - Converting into an Immutable object using fromJS
* A function getImmutableObject that accepts object as a parameter &
* converts it into an immutable Map using fromJS of the Immutable.js
*/
const { fromJS, isKeyed } = require('immutable') // ES6 - import { fromJS } from 'immutable'

function getImmutableObject(obj) {
  return (
    fromJS(obj)
  );
}
