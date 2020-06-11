import { schema } from 'nexus';

const QueryType = schema.queryType({
    definition(t) {
        t.string('hello', () => 'hello world');
    }
});