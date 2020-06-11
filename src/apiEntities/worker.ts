import { schema } from 'nexus';

const WorkerType = schema.objectType({
    name: 'Worker', 
    definition(t) {
        t.implements('Person')
        t.field('workplace', {
            type: 'Workplace'
        })
    }
});