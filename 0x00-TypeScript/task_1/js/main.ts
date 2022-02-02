// Task(1) - an interface named Teacher

/* Interface */
interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number, // Option yearsOfExperience
    location: string,
    [key: string]: any, // Optional key / value
}

/* Test code */
const teacherNoOptional: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'Connecticut'
}

const teacherOneOptional: Teacher = {
    firstName: 'Rock',
    lastName: 'Stone',
    fullTimeEmployee: false,
    yearsOfExperience: 8,
    location: 'Florida'
}

const teacherTwoOptional: Teacher = {
    firstName: 'Jack',
    lastName: 'stand',
    fullTimeEmployee: false,
    yearsOfExperience: 8,
    location: 'Montana',
    contract: false,
}

console.log("Teacher object with not optional keys", teacherNoOptional);
console.log("Teacher object with one optional key: key = yearsOfExperience", teacherOneOptional);
console.log("Teacher object with two optional keys: (key = yearsOfExperience & key(random) = value(random))", teacherTwoOptional);
