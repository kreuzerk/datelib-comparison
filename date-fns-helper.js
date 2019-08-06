const dateFns = require('date-fns');

module.exports = {
    checkDate: (d) => {
        const j = dateFns.parse(d.date);
        const date = dateFns.format(j, d.format);
        console.log('Is valid', dateFns.isValid(new Date(date)));
        if(!dateFns.isValid(date) === d.expectedResult){
            console.error(`Test failed - ${d.date} is not in format of ${d.format}`);
        }
    },
};
