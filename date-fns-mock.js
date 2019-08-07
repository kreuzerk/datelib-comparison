const dateFns = require('date-fns');

const isValid = (value, pattern) => {

    const dateAsArray = dateFns.format(value, pattern).split('.');
    const month = parseInt(dateAsArray[1]);
    if (month > 12) {
        return false;
    }
    return dateFns.isValid(dateFns.parse(value));
};

module.exports = {isValid};