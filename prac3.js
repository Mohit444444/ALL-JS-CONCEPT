// practice Q2

let gameNum = 25;
let userNum = prompt("Geuss the game number : ");

while(userNum != gameNum) {
    userNum = prompt("you entered wrong number. geuss again : ");
}

console.log("congratulation, you entered the right number");