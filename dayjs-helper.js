const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');

module.exports = {
    checkDate: (d) => {
        const date = dayjs(d.date);
        if (!date(d.format).isValid() === d.expectedResult) {
            console.error(`Test failed - ${d.date} is not in format of ${d.format}`);
        }
    },
};
