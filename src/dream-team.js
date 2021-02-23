// const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // // remove line with error and write your code here
   if(Array.isArray(members) !== true)
  	return false;
// let arr = members.flat();
	let str = '';
	members.forEach(elem => typeof elem === 'string' ? str += elem.replace(/\s/g, '').slice(0, 1) : str);
  return str.toUpperCase().split('').sort().join('');
};
