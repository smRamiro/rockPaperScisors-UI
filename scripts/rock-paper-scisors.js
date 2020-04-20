let count = 1;
let player1Score = 0;
let player2Score = 0;

while (count<=5) {
    game();
    count++;
}

function game(){

    let user1Selection = prompt('Player 1, please input your selection!').toLowerCase();
    let user2Selection = prompt('Player 2, please input your selection!').toLowerCase();
    
    console.log(rockPaperScisors(user1Selection, user2Selection));

    function checkWinner(){
        if(player1Score > player2Score){
            return `Player1 is the winner!`;
        }else if(player1Score < player2Score){
            return `Player 2 is the winner!`;
        }else{
            return`There\'s no winner; it\'s a draw`;
        }
    }

    function rockPaperScisors(player1Selection, player2Selection){

        switch(player1Selection){
            case "rock":

                if(count==5){
                    console.log(checkWinner());
                }

                if(player2Selection == "rock"){
                    return `It\'s a tie. Score p1: ${player1Score} Score p2: ${player2Score}`;
                }else if(player2Selection == "paper"){
                    player2Score++;
                    return `Player 2 wins; ${player2Selection} DESTROYS ${user1Selection}. Score p1: ${player1Score} Score p2: ${player2Score}`;
                }else{
                    player1Score++;
                    return `Player1 wins!; ${user1Selection} DESTROYS ${player2Selection}. Score p1: ${player1Score} Score p2: ${player2Score}`;
                }
    
            case "paper":

                if(count==5){
                    console.log(checkWinner());
                }
                
                if(player2Selection == "rock"){
                    player1Score++;
                    return `Player1 wins!; ${user1Selection} DESTROYS ${player2Selection}. Score p1: ${player1Score} Score p2: ${player2Score}`;
                    
                }else if(player2Selection == "paper"){
                    return `It\'s a tie. Score p1: ${player1Score} Score p2: ${player2Score}`;
    
                }else if (player2Selection == "scisors"){
                    player2Score++;
                    return `Player 2 wins; ${player2Selection} DESTROYS ${user1Selection}. Score p1: ${player1Score} Score p2: ${player2Score}`;
                }
    
            case "scisors":

                if(count==5){
                    console.log(checkWinner());
                }

                if(player2Selection == "rock"){
                    player2Score++;
                    return `Player 2 wins; ${player2Selection} DESTROYS ${user1Selection}. Score p1: ${player1Score} Score p2: ${player2Score}`;
                }else if(player2Selection == "paper"){
                    player1Score++;
                    return `Player1 wins!; ${user1Selection} DESTROYS ${player2Selection}. Score p1: ${player1Score} Score p2: ${player2Score}`;
                }else{
                    return `It\'s a tie. Score p1: ${player1Score} Score p2: ${player2Score}`;
                }
        }
    }
}