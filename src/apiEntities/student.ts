import { persons } from './../data/person';
import { schema } from 'nexus';
import { isStudent } from '../data/workerOrStudent';
import { newStudent } from '../data/student';

const StudentType = schema.objectType({
    name: 'Student',
    definition(t) {
        t.implements('Person');
        t.string('school')
    }
});

schema.extendType({
    type: 'Query',
    definition(t) {
        t.list.field('studentsFromSchool', {
            type: 'Student',
            args: {
                school: schema.stringArg({required: true})
            },
            resolve: (_, {school}) => {
                return persons.filter(person => isStudent(person) && person.school === school); 
            }
        });
    }
});

schema.extendType({
    type: 'Mutation',
    definition(t) {
        t.field('addStudent', {
            type: 'Student',
            nullable: false,
            args: {
                personInput: schema.arg({type: 'PersonInput', required: true}),
                school: schema.stringArg({required: true}),
                grade: schema.intArg({required: true})
            },
            resolve: (_, {personInput, school, grade}, ctx) => {
                return newStudent({
                    ...personInput,
                    school,
                    grade
                })
            }
        })
    }
})

