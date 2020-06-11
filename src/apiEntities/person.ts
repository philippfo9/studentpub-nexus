import { schema } from 'nexus';
import { persons } from '../data/person';
import { personResolveType } from './util/resolverUtil';

const PersonType = schema.interfaceType({
    name: 'Person',
    definition(t) {
        t.id('id')
        t.string('name')
        t.string('citizenship')
        t.field('birthday', {
            type: 'Date'
        })
        t.resolveType(personResolveType)
    }  
});

const SearchPersonResultType = schema.unionType({
    name: 'WorkerOrStudent',
    definition(t) {
        t.members('Student', 'Worker')
        t.resolveType(personResolveType);
    }
});

const PersonInputType = schema.inputObjectType({
    name: 'PersonInput',
    definition(t) {
        t.string('name', {required: true})
        t.string('citizenship', {required: true})
        t.field('birthday', {
            type: 'Date'
        })
    }
})

console.log({persons});


schema.extendType({
    type: 'Query',
    definition(t) {
        t.field('person', {
            nullable: true,
            type: 'Person',
            args: {
                id: schema.stringArg({required: true})
            },
            resolve: (_, {id}) => {
                return persons.find(p => p.id === id) || null;
            }
        });
        t.list.field('searchPersons', {
            type: 'Person',
            args: {
                searchTerm: schema.stringArg({required: true})
            },
            resolve: (_, {searchTerm}) => {
                return persons.filter(person => person.name.includes(searchTerm));
            }
        });
    }
})
