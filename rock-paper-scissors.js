//Rock paper scissors game step by step

const choices = {
   1 : "rock", 
   2 : "paper",
   3 : "scissor"
}

let gameScore = {
    "player" : 0,
    "computer" : 0
}

//Create function expression for computer choice and store it in computerChoice

const computerRandom = () => 
    Math.floor(Math.random() * 3 + 1);

//Create a variable humanChoice that accepts human choice 

// const humanChoice = parseInt(prompt("choose: \n 1 : rock \n 2 : paper \n 3 : scissor"))

//Create a function that validate the winner from computerChoice and humanChoice
    //whoever won, their score +1

function checkWinner(computerChoice, humanChoice) {

    //display choices between computer and user
    console.log("Computer Choice : " + choices[computerChoice])
    console.log("Your choice : " + choices[humanChoice])

    //test condition to make sure user choose within range
    if(humanChoice < 1 || humanChoice > 3) {
        throw new Error("please choose within the range")
        
    }

    //condition 1 : check if it's draw
    if((computerChoice == 1 && humanChoice == 1) || (computerChoice == 2 && humanChoice == 2) || (computerChoice == 3 && humanChoice == 3)) {
        console.log("It's a draw")
     }

    //condition 2 : check if computer wins
    else if ((computerChoice == 1 && humanChoice == 3) || (computerChoice == 2 && humanChoice == 1) || (computerChoice == 3 && humanChoice == 2)){
        gameScore.computer += 1
    }

    //condition 3 or else : human wins
    else {
        gameScore.player += 1
    }

    console.log(gameScore)
 
}

// checkWinner(computerChoice, humanChoice);


function playRound() {
    const computerSelection = computerRandom();
    const humanSelection = parseInt(prompt("choose: \n 1 : rock \n 2 : paper \n 3 : scissor"))

    checkWinner(computerSelection, humanSelection)
}

function playFullGame() {
    x = 0
    
    while (x < 5) {
        playRound();
        x += 1
    }

    if (gameScore.computer > gameScore.player) {
        console.log("You Lose")
    }
    else {
        console.log("Congratulations, you won!")
    }
}

