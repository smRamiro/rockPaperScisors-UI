let player1Selection = "";
let player2Selection = "";

game();

function game(e){

    const oneButtons = document.querySelectorAll(".player1gameButtons");

    for (let i = 0; i < oneButtons.length; i++) {
        oneButtons[i].addEventListener("click", rockPaperScissors)
    }

    const twoButtons = document.querySelectorAll(".player2gameButtons");

    for (let i = 0; i < twoButtons.length; i++) {
        twoButtons[i].addEventListener("click", rockPaperScissors);
    }


    function rockPaperScissors(e){
        player1Selection = [e.toElement.textContent].toString().toLowerCase();
        player2Selection = [e.toElement.textContent].toString().toLowerCase();

        switch(player1Selection){
            case "rock":

                if(player2Selection == "rock"){
                    let result = `It\'s a tie. Score p1: ${player1Score} Score p2: ${player2Score}`;
                    return result;
                }else if(player2Selection == "paper"){
                    ++player2Score;
                    let result = `Player 2 wins; ${player2Selection} DESTROYS ${player1Selection}. Score p1: ${player1Score} Score p2: ${player2Score}`;
                    return result;
                }else{
                    ++player1Score;
                    let result = `Player1 wins!; ${player1Selection} DESTROYS ${player2Selection}. Score p1: ${player1Score} Score p2: ${player2Score}`;
                    return result;
                }
    
            case "paper":
                
                if(player2Selection == "rock"){
                    ++player1Score;
                    let result = `Player1 wins!; ${player1Selection} DESTROYS ${player2Selection}. Score p1: ${player1Score} Score p2: ${player2Score}`;
                    return result;
                    
                }else if(player2Selection == "paper"){
                    let result = `It\'s a tie. Score p1: ${player1Score} Score p2: ${player2Score}`;
                    return result;
    
                }else if (player2Selection == "scissors"){
                    ++player2Score;
                    let result = `Player 2 wins; ${player2Selection} DESTROYS ${player1Selection}. Score p1: ${player1Score} Score p2: ${player2Score}`;
                    return result;
                }
    
            case "scissors":

                if(player2Selection == "rock"){
                    ++player2Score;
                    let result = `Player 2 wins; ${player2Selection} DESTROYS ${player1Selection}. Score p1: ${player1Score} Score p2: ${player2Score}`;
                    return result;
                }else if(player2Selection == "paper"){
                    ++player1Score;
                    let result = `Player1 wins!; ${player1Selection} DESTROYS ${player2Selection}. Score p1: ${player1Score} Score p2: ${player2Score}`;
                    return result;
                }else{
                    let result = `It\'s a tie. Score p1: ${player1Score} Score p2: ${player2Score}`;
                    return result;
                }
        }
    }
}