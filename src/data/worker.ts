import { v4 as uuidv4 } from 'uuid';
import { IPerson, IPersonInput } from './person';
import { IWorkPlace, workplaces } from './workplace';

export interface IWorker extends IPerson {
    workplace?: IWorkPlace;
    isHired: boolean;
}

export function newWorker({name, citizenship, birthday}: IPersonInput, workplaceID: string): IWorker {
    const workplace = workplaces.find(workplace => workplace.id === workplaceID);
    return {
        name,
        workplace,
        citizenship,
        birthday,
        id: uuidv4(),
        isHired: !!workplace
    }
}