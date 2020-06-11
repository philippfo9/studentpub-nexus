/* Note to self:
 * - this is suboptimal, bc I need to type the same thing again as in the graphql schema and it can easily diverge 
 */
import { workplaces } from './workplace';
import { WorkerOrStudent } from './workerOrStudent';
import { newStudent } from './student';
import { newWorker } from './worker';

export interface IPersonInput {
    name: string;
    citizenship: string;
    birthday?: Date;
}

export interface IPerson {
    id: string;
    name: string;
    citizenship: string;
    birthday?: Date;
}

const names = ['Jeff', 'Bill', 'Gustav', 'Franco', 'Christina', 'Kristine', 'Bella', 'Joseph', 'Maria'];
const citizenships = ['AT', 'DE', 'US', 'IT'];

export const persons: WorkerOrStudent[] = [];

for (let i = 0; i < 9; i++) {
    const name = names[i];
    const citizenship = citizenships[i % 4];
    const birthday = new Date('2020-05-01 19:32:15');
    if (i % 2 == 0) {
        persons.push(
            newStudent({name, citizenship, birthday, school: 'First Boring School or so', grade: i + 3})
        ); 
    } else {
        persons.push(
            newWorker({name, citizenship, birthday}, workplaces[Math.round(Math.random() * 2)].id)
        );
    }
}

console.log({persons});