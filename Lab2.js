//Take the previously created Rock Paper Scissors application and allow the user to play 3 times.

function gameStart(){

  //for loop to get 3 rounds of the game
  for (var round = 0; round < 3; round++) {
  var player1 = prompt("Round " + (round + 1) + " - Player 1, please enter rock, paper or scissors");

  var player2 = prompt("Round " + (round + 1) + " - Player 2, please enter rock, paper or scissors");
  var winner = getWinner(player1, player2);

  //error message if incorrect information is entered
  if (!isAcceptableChoice(player1) || !isAcceptableChoice(player2)) {
      alert("Error, try again");
      round; 
      continue;
  }

  //showing results and displaying winner

  if (winner === 0) {
      alert("Round " + (round + 1) + ": It's a tie!");
    } else {
      alert("Round " + (round + 1) + ": Player " + winner + " is the winner!");
    }
  }
}
//get the winner
function getWinner(choice1, choice2) 

//tie 
{
  if (choice1 === choice2) {
  return 0;
  }
//choices and their effects
  if ((choice1 === "rock" && choice2 === "scissors") ||
  (choice1 === "paper" && choice2 === "rock") ||
  (choice1 === "scissors" && choice2 === "paper")) {
  return 1;
  }else {
  return 2;
  }
}
//adding function for acceptable choices
function isAcceptableChoice(choice) {
return choice === "rock" || choice === "paper" || choice === "scissors";
}