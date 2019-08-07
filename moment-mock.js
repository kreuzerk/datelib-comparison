const moment = require('moment');

const isValid = (value, format) => {
    console.log('Momenti', moment(value, format));
    return moment(value, format).isValid();
};

const getStringInDateFormat = (value, format, checkMatchLength) => {
    if (!value) {
        return '';
    }

    if (
        checkMatchLength &&
        typeof value === 'string' &&
        (value.length !== format.length || !isValid(value))
    ) {
        return '';
    }
    return moment(value, format)
        .format(format)
        .toString();
};

module.exports = {
    isValid, getStringInDateFormat
};