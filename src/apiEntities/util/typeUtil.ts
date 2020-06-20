import { schema } from 'nexus';

const DateScalar = schema.scalarType({
    name: 'Date',
    asNexusMethod: 'date',
    description: 'Date custom scalar type',
    parseValue(value) {
        return new Date(value);
    },
    serialize(value: Date) {
        return value.getTime()
    },
    parseLiteral(ast) {
        if (ast.kind === 'IntValue') {
            return new Date(Number(ast.value));
        }
        return null;
    }
});