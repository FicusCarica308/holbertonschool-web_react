// Interface & type for main.ts
/* Namespace & Declaration merging */

type RowID = number;

interface RowElement {
    firstName: string,
    lastName: string,
    age?: number,
}

export {RowID, RowElement};