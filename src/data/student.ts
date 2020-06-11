
import { v4 as uuidv4 } from 'uuid';
import { IPerson } from './person';

export interface IStudent extends IPerson {
    school: string;
    grade: number;
}

export type BaseStudent = Omit<IStudent, "id">;

export function newStudent(baseStudent: BaseStudent): IStudent {
    return {
        ...baseStudent,
        id: uuidv4(),
    };
}