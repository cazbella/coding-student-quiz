
// Other variables
var currentQuestionIndex = 0;
var timerInterval;
var timeLeft = 60; // Initial time in seconds

// Get DOM elements
var startButton = document.getElementById("start");
var timeDisplay = document.getElementById("time");
var questionTitle = document.getElementById("question-title");
var choicesContainer = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var feedback = document.getElementById("feedback");

// Audio elements
const correctAudio = new Audio("./assets/sfx/correct.wav");
const incorrectAudio = new Audio("./assets/sfx/incorrect.wav");
  
//The first view of the application displays a button used to start the quiz
//this is displayed in starter code



//Once the quiz begins, a countdown timer starts
// Function to start the quiz
function startQuiz() {// Start the countdown timer
  startTimer();

}

  // Function to start the countdown timer
function startTimer() {
  timerInterval = setInterval(function () {
    if (timeLeft > 1) {
      timeDisplay.textContent = timeLeft + ' seconds remaining';
      //decrement time by 1 second
      timeLeft--;
    } else if (timeLeft === 1) {
      timeDisplay.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      //when timer runs out, clear the timer
      timeDisplay.textContent = '';
      clearInterval(timerInterval);
     
    }
  }, 1000); //interval every second
}

// Add an event listener to start the quiz when the "Start" button is clicked
startButton.addEventListener("click", startQuiz);
   

  // Show the first question
  // showQuestion();



// Add an event listener to start the quiz
startButton.addEventListener("click", startQuiz);




//If a question is answered incorrectly, additional time is subtracted from the timer


//The game ends when all questions have been answered or the timer reaches zero


//After the game ends, the user can save their initials and score to a highscores view using local storage