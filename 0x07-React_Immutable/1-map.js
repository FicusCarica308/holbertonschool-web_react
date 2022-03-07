/*
* Task 1 - Converting into Immutable using Map
* A function getImmutableObject that accepts object as a parameter &
* converts it into an immutable Map using map() of the Immutable.js
*/
const { Map } = require('immutable') // ES6 - import { fromJS } from 'immutable'

function getImmutableObject(obj) {
  return (
    Map(obj)
  );
}

// console.log(getImmutableObject({
//   fear: true,
//   smell: -1033575916.9145899,
//   wall: false,
//   thing: -914767132
// })
// );
