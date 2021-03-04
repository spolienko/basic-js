const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let result = "";
    if (!options.repeatTimes && options.addition) {
        result += str;
        result += options.addition;
        return result;
    }
    if (options.repeatTimes === 1 && !options.addition)
        return str;
    restoreAddition(options);
    restoreSeparator(options);
    for (let i = 0; i < options.repeatTimes; i++) {
        result += str;
        for (let y = 0; y < options.additionRepeatTimes; y++) {
            if (options.addition)
                result += options.addition;
            if (options.additionSeparator && y < options.additionRepeatTimes - 1)
                result += options.additionSeparator;
        }
        if (options.addition && !options.additionRepeatTimes) {
            result += options.addition;
        }
        if (options.separator && i < options.repeatTimes - 1) {
            result += options.separator;
        }
    }
    return result;
};

function restoreSeparator(options) {
    if (options.addition && options.additionRepeatTimes && !options.additionSeparator)
        options.additionSeparator = '|';
    if (options.repeatTimes && !options.separator)
        options.separator = '+';
}

function restoreAddition(options) {
    if (typeof options.addition !== 'string' && typeof options.addition !== 'undefined') {
        options.addition = String(options.addition);
    }
    if (typeof options.addition === 'object') {
        let helper = toString.call(options.addition);
        if (helper !== '[object Array]')
            options.addition = helper;
    }
}





// function onlyRepeatTimes(str, repeatTimes, separator, addition) {
//     let result = "";
//     if (repeatTimes === 1)
//         return str;
//     if (typeof addition === 'object')
//         addition = typeof addition;
//     if (!repeatTimes && addition) {
//         result += str;
//         result += addition;
//     }
//     for (let i = 0; i < repeatTimes; i++) {
//         result += str;
//         if (i < repeatTimes - 1) {
//             if (!separator)
//                 result += '+';
//             else
//                 result += separator;
//         }
//     }
//     return result;
// }