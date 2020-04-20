let user1Selection = prompt('Player 1, please input your selection!').toLowerCase();
let user2Selection = prompt('Player 2, please input your selection!').toLowerCase();

console.log(`user 1 selection: ${user1Selection}, user2 selected: ${user2Selection}`);

function rockPaperScisors(player1Selection, player2Selection){

    switch(player1Selection){
        case "rock":
            if(player2Selection == "rock"){
                return 'It\'s a tie';
            }else if(player2Selection == "paper"){
                return `Player 2 wins; ${player2Selection} DESTROYS ${user1Selection}`;
            }else{
                return `Player1 wins!; ${user1Selection} DESTROYS ${player2Selection}`;
            }

        case "paper":
            if(player2Selection == "rock"){
                return `Player1 wins!; ${user1Selection} DESTROYS ${player2Selection}`;
                
            }else if(player2Selection == "paper"){
                return 'It\'s a tie';

            }else if (player2Selection == "scisors"){
                return `Player 2 wins; ${player2Selection} DESTROYS ${user1Selection}`;
            }

        case "scisors":
            if(player2Selection == "rock"){
                `Player 2 wins; ${player2Selection} DESTROYS ${user1Selection}`;
            }else if(player2Selection == "paper"){
                return `Player1 wins!; ${user1Selection} DESTROYS ${player2Selection}`;
            }else{
                return 'It\'s a tie';
            }
    }
}

console.log(rockPaperScisors(user1Selection, user2Selection));