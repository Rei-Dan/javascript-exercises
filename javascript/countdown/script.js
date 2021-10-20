let output = document.querySelector("output");
document.getElementById("output").innerHTML = "";

let i = 10;
while (i > -1) {
  if (i === 10) {
    count10(i);
  } else if (i === 0) {
    count0(i);
  } else if (i !== 10 || i !== 0) {
    count1_9(i);
  }
  i--;
}
function count10(i) {
  setTimeout(function () {
    let para = document.createElement("p");
    document.getElementById("output").appendChild(para);
    para.textContent = "Countdown 10";
    console.log("Countdown 10");
  }, 1000);
}

function count0(i) {
  setTimeout(function (i) {
    let para = document.createElement("p");
    document.getElementById("output").appendChild(para);
    para.textContent = "Blast Off!";
    console.log("Blast Off!");
  }, 10000);
}

function count1_9(i) {
  setTimeout(function () {
    let para = document.createElement("p");
    document.getElementById("output").appendChild(para);
    para.textContent = i;
    console.log(i);
  }, 1000);
}
// const para = document.createElement("p");
// output.appendChild(para);
// para.textContent = "Countdown 10";
