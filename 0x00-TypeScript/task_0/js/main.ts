// Task(0) - an interface named Student

interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

function buildTable(studentList : any) {
    const table : HTMLTableElement = document.createElement('table');
    let tableContents : string = `<thead><tr><th>FirstName</th><th>location</th></tr></thead><tbody>`;
    for (const student of studentList) {
        tableContents += `<tr><td>${student.firstName}</td><td>${student.location}</td></tr>`;
    }
    table.innerHTML = tableContents += '</tbody>';
    table.border = '1px solid black';
    document.body.appendChild(table);
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 38,
    location: 'United States'
}

const student2: Student = {
    firstName: 'Ann',
    lastName: 'Chovy',
    age: 1,
    location: 'The Ocean'
}

const studentsList : Array<Student> = [student1, student2];

buildTable(studentsList);
