let people = ["Chris", "Ana", "Colin", "Phil", "Lola", "Sam", "Kay", "Bruce"];
let admitted = document.querySelector("#admitted");
let refused = document.querySelector("#refused");
admitted.textContent = "Admitted Guests: ";
refused.textContent = "Refused Guests: ";
let i = 0;

while (i < people.length) {
  if (people[i] === "Phil" || people[i] === "Lola") {
    document.querySelector("#refused").textContent += people[i] + ", ";
  } else if (i === people.length - 1) {
    document.querySelector("#admitted").textContent += people[i] + ".";
  } else document.querySelector("#admitted").textContent += people[i] + ", ";
  i++;
}
refused.textContent = refused.textContent.replace(/. $/, ".");
