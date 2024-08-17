console.log("hello world");

const choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const password = document.getElementById("password");
let amount = 0;
let genRep;

const generateButton = document.getElementById("generate");
function generate() {
clearInterval(genRep)
genRep = setInterval(loop16, 50)
password.textContent = ""
amount = 0
}
generateButton.addEventListener("click", generate);

function loop16() {
const generator = choices[Math.round(Math.random() * 61)];
password.textContent += generator;
amount += 1;
console.log(amount);
if (amount === 4 || amount === 8 || amount === 12) {
    password.textContent += "-";
}
if (amount >= 16) {
    clearInterval(genRep)
}
}
