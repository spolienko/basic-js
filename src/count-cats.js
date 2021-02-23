//const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  // // remove line with error and write your code here
  let findedStr = '^^';

   const arr = matrix.flat();
  let result = arr.filter(elem => elem === findedStr);
  return result.length;
};
