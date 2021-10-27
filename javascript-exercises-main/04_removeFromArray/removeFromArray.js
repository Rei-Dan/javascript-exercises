const removeFromArray = function (x, ...manyMoreArg) {
  array = x;
  for (i = arguments.length; i > 1; i--) {
    for (j = x.length - 1; j > -1; j--) {
      if (x[j] === arguments[i - 1]) {
        array.splice(j, 1);
      }
    }
  }
  return array;
};
// Do not edit below this line
module.exports = removeFromArray;
