import { rowID, rowElement } from './interface';
import * as CRUD from './crud';

const row: rowElement = {
	firstName: "darius",
	lastName: "noxus",
	age: 31
};

const newRowID: rowID = CRUD.insertRow(row);

const obj = {firstName: "darius", lastName: "noxus"};
CRUD.insertRow(obj)

const updatedRow: rowElement = { firstName: "darius", lastName: "noxus", age: 31 };
CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(125);