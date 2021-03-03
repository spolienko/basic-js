const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || isNumeric(sampleActivity) === false)
    return false;
    if (Number(sampleActivity) <= 0 || Number(sampleActivity) > MODERN_ACTIVITY)
    return false;

  let result = ((Math.log(MODERN_ACTIVITY / sampleActivity)) / (0.693 / HALF_LIFE_PERIOD))
  return Math.ceil(result);
};



