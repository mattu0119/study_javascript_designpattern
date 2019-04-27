import {Universe} from './singleton'

describe('singletonTest', () => {
    test('equal', () => {
        const uni = new Universe();
        const uni2 = new Universe();
        expect(uni === uni2).toBe(true);
    })
});