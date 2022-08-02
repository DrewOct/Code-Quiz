// declare variables
var startBtn = document.querySelector("#startBtn");
var start = document.querySelector("#start");
var quizPage = document.querySelector("#quizPage");
var questions = document.querySelectorAll(".question");
var highScore = document.querySelector("#highScore");
var saveBtn = document.querySelector("#saveBtn");
var restartBtn = document.querySelector("#restartBtn");
var qNumber = 0;
var seconds = 75;
var score = 0;
var isGameRunning = false;
var leaderBoard = [];

class LeaderboardEntry {
  constructor(initials, score) {
    this.initials = initials;
    this.score = score;
  }
}
class TimedLeaderBoardEntry extends LeaderboardEntry {
  constructor(initials, score, timer) {
    super(initials, score);
    this.timer = timer;
  }
}
var jimmysEntry = new TimedLeaderBoardEntry("JG", 100, 45);
var bobsEntry = new TimedLeaderBoardEntry("BP", 50, 10);

quizPage.style.display = "none";
highScore.style.display = "none";
document.querySelector("#correct").style.display = "none";
document.querySelector("#incorrect").style.display = "none";
// startquiz page begin
function startQuiz() {
  seconds = 75;
  isGameRunning = true;
  quizPage.style.display = "block";
  for (var i = 1; i < questions.length; i++) {
    questions[i].style.display = "none";
  }
  start.style.display = "none";
  nextQuestion();
}

startBtn.addEventListener("click", startQuiz);

// nextQuestion execute the hide and reveal animations
function nextQuestion() {
  questions[qNumber].style.display = "block";

  var question = questions[qNumber];
  var answers = question.querySelectorAll(".answer");
  console.log(answers);
  for (var i = 0; i < answers.length; i++) {
    // add number to answer choices
    answers[i].textContent = i + 1 + ". " + answers[i].textContent;
    if (answers[i].classList.contains("correct")) {
      answers[i].addEventListener("click", correctAnswer);
    } else if (answers[i].classList.contains("incorrect")) {
      answers[i].addEventListener("click", incorrectAnswer);
    }
  }
}

// progression when answer incorrect
function incorrectAnswer() {
  /// handle incorrect answer
  questions[qNumber].style.display = "none";
  document.querySelector("#correct").style.display = "none";
  document.querySelector("#incorrect").style.display = "block";
  seconds -= 10;
  // increment qNumber by 1
  qNumber++;
  // if question is not last question, call nextQuestion
  if (qNumber < questions.length && seconds > 0) {
    nextQuestion();
    // if last question, give player option to save score
  } else {
    highScorePage();
  }
}

// move player to next question when answer correct
function correctAnswer() {
  ///handle correct answers
  questions[qNumber].style.display = "none";
  document.querySelector("#correct").style.display = "block";
  document.querySelector("#incorrect").style.display = "none";

  // increment qNumber by 1
  qNumber++;
  // if question is not last question, call nextQuestion
  if (qNumber < questions.length) {
    nextQuestion();
    // if last question, give player option to save score
  } else {
    highScorePage();
  }
}

function highScorePage() {
  isGameRunning = false;
  console.log("Save a score");
  highScore.style.display = "block";
  quizPage.style.display = "none";
  document.querySelector("#correct").style.display = "none";
  document.querySelector("#incorrect").style.display = "none";
}
startBtn.addEventListener("click", startQuiz);

function timer() {
  if (isGameRunning) {
    document.querySelector("#timer").textContent = seconds;
    seconds--;
    console.log(seconds);
    if (seconds <= 0) {
      highScorePage();
    }
  }
}
setInterval(timer, 1000);

function saveScore() {
  var initialsTextBox = document.querySelector("#initials");
  if (
    initialsTextBox.value &&
    initialsTextBox.value.length > 0 &&
    initialsTextBox.value.length <= 3
  ) {
    var entry = new TimedLeaderBoardEntry(
      initialsTextBox.value,
      score,
      seconds
    );
    leaderBoard.push(entry);
    leaderBoard.sort(compareScores);
    localStorage.setItem("leaderBoard", JSON.stringify(leaderBoard));
  }
}
saveBtn.addEventListener("click", saveScore);
function compareScores(a, b) {
  return b.score - a.score;
}

function restartBtnClicked() {
    console.log("Go Back Button Clicked!")
}

// window.onload=function() {
//     var restartBtn = document.getElementsByClassName("restartBtn");
    
// }
restartBtn.addEventListener("click", startQuiz);
