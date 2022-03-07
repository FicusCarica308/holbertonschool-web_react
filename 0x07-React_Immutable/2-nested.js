/*
* Task 2 - Accessing nested elements
* Given the function below, edit it to return the value of the object at the defined path
*/
import { getIn } from 'immutable'

export default function accessImmutableObject(object, array) {
  return(getIn(object, array));
}

// console.log(
//   accessImmutableObject(
//     {name: {first: "Guillaume", last: "Salva"}},
//     ['name', 'first']
//   )
// );
