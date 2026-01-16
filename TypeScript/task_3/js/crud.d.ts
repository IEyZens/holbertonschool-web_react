import { RowElement, RowID } from "../interface";

export function insertRow(row: RowElement): RowID;
export function updateRow(rowId: RowID, row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
