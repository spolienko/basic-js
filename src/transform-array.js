// const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // // remove line with error and write your code here
   if (!arr || Array.isArray(arr) !== true)
        throw new CustomError('Error');
    let array = arr.concat();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '--discard-next') {
            if (typeof array[i + 1] !== 'undefined') {
                array.splice(i + 1, 1);
            }
        }
        if (array[i] === '--discard-prev') {
            if (typeof array[i - 1] !== 'undefined') {
                array.splice(i - 1, 1);
            }
        }
        if (array[i] === '--double-next') {
            if (typeof array[i + 1] !== 'undefined') {
                array.splice(i, 1, array[i +1]);
            }
        }
        if (array[i] === '--double-prev') {
            if (typeof array[i - 1] !== 'undefined') {
                array.splice(i, 1, array[i - 1]);
            }
        }
    }

    array = array.filter(item => item !== '--discard-next' && item !=='--double-prev' && item !== '--double-next' && item !== '--discard-prev');
    return array;
};


// --discard-next исключает следующий элемент массива из преобразованного массива.
// --discard-prev исключает предыдущий элемент массива из преобразованного массива.
// --double-next удваивает следующий элемент массива в преобразованном массиве.
// --double-prev удваивает предыдущий элемент массива в преобразованном массиве.
