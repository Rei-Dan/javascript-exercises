const sumAll = function () {
  let sum = 0;
  let para1 = 0;
  let para2 = 0;
  if (
    typeof arguments[0] === "number" &&
    typeof arguments[1] === "number" &&
    arguments[0] > 0 &&
    arguments[1] > 0
  ) {
    if (arguments[0] > arguments[1]) {
      para1 = arguments[1];
      para2 = arguments[0];
    } else if (arguments[0] < arguments[1]) {
      para1 = arguments[0];
      para2 = arguments[1];
    }
    for (let i = para2; i > para1 - 1; i--) {
      sum += i;
    }
  } else sum = "ERROR";
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
