/// <reference path="crud.d.ts" />
import {RowElement, RowID} from "./interface"
import * as CRUD from './crud'
import { insertRow, updateRow } from "./crud"

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}
console.log('row =', row);

const newRowID: RowID = CRUD.insertRow(row);
console.log('newRowID = ', newRowID);

const updatedRow: RowElement =  Object.assign(row, {age: 23});
console.log('updatedRow =', updatedRow);

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
