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
var startScreen = document.getElementById("start-screen");
var questionsSection = document.getElementById("questions");
var runningScore = 0;
var highScores = document.getElementById("high-scores");

// Audio elements
const correctAudio = new Audio("./assets/sfx/correct.wav");
const incorrectAudio = new Audio("./assets/sfx/incorrect.wav");

//The first view of the application displays a button used to start the quiz
//this is displayed in starter code



//Once the quiz begins, a countdown timer starts
// Function to start the quiz
function startQuiz() {// Start the countdown timer
  console.log("Start button clicked!");

  startScreen.classList.add("hide");

  // Show the first question section

  questionsSection.classList.remove("hide");

  startTimer();
  showQuestion();
}

// Function to start the countdown timer
//Based on code from lesson
function startTimer() {
  timeDisplay.textContent = timeLeft + ' seconds remaining';
  timerInterval = setInterval(function () {
    if (timeLeft > 1) {
      timeDisplay.textContent = timeLeft + ' seconds remaining';
      //decrement time by 1 second
      timeLeft--;
    } else if (timeLeft === 1) {
      timeDisplay.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else if (timeLeft <= 0) {
      //when timer runs out, clear the timer
      timeDisplay.textContent = 'Time is up!';
      clearInterval(timerInterval);
      endQuiz();
    }

  }, 1000); //interval every second
}

//show the first question
function showQuestion() {

  // Get the current question from the 'questions' array based on the 'currentQuestionIndex'.

  var currentQuestion = questions[currentQuestionIndex];
  // Set the text of the 'questionTitle' element to the current question's text.
  questionTitle.textContent = currentQuestion.question;

  // Clear the contents of the 'choicesContainer' element to prepare for displaying answer choices.
  choicesContainer.innerHTML = '';

  // Loop through each answer choice in the 'currentQuestion.choices' array.
  currentQuestion.choices.forEach(function (choice) {
    // Create a new 'button' element.
    var choiceButton = document.createElement("button");
    // Set the text content of the button to the current answer choice.
    choiceButton.textContent = choice;
    // Add a CSS class "choice" to the button.
    choiceButton.setAttribute("class", "choice");
    // Append the button to the 'choicesContainer' in dom to display it.
    choicesContainer.appendChild(choiceButton);
    //click for answer
    choiceButton.addEventListener("click", function () {
      checkAnswer(choice, currentQuestion.correctAnswer);
    });
  });
}

// Function to check the selected answer
function checkAnswer(selectedChoice, correctAnswer) {
  var correctAnswerElement = document.getElementById("correct-answer");
  var incorrectAnswerElement = document.getElementById("incorrect-answer");

  
  if (selectedChoice === correctAnswer) {
    correctAudio.play();
    correctAnswerElement.classList.remove("hide");
    incorrectAnswerElement.classList.add("hide");
    feedback.textContent = "Correct!";
    runningScore += 10;
    console.log(runningScore);
  } else {
    //If a question is answered incorrectly, additional time is subtracted from the timer
    incorrectAudio.play();
    incorrectAnswerElement.classList.remove("hide");
    correctAnswerElement.classList.add("hide");
    feedback.textContent = "Incorrect!";
    timeLeft -= 10;
  }
  setTimeout(function () {
    //shows message correct/incorrect for 1 second
    correctAnswerElement.classList.add("hide");
    incorrectAnswerElement.classList.add("hide");
  }, 1000);

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

//The game ends when all questions have been answered or the timer reaches zero
// Function to end the quiz
function endQuiz() {
  clearInterval(timerInterval);
  timeDisplay.textContent = "Quiz completed!";
  questionsSection.classList.add("hide");
  endScreen.classList.remove("hide");
  finalScore.textContent = runningScore;
  // Need to display score and initials
}

function submitScore() {
  console.log("end button clicked");

  localStorage.setItem("highScore", runningScore);
  // Get the user's initials from the input field
  var userInitials = initialsInput.value;

  // Create an object to store the user's score and initials
  var userScore = {
    initials: userInitials,
    score: runningScore,
  };

  console.log(userScore);

  // Retrieve the existing high scores from local storage (if any)
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Add the user's score and initials to the high scores array
  highScores.push(userScore);


  // Store the updated high scores array in local storage 
  //code from lesson
  localStorage.setItem("highScores", JSON.stringify(highScores));

  // Redirect to the high scores page
  window.location.href = "highscores.html";
}




//After the game ends, the user can save their initials and score to a highscores view using local storage









// Add an event listener to start the quiz. I was getting an errot so I have used page identifiers to make sure the 
document.addEventListener("DOMContentLoaded", function () {
  var pageIdentifier = document.body.getAttribute("data-page");

  if (pageIdentifier === "index") {
    startButton.addEventListener("click", startQuiz);
    submitButton.addEventListener("click", submitScore);
  } else if (pageIdentifier === "highscores") {
    //no other behaviour required
  }
});









// Add an event listener to start the quiz. I was getting an errot so I have used page identifiers to make sure the 
document.addEventListener("DOMContentLoaded", function () {
  var pageIdentifier = document.body.getAttribute("data-page");

  if (pageIdentifier === "index") {
    startButton.addEventListener("click", startQuiz);
    submitButton.addEventListener("click", submitScore);
  } else if (pageIdentifier === "highscorespage") {
    //no other behaviour required
  }
});






