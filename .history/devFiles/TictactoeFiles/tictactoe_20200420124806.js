// var winningCombinations = {
//     // userchoice: computerchoice
//     rock: 'scissors', // you win
//     paper: 'rock',    // you win
//     scissors: 'paper' // you win
// random words should be put in here and converted to morse code. the computer should evaluate if your letter box matches the randomized word to win the round. 
// };
const ticTacToeGame = new TicTacToeGame();
ticTacToeGame.start();


// creates new game
function TicTacToeGame() {
    const board = new Board();
    const humanPlayer = new HumanPlayer();
    const computerPlayer = new ComputerPlayer();
    let turn = 0
        this.start = function(){
// This sets up the functions of the baord, players and turns.
// making sure you wathcing of there are any changes in position, because that woudl mean it is the next players turn. We do this by using a mutationObserver
const config = {childList:true};
const  observer = new MutationObserver(() => takeTurn());
// now adding the observer to the board.positions so it can run through each (for each function) one to check for mutations. if there are mutations, then we call the take turn function. 
board.positions.forEach((el) => observer.observe(el, config));
takeTurn();
        }
        function takeTurn(){
if (turn % 2 ===0 ){

}

            Turn++;
            //the above determines who turn it is. and tells the player pr computer to take their turn.  

        }

 }



//  let mutationObserver = new MutationObserver(function(mutations) {
//     mutations.forEach(function(mutation) {
//       console.log(mutation);
//     });
//   });

//  
 function Board(){
this.positions = Array.from($(".cellBOne"));
    console.log(this.positions);
 } 

    

 function HumanPlayer(){
     
}

function ComputerPlayer(){
     
}