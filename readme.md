The Code-Quiz Application:
Upon loading the page, a prompt to start a quiz is given, explaining the rules.  Incorrect answers cause the timer to subtract 10 seconds, which reduces the amount of time left to complete the quiz.  The quiz begins with 75 seconds on the clock.
Each question appears on a different "card", with a list of multiple choice answers.
Upon clicking on an answer choice, two things happen:  1) you are given feedback as to whether your reply was correct or not; and 2) you are moved to the next question.
Your scores are kept in local storage, and after 75 seconds is up or you have answered the last question, a page appears with your final score and a prompt to enter your initials and save your scores.
Upon clicking save, you are taken to the next card, which tabulates your score with your initials, followed by the score.  On this final card, two buttons appear, which give you the option of clearing your high score and/or going back to the start card.  Optionally, you can refresh the page, which accomplishes the same as clicking Clear Highscores, followed by Go Back.

Technologies used:  JavaScript, DOM, CSS