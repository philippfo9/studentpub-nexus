import { schema } from 'nexus';
import { workplaces } from '../data/workplace';

const WorkplaceType = schema.objectType({
    name: 'Workplace',
    definition(t) {
        t.id('id');
        t.string('companyName');
        t.string('country')
    },
});

schema.extendType({
    type: 'Query',
    definition(t) {
        t.field('workplaces', {
            type: 'Workplace',
            list: true,
            resolve: (_) => {
                return workplaces;
            }
        })
    }
}); 
