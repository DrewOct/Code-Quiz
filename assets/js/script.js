var startBtn = document.querySelector("#startButton");
var quizPage = document.querySelector("#quizPage");
var start = document.querySelector("#start");
var highScore = document.querySelector("#highScore");
// return an array of questions
var questions = document.querySelectorAll(".question");
var qNumber = 0;
var seconds = 75;
var isGameRunning = false;

quizPage.style.display = "none";
highScore.style.display = "none";
document.querySelector("#correct").style.display = "none";
document.querySelector("#incorrect").style.display = "none";

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
    saveScore();
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
    saveScore();
  }
}

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

function saveScore() {
  isGameRunning = false;
  console.log("Save a score");
  highScore.style.display = "block";
  quizPage.style.display = "none";
}
startButton.addEventListener("click", startQuiz);
// Create start card
// EventHandler for button clicks
// Pagination for cards

function timer() {
  if (isGameRunning) {
    document.querySelector("#timer").textContent = seconds;
    seconds--;
    console.log(seconds);
    if (seconds <= 0) {
      saveScore();
    }
  }
}
setInterval(timer, 1000);
