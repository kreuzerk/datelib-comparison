const momentHelper = require('./moment-helper');
const dateFnsHelper = require('./date-fns-helper');
const dayjsHelper = require('./dayjs-helper');

const dateAndFormat = [
    {format: 'DD.MM.YYYY', date: '13.11.2018', expectedResult: true},
    {format: 'HH:mm', date: '12:40', expectedResult: true},
    {format: 'DD.MM.YYYY', date: '12.13.2018', expectedResult: false},
];

console.log('=======Moment JS========');
dateAndFormat.forEach(d => momentHelper.checkDate(d));
console.log('========All tests done=========');

/*
console.log('=======Date FNS========');
dateAndFormat.forEach(d => dateFnsHelper.checkDate(d));
console.log('========All tests done=========');
*/

console.log('=======Day JS========');
dateAndFormat.forEach(d => dayjsHelper.checkDate(d));
console.log('========All tests done=========');
