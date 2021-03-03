// const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed) {
  let steps = Math.pow(2,disksNumber) - 1;
  let time = Math.floor((3600/turnsSpeed) * steps);
  return {
    turns: steps,
    seconds: time,
  }
};
