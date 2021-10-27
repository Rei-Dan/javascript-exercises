const repeatString = function (x, y) {
  let string = "";
  if (y < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < y; i++) {
      string += x;
    }
    return string;
  }
};

// Do not edit below this line
module.exports = repeatString;
