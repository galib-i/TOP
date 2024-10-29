const sumAll = function(start, end) {
    if (!Number.isInteger(start + end)) return "ERROR";
    if ((start < 0) || (end < 0)) return "ERROR";

    let sum = 0;
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    for (let i = start; i < end + 1; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
