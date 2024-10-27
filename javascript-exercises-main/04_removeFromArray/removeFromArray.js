const removeFromArray = function(array, ...values) {
    return array.filter(value => !values.includes(value))
};

// Do not edit below this line
module.exports = removeFromArray;
