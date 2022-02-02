// Task(1) - an interface named Teacher

/* Function Interfaces */
interface printTeacherFunction {
    (firstName: string, lastName: string): string, 
}

/* Functions */
function printTeacher(firstName: string, lastName: string):string {
    return (`${firstName[0]}. ${lastName}`);
}

/* Regular Interfaces */
interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number, // Option yearsOfExperience
    location: string,
    [key: string]: any, // Optional key / value
}

interface Directors extends Teacher{
    numberOfReports: number,
}

/* Test code */
const teacherNoOptional: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'Connecticut'
};

const teacherOneOptional: Teacher = {
    firstName: 'Rock',
    lastName: 'Stone',
    fullTimeEmployee: false,
    yearsOfExperience: 8,
    location: 'Florida'
};

const teacherTwoOptional: Teacher = {
    firstName: 'Jack',
    lastName: 'stand',
    fullTimeEmployee: false,
    yearsOfExperience: 8,
    location: 'Montana',
    contract: false,
};

const directorTest: Directors = {
    firstName: 'Santa',
    lastName: 'Claus',
    location: 'The North Pole',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log("Teacher object with not optional keys", teacherNoOptional);
console.log("Teacher object with one optional key: key = yearsOfExperience", teacherOneOptional);
console.log("Teacher object with two optional keys: (key = yearsOfExperience & key(random) = value(random))", teacherTwoOptional);
console.log("Director test: ", directorTest);

let testPrintTeacher: printTeacherFunction = printTeacher;
console.log(testPrintTeacher(directorTest.firstName, directorTest.lastName));