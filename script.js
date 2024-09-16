let user = 0;
let comp = 0;

let msg = document.querySelector(".mess");

let play = document.querySelector("#you");
let back = document.querySelector("#comp");

// Function to generate computer choice
const gencomputer = () => {
    let option = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random() * 3);
    return option[i];
};

// Function to handle a draw game
const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "yellow";
};

// Function to show the winner
const showWinner = (userWin, cpu, userChoice) => {
    if (userWin) {
        console.log("you win!");
        msg.innerText = `You Win! ${userChoice} beats ${cpu}`;
        msg.style.backgroundColor = "green";
        user++;
        play.innerText = user;
    } else {
        console.log("you lose");
        msg.innerText = `You lose! ${cpu} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        comp++;
        back.innerText = comp;
    }
};

// Main game function
const game = (userChoice) => {
    console.log("Your Choice:", userChoice);
    let cpu = gencomputer();
    console.log("CPU Choice:", cpu);

    if (userChoice === cpu) {
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // rock beats sic, loses to paper
            userWin = cpu === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // paper beats rock, loses to sic
            userWin = cpu === "scissors" ? false : true;
        } else {
            // sic beats paper, loses to rock
            userWin = cpu === "rock" ? false : true;
        }
        showWinner(userWin, cpu, userChoice);
    }
};

// Event listener for user choices
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        game(userChoice);
    });
});
