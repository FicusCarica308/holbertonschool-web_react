/*
  *Task 3 - List and push
  *Two functions that cover immutable lists
*/
import { List } from 'immutable';

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
