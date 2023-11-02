
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
  console.log("Start button clicked!"); // Add this line
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
      timeDisplay.textContent = 'Time is up!';
      clearInterval(timerInterval);
     
    }
  }, 1000); //interval every second
}

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
    
    // Append the button to the 'choicesContainer' to display it.
    choicesContainer.appendChild(choiceButton);

    // Add a click event listener to the button to check the selected answer when it's clicked.
    choiceButton.addEventListener("click", function () {
      checkAnswer(choice, currentQuestion.correctAnswer);
    });
  });

  
}
showQuestion();



// Function to end the quiz
function endQuiz() {
  clearInterval(timerInterval);
  timeDisplay.textContent = "Quiz completed!";
  
  // Need to display score and initials
}

// Add an event listener to start the quiz when the "Start" button is clicked
startButton.addEventListener("click", startQuiz);
   

  // Show the first question
  // showQuestion();

  // Function to display a question





// Add an event listener to start the quiz
startButton.addEventListener("click", startQuiz);




//If a question is answered incorrectly, additional time is subtracted from the timer


//The game ends when all questions have been answered or the timer reaches zero


//After the game ends, the user can save their initials and score to a highscores view using local storage