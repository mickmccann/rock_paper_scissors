let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user_score");
const compScore_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3 );
    return choices[randomNumber];
}

function captWords(word) {
    if (word === 'rock') return 'Rock';
    if (word === 'paper') return 'Paper';
    return 'Scissors';
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `🏆 ${captWords(userChoice)} beats ${captWords(compChoice)}. You Win 🏆`
}

function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `😭 ${captWords(userChoice)} loses to ${captWords(compChoice)}. You lost 😭`
}

function draw(userChoice, compChoice) {
    result_p.innerHTML = `🥱 ${captWords(userChoice)} equals ${captWords(compChoice)}. It's a draw 🥱`
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, compChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, compChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, compChoice);
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