/// <reference path="Teacher.ts" />
/* ^ Uses Triple slash directive to reference other namespace ^
 * Desc - a Subject class in the same namespace named Subjects
 */

namespace Subjects {
    export class Subject {
        teacher: Teacher;

        set setTeacher (newTeacher: Teacher) {
            this.teacher = newTeacher;
        }
    }
}
