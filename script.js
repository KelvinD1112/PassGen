console.log("hello world");

const choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const choicesImp = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "&", "*", "_", "+", "~", "<", ">", "?"];
const password = document.getElementById("password");
const passwordLong = document.getElementById("passwordLong");
const passwordImp = document.getElementById("passwordImp");
let amount = 0;
let genRep;
let longRep;
let impRep;

const generateButton = document.getElementById("generate");
function generate() {
genRep = setInterval(loop16, 50);
password.textContent = "";
passwordLong.textContent = "";
passwordImp.textContent = "";
amount = 0
generateButton.style.pointerEvents = "none";
setTimeout(function () {
    longRep = setInterval(loop20, 50);
  }, 850);
  setTimeout(function () {
    impRep = setInterval(loop25, 50);
  }, 1900);
  setTimeout(function () {
    generateButton.style.pointerEvents = "auto";
  }, 3200);
}
generateButton.addEventListener("click", generate);

function loop16() {
    const generator = choices[Math.round(Math.random() * 61)];
    password.textContent += generator;
    amount += 1;
    console.log(amount);
    if (amount === 4 || amount === 8 || amount === 12) {
        password.textContent += "-";
    } else if (amount >= 16) {
        clearInterval(genRep);
        amount = 0;
    }
}

function loop20() {
    const generator = choices[Math.round(Math.random() * 61)];
    passwordLong.textContent += generator;
    amount += 1;
    console.log(amount);
    if (amount === 5 || amount === 10 || amount === 15) {
        passwordLong.textContent += "-";
    } else if (amount >= 20) {
        clearInterval(longRep);
        amount = 0;
    }
}

function loop25() {
    const impGenerator = choicesImp[Math.round(Math.random() * 74)];
    passwordImp.textContent += impGenerator;
    amount += 1;
    console.log(amount);
    if (amount === 5 || amount === 10 || amount === 15 || amount === 20) {
        passwordImp.textContent += "-";
    } else if (amount >= 25) {
        clearInterval(impRep);
    }
}
