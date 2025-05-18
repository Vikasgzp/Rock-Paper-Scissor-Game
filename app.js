let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const compMoveText = document.getElementById("comp-move-text");
const compMoveImg = document.getElementById("comp-move-img");

const getCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const updateCompMoveDisplay = (compChoice) => {
    // Update the text for the computer's move
    compMoveText.innerText = `Computer's Move: ${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)}`;
    
    // Update the image of the computer's move
    compMoveImg.src = `images/${compChoice}.png`; // Ensure that your images are correctly named: rock.png, paper.png, scissors.png
}

const drawGame = () => {
    console.log("Game is drawn");
    msg.innerText = "Game was drawn";
}

const gameResult = (userWin) => {
    if (userWin) {
        console.log("user win");
        msg.innerText = "You won!";
        userScore++; // Increment user score
        document.getElementById("user-score").innerText = userScore; // Update score on the page
    } else {
        console.log("comp win");
        msg.innerText = "You lose!";
        compScore++; // Increment computer score
        document.getElementById("comp-score").innerText = compScore; // Update score on the page
    }
}

const playGame = (userChoice) => {
    console.log("user choice ", userChoice);
    // Generate computer choice
    const compChoice = getCompChoice();
    console.log("comp choice ", compChoice);

    // Update the display for computer's move
    updateCompMoveDisplay(compChoice);

    let userWin = true;
    if (userChoice === compChoice) {
        drawGame();
    } else {
        if ((userChoice === "scissor" && compChoice === "rock") || 
            (userChoice === "rock" && compChoice === "paper") || 
            (userChoice === "paper" && compChoice === "scissor")) {
            userWin = false;
        }
        gameResult(userWin);
    }
}

// Adding event listeners to all the choices (Rock, Paper, Scissors)
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
