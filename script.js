/* 
- track variables wins, losses, guess, cpuguess
- take string input from user: rock, paper, scissors -> input -> parse as number (1-3) -> guess variable
- choose random number 1-3 -> cpuguess variable
    - !! this number represents choices r/p/s respectively
- compare guesses
    - if the numbers are subsequent to each other, the higher number wins
    - if the numbers are not next to each other, the lower number wins
- add to wins or losses variables
- reset cpuguess and start a new game */



function game() {
    let playing = true;
    let wins = 0;
    let losses = 0;
    while (playing) {
        newGame();
    }
    if (!playing) console.log("Session ended with %d wins and %d losses.", wins, losses)

    function newGame() {
        let input;
        let guess;
        let cpuguess = Math.floor(Math.random()*3)+1; // 1 = rock, 2 = paper, 3 = scissors
    
        while (!guess) {
            input = prompt("Make a selection: Rock, Paper, or Scissors"); // take user input
            if (input.match(/rock/i)) guess = 1; //     /rock/i searches for rock without case-sensitivity
            else if (input.match(/paper/i)) guess = 2; // "someString" OR "sOMEstring" will return true under /somestring/i
            else if (input.match(/scissors/i)) guess = 3; // the syntax is "str" = /str/i   (no quotes!)
        }
    
        gameOver(gameLogic(guess, cpuguess));
        /* console.log("cpuguess: " + cpuguess);
        console.log("guess: " + guess); */
    }
    
    function gameOver(Results) {
        playing = confirm(Results+ "Wins: " + wins + " | Losses: " + losses + "\nPlay Again?");
    }

    function gameLogic(num1, num2) {
        if (num2+1 == num1) { ++wins; return "You Win!\n\n"; } // guess is higher, you win
        else if (num2-1 == num1) { ++losses; return "You Lose!\n\n"; } // guess is lower, you lose
        else if (num2-2 == num1) { ++wins; return "You Win!\n\n"; } // guess is lower, you win (Rock v. Scissors)
        else if (num2+2 == num1) {++losses; return "You Lose!\n\n";} // guess is higher, you lose (Scissors v. Rock)
        else if (num2 == num1) return "Draw!\n\n"; // same choices, draw
    }
}

game();
