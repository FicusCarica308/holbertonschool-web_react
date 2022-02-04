/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />

const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();
let cTeacher: Subjects.Teacher = {
    firstName: "John",
    lastName: 'Doe',
    experienceTeachingC: 10,
}

console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getAvailableTeacher());
console.log(cpp.getRequirements());

console.log('Java');
java.teacher = cTeacher;
console.log(cpp.getAvailableTeacher());
console.log(cpp.getRequirements());

console.log('React');
react.teacher = cTeacher;
console.log(cpp.getAvailableTeacher());
console.log(cpp.getRequirements());

export {cpp, java, react, cTeacher};