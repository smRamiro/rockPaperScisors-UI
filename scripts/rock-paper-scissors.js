const oneButtons = document.querySelectorAll(".player1gameButtons");
let showGameResult = document.querySelector("#gameTextParagraph");
let player1Image = document.querySelector(".player1ChooseImage");
let computerImage = document.querySelector(".player2ChooseImage");
let roundText = document.querySelector("#gameRound");
let player1Score = 0;
let player2Score = 0;
let roundCount = 1;

for (let i = 0; i < oneButtons.length; i++) {
    oneButtons[i].addEventListener("click", game)
}

const twoButtons = document.querySelectorAll(".player2gameButtons");

for (let i = 0; i < twoButtons.length; i++) {
    twoButtons[i].addEventListener("click", game);
}

function game(e){

let player1Selection = [e.toElement.textContent].toString().toLowerCase();
let computerSelection = "";
let randomComputerSelection = Math.random();

console.log(randomComputerSelection);
console.log(computerSelection);

if (randomComputerSelection < 0.3){
    computerSelection = "rock";
}else if(randomComputerSelection > 0.6){
    computerSelection = "paper";
}else if(randomComputerSelection > 0.3){
    computerSelection = "scissors";
}

++roundCount;
roundText.textContent= roundCount;

switch(player1Selection){
    case "rock":
        player1Image.setAttribute("src","imgs/rockFinal.png");
        if(computerSelection == "rock"){
            computerImage.setAttribute("src","imgs/rockFinal.png");
            let result = `It\'s a tie.`;
            console.log(result);
            showGameResult.textContent = result;
            return result;
            
        }else if(computerSelection == "paper"){
            computerImage.setAttribute("src","imgs/paper.png");
            ++player2Score;
            let result = `Computer wins; ${computerSelection} DESTROYS ${player1Selection}.`;
            console.log(result);
            showGameResult.textContent = result;
            return result;
            }else{
                computerImage.setAttribute("src","imgs/scissors.png");
            ++player1Score;
            let result = `Player1 wins!; ${player1Selection} DESTROYS ${computerSelection}.`;
            console.log(result);
            showGameResult.textContent = result;
            return result;

            }
    
    case "paper":
        player1Image.setAttribute("src","imgs/paper.png");
        if(computerSelection == "rock"){
            computerImage.setAttribute("src","imgs/rockFinal.png");
            ++player1Score;
            let result = `Player1 wins!; ${player1Selection} DESTROYS ${computerSelection}.`;
            console.log(result);
            showGameResult.textContent = result;
            return result;
                    
        }else if(computerSelection == "paper"){
            computerImage.setAttribute("src","imgs/paper.png");
            let result = `It\'s a tie.`;
            console.log(result);
            showGameResult.textContent = result;
            return result;
    
        }else if (computerSelection == "scissors"){
            computerImage.setAttribute("src","imgs/scissors.png");
            ++player2Score;
            let result = `Computer wins; ${computerSelection} DESTROYS ${player1Selection}.`;
            console.log(result);
            showGameResult.textContent = result;
            return result;
        }
    
    case "scissors":
        player1Image.setAttribute("src","imgs/scissors.png");
        if(computerSelection == "rock"){
            computerImage.setAttribute("src","imgs/rockFinal.png");
            ++player2Score;
            let result = `Computer wins; ${computerSelection} DESTROYS ${player1Selection}.`;
            console.log(result);
            showGameResult.textContent = result;
            return result;
        }else if(computerSelection == "paper"){
            computerImage.setAttribute("src","imgs/paper.png");
            ++player1Score;
            let result = `Player1 wins!; ${player1Selection} DESTROYS ${computerSelection}.`;
            console.log(result);
            showGameResult.textContent = result;
            return result;
        }else{
            computerImage.setAttribute("src","imgs/scissors.png");
            let result = `It\'s a tie.`;
            console.log(result);
            showGameResult.textContent = result;
            return result;
        }
    }
}