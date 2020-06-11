import { schema } from 'nexus';

const DateScalar = schema.scalarType({
    name: 'Date',
    asNexusMethod: 'date',
    description: 'Date custom scalar type',
    parseValue(value) {
        console.log('parsing value', value);
        
        return new Date(value);
    },
    serialize(value: Date) {
        return value.getTime()
    },
    parseLiteral(ast) {
        console.log({ast});
        
        if (ast.kind === 'IntValue') {
            return new Date(Number(ast.value));
        }
        return null;
    }
});