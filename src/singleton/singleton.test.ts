import {Universe} from './singleton'

describe('singletonTest', () => {
    test('equal', () => {
        const uni = Universe.instance;
        const uni2 = Universe.instance;
        expect(uni === uni2).toBe(true);
    })
});