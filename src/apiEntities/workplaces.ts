import { schema } from 'nexus';
import { workplaces } from '../data/workplace';

const WorkplaceType = schema.objectType({
    name: 'Workplace',
    definition(t) {
        t.field('id', {
            type: 'ID',
            nullable: false
        });
        t.field('companyName', {
            type: 'String',
            nullable: false
        });
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
