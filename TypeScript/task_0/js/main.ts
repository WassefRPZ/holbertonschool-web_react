interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
};
const student1: Student = {
    firstName: "jin",
    lastName: "kazama",
    age: 24,
    location: "japon",
};
const student2: Student = {
    firstName: "yugi",
    lastName: "oh",
    age: 16,
    location: "japon",
};
const studentsList: Student[] = [ student1, student2 ]

const table = document.createElement('table');

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
        table.append(row);
    });
document.body.appendChild(table)