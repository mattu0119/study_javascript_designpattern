import {Universe} from './singleton'

describe('singletonTest', () => {
    test('equal', () => {
        const uni = Universe.instance;
        const uni2 = Universe.instance;
        expect(uni).toBeDefined();
        expect(uni2).toBeDefined();
        expect(uni === uni2).toBe(true);
    })
});