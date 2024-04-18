// Task 0 Directory
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const Student1: Student = {
  firstName: 'Temilade',
  lastName: 'Dauda',
  age: 32,
  location: 'Lagos',
};

const Student2: Student = {
  firstName: 'Abiodun',
  lastName: 'Dauda',
  age: 29,
  location: 'Lagos',
};

const studentsList: Student[] = [Student1, Student2]

export const showStudent = (students: Array<Student>): void => {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const headTr = document.createElement('tr');

  headTr.innerHTML = '<td>Name</td> <td>Location</td>';

  thead.appendChild(headTr);

  for (const student of students) {
    const bodyTr = document.createElement('tr');
    bodyTr.innerHTML = `<td>${student.firstName}</td> <td>${student.location}</td>`;
    tbody.appendChild(bodyTr);
  }

  table.appendChild(thead);
  table.appendChild(tbody);
  document.body.appendChild(table);
};

showStudent(studentsList);
document.title = 'Task 0';