//Rock paper scissors game step by step

const choices = {
    1: "rock",
    2: "paper",
    3: "scissor"
}

let gameScore = {
    "player": 0,
    "computer": 0
}

const playerContainer = document.querySelector(".player-choice-container");
const playerChoice = document.createElement("span");
playerContainer.appendChild(playerChoice);
const playerScore = document.querySelector(".player-score")


const computerContainer = document.querySelector(".computer-choice-container");
const computerChoice = document.createElement("span");
computerContainer.appendChild(computerChoice);
const computerScore = document.querySelector(".computer-score")

const winningContainer = document.querySelector(".round-winner-container");
const winner = document.createElement("span");
winningContainer.appendChild(winner);


const container = document.querySelector(".button-container");
const rock = document.createElement("button");
rock.classList.add("Rock");
rock.textContent = "Rock";
container.appendChild(rock);

const paper = document.createElement("button");
paper.classList.add("Paper");
paper.textContent = "Paper";
container.appendChild(paper);

const scissor = document.createElement("button");
scissor.classList.add("Scissor");
scissor.textContent = "Scissor";
container.appendChild(scissor);

const buttons = document.querySelectorAll("button");

const finalWinnerContainer = document.querySelector(".game-winner");
const finalWinner = document.createElement("span");
finalWinnerContainer.appendChild(finalWinner);


//Create function expression for computer choice and store it in computerChoice
function computerRandom() {
    let int = Math.floor(Math.random() * 3 + 1);
    return int
}

//Create a variable humanChoice that accepts human choice 

// const humanChoice = parseInt(prompt("choose: \n 1 : rock \n 2 : paper \n 3 : scissor"))

//Create a function that validate the winner from computerChoice and humanChoice
//whoever won, their score +1

function checkWinner(computerChoice, humanChoice) {

    if (humanChoice == "Rock") {
        humanChoice = 1;
    }
    else if (humanChoice == "Paper") {
        humanChoice = 2;
    }
    else if (humanChoice == "Scissor") {
        humanChoice = 3;
    }

    //display choices between computer and user
    // console.log("Your choice : " + choices[humanChoice])
    // console.log("Computer Choice : " + choices[computerChoice])

    //condition 1 : check if it's draw
    if ((computerChoice == 1 && humanChoice == 1) || (computerChoice == 2 && humanChoice == 2) || (computerChoice == 3 && humanChoice == 3)) {
        console.log("It's a draw")
        winner.textContent = " It's a draw"
    }

    //condition 2 : check if computer wins
    else if ((computerChoice == 1 && humanChoice == 3) || (computerChoice == 2 && humanChoice == 1) || (computerChoice == 3 && humanChoice == 2)) {
        gameScore.computer += 1
        winner.textContent = " Computer"
    }

    //condition 3 or else : human wins
    else {
        gameScore.player += 1
        winner.textContent = " User"
    }
}

function playFullGame() {
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            humanChoice = e.target.classList.value
            const computerValue = computerRandom();
            checkWinner(computerValue, humanChoice);
            DisplayResult(computerValue, humanChoice);
            if(gameScore.player == 5 || gameScore.computer == 5){
                declareFinalWinner();
            }
        })
        ResetResult();
    })
}


function DisplayResult(computer, human) {
    playerChoice.textContent = " " + human;

    if (computer == 1) {
        computerChoice.textContent = " Rock"
    }
    else if (computer == 2) {
        computerChoice.textContent = " Paper"
    }
    else {
        computerChoice.textContent = " Scissor"
    }

    playerScore.textContent = "User: " + gameScore["player"]
    computerScore.textContent = "Computer: " + gameScore["computer"]
}

function ResetResult() {
    playerChoice.textContent = ""
    computerChoice.textContent = ""
    winner.textContent = ""
}

function declareFinalWinner() {
    if (gameScore.player == 5) {
        finalWinner.textContent = " You won!"
    }
    else {
        finalWinner.textContent = " You lose!"
    }

    buttons.forEach(button => button.disabled = true);

}


// }


//continuation of the project "REVISITING ROCK PAPER SCISSORS"



playFullGame();