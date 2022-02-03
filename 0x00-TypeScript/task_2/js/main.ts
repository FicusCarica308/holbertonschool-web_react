// Task(2)

/* Director Interface & Class */
interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string,
} 

class Director implements DirectorInterface {
    workFromHome(): string {
        return ('Working from home');
    }
    getCoffeeBreak(): string {
        return ('Getting a coffee break');
    }
    workDirectorTasks(): string {
        return ('Getting to director tasks');
    }
}

/* Teacher Interface & Class */
interface TeacherInterface{
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string,
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return ('Cannot work from home');
    }
    getCoffeeBreak(): string {
        return ('Cannot have a break');
    }
    workTeacherTasks(): string {
        return ('Getting to work');
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (salary < 500) {
        return (new Teacher());
    }
    return (new Director());
}

function isDirector(employee: any): employee is Director {
    return typeof employee.workDirectorTasks === 'function';
}

function executeWork(employee: any): string {
    if (isDirector(employee) === false) {
        return (employee.workTeacherTasks());
    } else {
        return (employee.workDirectorTasks());
    }
}


console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

console.log(executeWork(createEmployee(200)));

console.log(executeWork(createEmployee(1000)));
