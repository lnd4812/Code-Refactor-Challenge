// Code QuizMaster Javascript code

// Get references to the #start button element
var startBtn = document.querySelector("#start");

// establish variables for use in running necessary questions
var quizSectionEl = document.querySelector(".question-section");
var quizQuestionsEl = document.querySelector("#quiz-questions");
var optionSelectEl = document.querySelector("#quiz-questions.choices");
var highScoreDisplayEl = document.querySelector("#high-scores");
var enterScorerInit = document.querySelector("#all-done");
var formEl = document.createElement("#highScoreDisplayForm");
var timerEl = document.querySelector(".timer");
var quesNum = 0; //start run through of questions at first item in array
var quizTime = 60; // initiate clock at 60 seconds
var score = ""; // score is empty at first run through


// create array rom querySelector element to store questions and answers with inner array for quiz choices     
var quizQuestionSetEl = [
{
  question: "Commonly used data types do NOT include:",
  choices: ["Strings", "Booleans", "Alerts", "Numbers"],
  correctChoice: "Alerts"
},
{
  question: "The condition in an if/else statement is enclosed in:",
  choices: ["Quotes", "Parenthesis", "Curly Brackets", "Square Brackets"],
  correctChoice: "Parenthesis"
},
{
  question: "Arrays in JavaScript can be used to store:",
  choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
  correctChoice: "All of the above"
},
{
  question: "String values must be enclosed within ______ when being assigned to variables",
  choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
  correctChoice: "Quotes"
},
{
  question: "A very useful tool used during development and debugging for printing content to the debugger is:",
  choices: ["JavaScript", "Terminal Bash", "for loops", "console.log"],
  correctChoice: "console.log"
}
]
// countdown for user to take quiz  (place in div in upper right hand corner)
timerEl.textContent = quizTime + ' seconds';
//decrement timer each second
quizTime--;



// start the process when "start quiz" button pressed 
startBtn.addEventListener("click", startQuiz);

// start quiz will call timer function to begin countdown 
function quizTimer() {
  // section is not visible until start button clicked
  quizQuestionsSetEl.style.display = "none";

  // call first question, position 0 in array, to start quiz
var quizTimeDisplay = setInterval(function() {
  // user answers questions until finished or time runs out
  If (quizTime <= 0 || quesNum === quizQuestions.length); {
    // user is out of time or finished the quiz, 
    clearInterval(quizTimeDisplay); 
    document.getElementById("timer").textContent = "The quiz has ended";
    // go to scorer Initial Input field
    inputScore();
    } else {
      document.getElementById("timer").textContent = "Time remaining";
    } 
 // decrease time by 1 second
quizTime = quizTime--
  }, 1000);
};
 
// quiz question process 
function quizRunThrough(quesNumber) {// function and # of question)
  if (quizTime > 0 && quizQuestions.length < 5) {
    document.querySelector("#quiz-questions").textContent = quizQuestions[quesNum].question;
    // set answer selection to empty
    answerOptionEl.innerHTML = ""; 
  // create buttons for answer options for each question in sequence
  for(var i =0; i < quizQuestions.length; i++ ) {
    var option = document.createElement('button');
    option.setAttribute("class", "option-btn"); 
    option.setAttribute("value", quizQuestions[quesNum].choices[i]);
    option.textContent = quizQuestions[quesNum].choices[i];
    option.onclick = optionCheck;
    answerOptionEl.appendChild(option);
  };
  }  else { 
    inputScore();
}

// check if answer correct or wrong
function optionCheck();
//if user answers question incorrectly, display "wrong" beneath 
  if(quizQuestions)
// create element with text.content - wrong answer. you lose 10 seconds, quizTime - 10
// if user answers question correctly, display correct and proceed to next question - use index #

// if time = 0 before user has finished answering all questions, highScore value = 0.  display "try again next time"

// if time > 0 and user has answered all questions, display final score based on quiz-time 
// add function to end game and go to next 
var highScoreTime = document.querySelector("#quiz-time");
// style display = "none";
// then style display = "inherit"
  }
countdown();
// User inputs initials after finishing quiz and initials are stored with highScoreTime in local storage
// need to ensure user enters 2 initials only


var highScorerInit = document.querySelector("input[name='high-scorer']").value
var addScoreButton = document.querySelector("#add-score");

function addHighScorer(highScorerInit) {
  localStorage.setItem('highScorerInit', highscorer)
}

function displayHighScorer() {
  var highestScorer = localStorage.getItem('high-scorer')
  console.log(highestScorer)
}
addScore.addEventListener("click", function(event) {
    
  // create highScorer record from submission
  var highScorer = {
    highScoreTime: highScoreTime.value.trim(),
    highScoreInit: highScoreInit.value.trim()
};

if (highScoreInit.length > 2) {
  alert("This field is limited to 2 characters only; please try again");
  return false;
{
  else {

  // set new submission to local storage 
  localStorage.setItem("highScorer", JSON.stringify(highScorer));
};  
// High Scores page will feature a blank input field that displays up to top 3 scores, each of the top 3 numbers (so need ordered list here)

// set event listeners for click of either Go Back or Clear High Scores button on High Scores page
// create edit button
var goBackButton = document.querySelector("#go-back");

var clearHighScores = document.querySelector("#clear-scores");

var highScoreDisplayEl = function (event) {
  var targetEl = event.target;
  // if Go Back button is pressed, return to the previous screen
  if(targetEl.matches("#go-back")) {
    <a href="/"></a>
  } else { // clear scores button clicked 
    document.querySelector("input[name='high-scorer']").value = "";

}
//Score & Initials stored in Local storage. display top 3 scores - need function to update that

startQuiz();


// add event listener to start quiz when button clicked

  
// for back button
goBackButton.addEventListener("click", goback );

// Attach event listener to restore timer to 60 once start quiz button is clicked
clearHighScores.addEventListener("click", clearscores);
  
// Attach event listener to decrement button element
decrementEl.addEventListener("click", function() {
  // Action will fire if answer is "wrong"
    // if quiz answer is wrong
    quizTime = quizTime - 10;
    setCounterText();
  }
});
















// addEventListener('click,startQuiz()):