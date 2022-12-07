const computerChoice = ["rock", "paper", "scissors"];
const computerName = "system";
alert('Lets have some fun!Welcome to the Rock Paper Scissor game')
const userName = prompt(`This is a game of 5 rounds!  please enter your Name.`);
let computerScore = 0;
let userScore = 0;
const winnerString = (round, winner) => `The winner of round ${round} is ${winner}`;
function playerSelection()
{
   let playerChoice = "";
   let validChecker = "";
   do {
       playerChoice = prompt(`Enter your choice: Rock, Paper, Scissors. ${validChecker}`, "");
       if(playerChoice) {
           playerChoice = playerChoice.trim();
           playerChoice = playerChoice.toLowerCase();
       }
       validChecker = computerChoice.indexOf(playerChoice)<0 ? "Please enter a valid option" : "";
   } 
   while(computerChoice.indexOf(playerChoice)<0);
   return playerChoice;
}
function computerSelect()
 {
   return computerChoice[Math.floor(Math.random() * 3)].toLowerCase();
}
let Result = function(computerSelect, playerSelection, round)
 {
    if(computerSelect == playerSelection)
     {
        return `It is a draw for round ${round}`;
    } 
    else if (playerSelection == "rock") 
    {
        if(computerSelect == "scissors") {
            userScore++;
            return winnerString(round, userName);
        } else {
            computerScore++;
            return winnerString(round, computerName);
        }
    } 
    else if (playerSelection == "paper") 
    {
        if(computerSelect == "rock") 
        {
            userScore++;
            return winnerString(round, userName);
        } else
        {
            computerScore++;
            return winnerString(round, computerName);
        }
    }
     else if (playerSelection == "scissors")
      {
        if(computerSelect == "paper") {
            userScore++;
            return winnerString(round, userName);
        } 
        else
         {
            computerScore++;
            return winnerString(round, computerName);
        }
    }
}
let winner = function(userScore,computerScore) {
    console.log(`The final result is: ${userName}  with ${userScore} points, ${computerName} with ${computerScore} points `)
    if (userScore == computerScore) {
        return "It's a draw!"
    } else if (computerScore > userScore) {
        return `The winner of the game is the ${computerName}!!`
    } else {
        return `The winner of the game is ${userName}!!`;
    }
}
function game()
 {
    for (let i=1; i<=5; i++) {
        playGame(i);
    }
    console.log(winner(userScore,computerScore));
}
function playGame(round) {
    let userSelection = playerSelection();
    console.log(`${userName}'s selection is: `, userSelection);
    const computerSelection = computerSelect();
    console.log(`${computerName}'s selection is: `, computerSelection);
    console.log(Result(computerSelection, userSelection, round));
}
game();
