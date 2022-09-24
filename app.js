let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user_score");
const compScore_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score_board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3 );
    return choices[randomNumber];
}

function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
}

function lose() {
    console.log("You lose!");
}

function draw() {
    console.log("Draw!");
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win();
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw();
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
    });
    
    paper_div.addEventListener('click', function() {
        game("paper");
    });
    
    scissors_div.addEventListener('click', function() {
        game("scissors");
    });
}
main();