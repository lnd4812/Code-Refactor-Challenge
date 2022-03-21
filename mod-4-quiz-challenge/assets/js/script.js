// Code QuizMaster Javascript code

// Get references to the #start button element
var startBtn = document.querySelector("#start");

// establish variables for use in running necessary questions
var quizSectionEl = document.querySelector(".question-container"); //centerContainer
// centerContainerEl ".center container"
var quizQuestionsEl = document.querySelector("#quiz-questions"); //questions
//questions  #questions
var optionSelectEl = document.querySelector("#the-options"); //questionChoice
//questionChoiceEl #question-choice
var highScoreDisplayEl = document.querySelector("#high-scores"); //endContainer
// end container #.end container
var enterScorerInit = document.querySelector("#all-done"); //initials?
// Initials set to empty string
var quesNum = 0; //start run through of questions at first item in array //currentIndex
// current index
var quizTime = 60; // initiate clock at 60 seconds - //timeLeft
// timeLeft
var finalScore = ""; // score is empty at first run through//score
// score


// create array rom querySelector element to store questions and answers with inner array for quiz choices 
// questions    
var quizQuestionsEl = [
  // questions
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

// start the process when "start quiz" button pressed 
startBtn.addEventListener("click", startQuiz);
// startButton / timerStart

// start quiz will call timer function to begin countdown 
function quizTimer() { //timerStart
  // section is not visible until start button clicked
  quizQuestionsSetEl.style.display = "none"; //centerContainer
  // call first question, position 0 in array, to start quiz
  quizRunThrough(0); // getQuestion
  //getQuestion
  // start timer
  var quizTimeDisplay = setInterval(function() { 
        // countdowntime
    // user answers questions until finished or time runs out
    If (quizTime <= 0 || quesNum === quizQuestions.length); { // if timeLife , = 0, 
      // if timeleft < = 0 // currentIndex ===5
      // user is out of time or finished the quiz, 
      clearInterval(quizTimeDisplay); //countdowntimer
      document.getElementById("timer").textContent = "The quiz has ended. Thank you for playing.";
      // go to scorer Initial Input field
      inputScore(); //endgame
    } else {
      document.getElementById("timer").textContent = quizTime;
    } 
    // decrease time by 1 second
    quizTime--;
    }, 1000);
};
 
// quiz question process 
function quizRunThrough(quesNum) {// function and # of question)
  //get question(index)
  // if there is still time left from the last user but all questions have been asked, reset to empty to start again
  if (quizTime > 0 && quizQuestions.length > 4) {
    //timeleft
    document.querySelector("#the-questions").textContent = quizQuestions[i].question; //#question-text, questions[i].question
    optionSelectEl.innerHTML = ""; 
  // create buttons for answer options for each question in sequence
  for(var i = 0; i < quizQuestions.length; i++ ) {
    var option = document.createElement("button");
    option.setAttribute("class", "option-btn"); 
    option.setAttribute("value", quizQuestions[quesNum].choices[i]);
    option.textContent = quizQuestions[quesNum].choices[i];
    option.onclick = checkResult;
    answerOptionEl.appendChild(option);
    };
  } else { 
      inputScore();
}
// check if user answered correctly
function checkResult();
 //if user answers question incorrectly, display "wrong" and dock 10 seconds from time, otherwise proceed to next question 
  if(answerOptionEl != correctChoice) {
    alert("Sorry, wrong answer! You lose 10 seconds from time remaining.");
    quizTime = quizTime - 10;
  } else {
    alert("Correct!");
    //index increased by one after last for loop; check if max reached, if not, next set of questions, otherwise proceed to All Done page to check score and enter initials
    if (quesNum < = quizQuestions.length) {
      quizRunThrough(quesNum);
    } else {
      inputScore();
    }
  }

quizTimer();

// Proceed to All Done page to check score and enter initials
// if time = 0 before user has finished answering all questions, highScore value = 0.  display "try again next time"

function inputScore() {
// if time > 0 and user has answered all questions, display final score based on quiz-time 
  yourScore = quizTime;
  optionSelectEl.style.display = none;
  //reset question index to empty
  quizQuestionsEl.innerHTML = "";
  //reveal All Done div to display input field and score
  enterScorerInitEl.style.display = "inherit";
  document.getElementbyId("yourScore").textContent = score;  }

// User inputs initials after finishing quiz and initials are stored with highScoreTime in local storage
// need to ensure user enters 2 initials only

var highScorerInit = document.querySelector("input[name='high-scorer']").value;
if (highScorerInit.length > 2) {
  alert("Only 2 initials are accepted. Please reenter.");
} else
  var addScore = document.querySelector("#add-score");
  localStorage.setItem("addScore", score);
} localStorage.setItem(highScorerInit', highscorer);
}

function displayHighScorer() {
  var highestScorer = localStorage.getItem('high-scorer')
  console.log(highestScorer)
}

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