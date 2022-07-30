var startBtn = document.querySelector("#startButton");
var quizPage = document.querySelector("#quizPage");
var start = document.querySelector("#start");
var highScore = document.querySelector("#highScore");
// return an array of questions
var questions = document.querySelectorAll(".question");
var qNumber = 0;

quizPage.style.display = "none";
highScore.style.display = "none";

// nextQuestion execute the hide and reveal animations
function nextQuestion() {
  questions[qNumber].style.display = "block";

  var question = questions[qNumber];
  var answers = question.querySelectorAll(".answer");
  console.log(answers);
  for (var i = 1; i < answers.length; i++) {
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
  console.log("incorrect");
  questions[qNumber].style.display = "none";

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

// move player to next question when answer correct
function correctAnswer() {
  ///handle correct answers
  console.log("correct");
  questions[qNumber].style.display = "none";

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
  quizPage.style.display = "block";
  for (var i = 1; i < questions.length; i++) {
    questions[i].style.display = "none";
  }
  start.style.display = "none";
  nextQuestion();
}

function saveScore() {
    console.log("Save a score")
    highScore.style.display = "block";
}
startButton.addEventListener("click", startQuiz);
// Create start card
// EventHandler for button clicks
// Pagination for cards
