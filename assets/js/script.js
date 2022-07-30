var startBtn = document.querySelector("#startButton");
var quizPage = document.querySelector("#quizPage");
var start = document.querySelector("#start");
var highScore = document.querySelector("#highScore");
// return an array of questions
var questions = document.querySelectorAll(".question");
var qNumber = -1;

quizPage.style.display = "none";
highScore.style.display = "none";

// nextQuestion execute the hide and reveal animations
function nextQuestion() {
  // increment qNumber by 1
  qNumber++;
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
  /// handle wrong answer
  console.log("incorrect");
  questions[qNumber].style.display = "none";

  // move on to next question
  nextQuestion();
}

// move player to next question when answer correct
function correctAnswer() {
  ///check answers
  console.log("correct");
  questions[qNumber].style.display = "none";

  // move on to next question
  nextQuestion();
}
function startQuiz() {
  quizPage.style.display = "block";
  for (var i = 1; i < questions.length; i++) {
    questions[i].style.display = "none";
  }
  start.style.display = "none";
  nextQuestion();
}

startButton.addEventListener("click", startQuiz);
// Create start card
// EventHandler for button clicks
// Pagination for cards
