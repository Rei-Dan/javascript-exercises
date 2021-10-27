function login() {
  let userName = prompt("Who's There?");
  if (userName === "Admin") {
    let passwordEntered = prompt("Enter Password");
    switch (passwordEntered) {
      case "":
      case null:
        alert("Canceled");
        break;
      case "TheMaster":
        alert("Welcome!");
        break;
      default:
        alert("I Don't Know You");
    }
  } else alert("No such user");
}

let a = 1;
let b = 2;

let result = a + b < 4 ? "Below" : "Over";
console.log(result);

let message;

let currentDate = new Date();
let currentYear = new Date().getFullYear();
console.log(currentYear);

function min(a, b) {
  if (a < b) {
    return a;
  } else if (b < a) {
    return b;
  } else return "they are the same";
}

const sumAll = function () {
  let sum = 0;
  if (typeof arguments[0] === "number" && typeof arguments[1] === "number") {
    for (let i = arguments[1]; i > arguments[0] - 1; i--) {
      sum += i;
      console.log[sum];
    }
  } else sum = "ERROR";
  return sum;
};
