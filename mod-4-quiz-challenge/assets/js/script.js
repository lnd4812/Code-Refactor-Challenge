// Code QuizMaster Javascript code

// Get references to the #start button element
var startBtn = document.querySelector("#start");

// create "containers" for each page
var quizQuestionSetEl = document.querySelector("#quiz-questions");
var highScoreDisplayEl = document.querySelector("#high-scores");
var formEl = document.createElement("#highScoreDisplayForm");
var timerEl = document.getElementById("");
var quizTime = 60;
var score = 0;

var quizQuestionsEl= ;

// Initial quiz display requires link to high scores in top left corner 
// This information will be displayed from data stored on "All Done!" page of quiz


// timer has been reset and countdown begins when user starts quiz
function quizTimer = () {
// section is not visible until start button clicked
  quizQuestionsSetEl.style.display = "none";
// call first question, position 0 in array, to start quiz
questionNumber(0);
var quizTimeDisplay = setInterval(function() {
// user answers questions until finished or time runs out
  If (quizTime <= 0 || quizQuestions.length === 5) 
  // user is out of time or finished the quiz, 
  { clearInterval(quizTimeDisplay); 
    document.getElementById("timer").textContent = "The quiz has ended";
    // go to scorer Initial Input field
    }  else {
      document.getElementById("timer").textContent = "Time remaining";
    } 
 // decrease time by 1 second
quizTime = quizTime--
  }, 1000);
};
 
// quiz question process 
function quizRunThrough() {// function and # of question)
  if (quizTime > 0 && quizQuestions.length < 5) {
    document.querySelector()//text.content the question at the index #
    // set answer selection to empty
    answerOptionEl.innerHTML = ""; // can it just be ""?
  }
 
for(var i =0; i < quizQuestions.length; i++ ) {
  var option = document.createElement('button');
  option.setAttribute("class", "option-btn"); 
  // review what this is
  option.setAttribute("value", questions[number].choices[]);
  // add coding to change button color on click, check answer and response correct or wrong
} else {
  // call function to take user to All Done page
  inputScore();
}


// create array to store questions and answers with inner array for quiz choices     
quizQuestionSetEl = 
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
// countdown for user to take quiz  (place in div in upper right hand corner)
  timerEl.textContent = quizTime + ' seconds';
  //decrement timer each second
  quizTime--;
}
// if user answers question incorrectly, display "wrong" beneath 
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
var highScorerInit = document.querySelector("#high-scorer");
var addScoreButton = document.querySelector("#add-score");

addScore.addEventListener("click", function(event) {
    
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


// appendChild differently for each question?
};

startQuiz();


// add event listener to start quiz when button clicked
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