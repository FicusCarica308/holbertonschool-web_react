/// <reference path="Teacher.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number,
    }
    export class React extends Subject {
        getRequirements() {
            return ('Here is the list of requirements for React');
        }

        getAvailableTeacher() {
            if ('experienceTeachingReact' in this.teacher) {
                return (`Available Teacher: ${this.teacher.firstName}`);
            } else {
                return ("No available teacher");
            }
        }
    }
}
