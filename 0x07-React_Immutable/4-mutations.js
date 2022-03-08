/*
  * Task 4 - Chained mutations 
  * Mutating a variable one after the other
*/
import { Map } from 'immutable'

export const map = Map(
  {
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
  }
);

export const map2 = map.set(2, 'Benjamin').set(4, 'Oliver');

// console.log(map2.get(2));
// console.log(map2.get(4));