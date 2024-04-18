// Task 3 directory

const row: RowElement = {
    firstName: 'John',
    lastName: 'Doe',
  };
  const newRowID: RowID = CRUD.insertRow(row);
  const updatedRow: RowElement = {...row, age: 23};
  CRUD.updateRow(newRowID, updatedRow);
  CRUD.deleteRow(newRowID);