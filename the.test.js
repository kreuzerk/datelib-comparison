const momentMock = require('./moment-mock');
const dateFnsMock = require('./date-fns-mock');

const patterns = ['DD:MM:YYYY', 'HH:mm', 'DD:MM:YYYY HH:mm'];

/*
patterns.forEach(pattern => {

    test('12 should be a valid date', () => {
        const value = '12';
        expect(momentMock.isValid(value, pattern)).toBe(dateFnsMock.isValid(value, pattern));
    });

    test('aaa should not be a valid date', () => {
        const value = 'aaa';
        expect(momentMock.isValid('aaa', pattern)).toBe(dateFnsMock.isValid(value, pattern));
    });

    test('12.17.2018 should not be a valid date', () => {
        const value = '12.17.2018';
        expect(momentMock.isValid(value, pattern)).toBe(dateFnsMock.isValid(value, pattern));
    });

    test('12.12.12. should be a valid date', () => {
        const value = '12.12.12';
        expect(momentMock.isValid(value, pattern)).toBe(dateFnsMock.isValid(value, pattern));
    });

    test('1 should be a valid date', () => {
        const value = '1';
        expect(momentMock.isValid(value, pattern)).toBe(dateFnsMock.isValid(value, pattern));
    });

});
*/

test('12.17.2018 should not be a valid date', () => {
    const value = '12.17.2018';
    expect(momentMock.isValid(value, 'DD.MM.YYYY')).toBe(dateFnsMock.isValid(value, 'DD.MM.YYYY'));
});
