/*
* Task 0 - Converting into an Immutable object using fromJS
* A function getImmutableObject that accepts object as a parameter &
* converts it into an immutable Map using fromJS of the Immutable.js
*/
import { fromJS } from 'immutable'

function getImmutableObject(obj) {
  return (
    fromJS(obj)
  );
}

export default getImmutableObject;

// console.log(getImmutableObject({
//   fear: true,
//   smell: -1033575916.9145899,
//   wall: false,
//   thing: -914767132
// })
// );
