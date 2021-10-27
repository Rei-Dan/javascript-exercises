const ftoc = function () {
  let tempC = Number((arguments[0] - 32) * (5 / 9));
  if (tempC % 1 !== 0) {
    tempC = Number(tempC.toFixed(1));
    return tempC;
  } else return tempC;
};

const ctof = function () {
  let tempF = Number(arguments[0] * (9 / 5) + 32);
  if (tempF % 1 !== 0) {
    tempF = Number(tempF.toFixed(1));
    return tempF;
  } else return tempF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
