// Code QuizMaster Javascript code

// Get references to the #start button element
var startBtn = document.querySelector("#start");

// create "containers" for each page
var doneEl = document.createElement("div");
var quizQuestionSetEl = document.createElement("div");
var highScoreDisplayEl = document.createElement("div");
var  = document.createElement("div");
var formEl = document.createElement("#highScoreDisplayForm");
var timerEl = document.getElementById("countdown");
var quizTime = 60;

var quizQuestionsEl= ;

// Initial quiz display requires link to high scores in top left corner 
// This information will be displayed from data stored on "All Done!" page of quiz


// timer has been reset and countdown begins when user starts quiz
function countdown = () {
var quizTime = 60;

var startQuiz = setInterval(function() {
// user answers questions until finished or time runs out
while (quizTime > 0)
// function to proceed through list of questions 
var 
for(var i =0; i < quizQuestions.length; i++ ) {

}      
quizQuestionSetEl 

// countdown for user to take quiz  (place in div in upper right hand corner)
  timerEl.textContent = quizTime + ' seconds';
  //decrement timer each second
  quizTime--;
}
// if user answers question incorrectly, display "wrong" beneath <ol> for question and subtract 10 secons from time

// if user answers question correctly, proceed to next set of questions

// if time = 0 before user has finished answering all questions, highScore value = 0.  display "try again next time"

// if time > 0 and user has answered all questions, display final score based on quiz-time 
var highScoreTime = document.querySelector("#quiz-time");

  }
countdown();
// User inputs initials after finishing quiz and initials are stored with highScoreTime in local storage
var highScorerInit = document.querySelector("#high-scorer");
var addScoreButton = document.querySelector("#add-score");

addScore.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create highScorer record from submission
  var highScorer = {
    highScoreTime: highScoreTime.value.trim(),
    highScoreInit: highScoreInit.value.trim()
};

  // set new submission to local storage 
  localStorage.setItem("highScorer", JSON.stringify(highScorer));
  
// High Scores page will feature a blank input field that displays up to top 3 scores, each of the top 3 numbers (so need ordered list here)

// add two buttons, one to Go Back to previous page, one to Clear High Scores
// create edit button
var goBackButtonEl = document.createElement("button");
goBackButtonEl.textContent = "Go Back";
goBackButtonEl.className = "btn edit-btn";
goBackButtonEl.setAttribute("", ());
highScoreDisplayEl.appendChild(goBackButtonEl);


var clearHighScoresEl = document.createElement("button");
clearHighScoresButtonEl.textContent = "Clear High Scores";
clearHighScoresButtonEl.className = "btn edit-btn";
clearHighScoresButtonEl.setAttribute("", ());
highScoreDisplayEl.appendChild(clearHighScoresButtonEl);


// Initial quiz display requires countdown timer in top right corner


// create countdown timer in top right corner: persistent and stores number that is allocated to score when Quiz is finished

// create function to begin quiz when "Start Quiz" button is clicked 
//var startQuiz() {} 

// for each question, created 4 ordered list items as buttons which change colour when clicked (eventListener and attribute change)
//answer "correct" or "wrong" after button pressed, under <hr>; adjust time if wrong
// proceed to next set of questions
// do this 5 times; stop early if timer runs to 0.  
// if time left when player is finished, time = score, otherwise 0 (while time>0)
// done page will display score and feature an input field for player to enter initials.  
//Score & Initials stored in Local storage. display top 3 scores - need function to update that

// Create ordered list element for each set of 4 questions
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// appendChild differently for each question?
};
startQuiz();


// Create a new task
startBtn.addEventListener("click", startQuiz);
  
// for edit and delete buttons
pageContentEl.addEventListener("click", );

// for changing the status
pageContentEl.addEventListener("change", );

// Attach event listener to restore timer to 60 once start quiz button is clicked
timerEl.addEventListener("click", function() {
  count++;
  setCounterText();
});

// Attach event listener to decrement button element
decrementEl.addEventListener("click", function() {
  // Action will fire if answer is "wrong"
    // if quiz answer is wrong
    quizTime = quizTime - 10;
    setCounterText();
  }
});
















// addEventListener('click,startQuiz()):