const moment = require('moment');

module.exports = {
    checkDate: (d) => {
        if(!moment(d.date, d.format).isValid() === d.expectedResult){
            console.error(`Test failed - ${d.date} is not in format of ${d.format}`);
        }
    },
};


