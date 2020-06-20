import { createTestContext } from './__helpers';

const testCtx = createTestContext();

it('can search for persons', async () => {
    // plain testing

    const personResult = await testCtx.client.send(`
        query {
            searchPersons(searchTerm: "Jeff") { 
                id
                name
            }
        }
    `);

    expect(personResult.searchPersons.length).toBe(1);
});

it('can add a student', async () => {
    const addStudentResult = await testCtx.client.send(`
        mutation {
            addStudent(grade: 8, school: "Alabama County School", personInput: {birthday: 915148800, citizenship: "AT", name: "Kyrven"}) {
                birthday
                citizenship
                id
                name
                school
            }
        }
    `);
    expect(addStudentResult).toMatchSnapshot({
        addStudent: {
            birthday: 915148800,
            citizenship: 'AT',
            id: expect.any(String),
            name: 'Kyrven',
            school: 'Alabama County School'
        }
    })
});