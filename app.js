const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("user_score");
const compScore_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score_board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

rock_div.addEventListener('click', function() {
    game("rock");
});

paper_div.addEventListener('click', function() {
    game("paper");
});

scissors_div.addEventListener('click', function() {
    game("scissors");
});