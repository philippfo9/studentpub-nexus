import { IWorker } from './worker';
import { IStudent } from './student';

export type WorkerOrStudent = IWorker | IStudent;

export function isStudent(person: WorkerOrStudent): person is IStudent {
    return !!(person as IStudent).school;
}