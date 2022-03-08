/*
  *Task 3 - List and push
  *Two functions that cover immutable lists
*/
import { List } from 'immutable';

/*
  *getListObject - accepts an array as parameter and converts
  *it into an immutable List using the Immutable.js library
*/
export function getListObject(array) {
  return (
    List(array)
  );
}

export function addElementToList(list, element) {
  return (
    list.push(element)
  );
}
