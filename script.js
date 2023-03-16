const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById("score");
const main = document.getElementById("main");
const chosen = document.getElementById("chosen");
const reset = document.getElementById("reset");
const user_pick = document.getElementById("user_pick");
const computer_pick = document.getElementById("computer_pick");
const winner = document.getElementById("winner");

const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const instruction = document.getElementById("instruction");


const choices = ['rock', 'paper', 'scissors'];
let userChoice = undefined;
let score = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        userChoice = button.getAttribute("data-choice");

        
        determineWinner();
    });
});



reset.addEventListener("click", () => {
    main.style.display = "flex";
chosen.style.display = "none";

});

openBtn.addEventListener("click", () => {
    instruction.style.display = "flex";

});

closeBtn.addEventListener("click", () => {
  instruction.style.display= "none";

});

function determineWinner(){
    const computerChoice = getComputerChoice();

    updateChosen(user_pick, userChoice);
updateChosen(computer_pick, computerChoice);


    if(userChoice === computerChoice){
        winner.innerText = 'draw';

    } else if ( (userChoice === 'rock' && computerChoice === 'scissors') || 
    (userChoice === 'paper' && computerChoice === 'rock') || 
    (userChoice === 'scissors' && computerChoice === 'paper') ) {
        updateScore(1);
        winner.innerText = 'win';
    } else {
        updateScore(-1);
        winner.innerText = 'lost';
    }

    main.style.display = "none";
chosen.style.display = "flex";


}


function updateScore(value) {
    score += value;

    scoreEl.innerText = score;

}

//console.log(getComputerChoice());

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateChosen(chosenEl, choice) {
    chosenEl.classList.remove("btn-paper");
    chosenEl.classList.remove("btn-scissors");
    chosenEl.classList.remove("btn-rock");

    const img = chosenEl.querySelector("img")
    chosenEl.classList.add(`btn-${choice}`);
    img.src = `./images/icon-${choice}.svg`


}

