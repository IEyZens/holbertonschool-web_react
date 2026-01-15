interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Thomas",
  lastName: "Roncin",
  age: 21,
  location: "Voutré",
};

const student2: Student = {
  firstName: "Mathis",
  lastName: "Angot",
  age: 18,
  location: "Laval",
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow();

  const nameCell: HTMLTableCellElement = row.insertCell();
  nameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = row.insertCell();
  locationCell.textContent = student.location;
});

table.appendChild(tbody);
document.body.appendChild(table);
