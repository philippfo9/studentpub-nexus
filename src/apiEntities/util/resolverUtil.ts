export function personResolveType(person: object) {
    if ('school' in person) return 'Student';
    else if ('workplace' in person) return 'Worker';
    else return null;
}