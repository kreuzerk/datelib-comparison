const dateFns = require('date-fns');
const moment = require('moment');
const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');

dayjs.extend(customParseFormat);

const momentFormat = (value, format) => moment(value, format)
      .format(format)
      .toString();

const dateFnsFormat = (value, format) => dateFns.format(dateFns.parse(value), format);

console.log('Moment:', momentFormat('1', 'DD.MM.YYYY'));
console.log('DateFnsFormat:', dateFnsFormat('1', 'DD.MM.YYYY'));

console.log('Moment:', momentFormat('11', 'HH.mm'));
console.log('DateFnsFormat:', dateFnsFormat('11', 'HH.mm'));
