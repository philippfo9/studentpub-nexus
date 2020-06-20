import { schema, use } from 'nexus';
import { prisma } from 'nexus-plugin-prisma';

use(prisma())

const QueryType = schema.queryType({
    definition(t) {
        t.string('hello', () => 'hello world');
    }
});