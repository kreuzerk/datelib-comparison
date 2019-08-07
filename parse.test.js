const momentMock = require('./moment-mock');

test('should format 12 to 12:00', () => {
    expect(momentMock.getStringInDateFormat('12', 'HH:mm', false)).toBe('12:00');
});

test('should format 1 to 01:00', () => {
    expect(momentMock.getStringInDateFormat('1', 'HH:mm', false)).toBe('01:00');
});

test('should format 121212 to 12:12:2012', () => {
    expect(momentMock.getStringInDateFormat('121212', 'DD:MM:YYYY', false)).toBe('12:12:2012');
});

test('should format 12 to 12:08:2019', () => {
    expect(momentMock.getStringInDateFormat('12', 'DD:MM:YYYY', false)).toBe('12:08:2019');
});

test('should format 1 to 01:08:2019', () => {
    expect(momentMock.getStringInDateFormat('1', 'DD:MM:YYYY', false)).toBe('01:08:2019');
});

test('should format 108 to 01:08:2019', () => {
    expect(momentMock.getStringInDateFormat('108', 'DD:MM:YYYY', false)).toBe('10:08:2019');
});
