document.addEventListener("DOMContentLoaded", function () {
  var highscoresList = document.getElementById("highscores");

  // Retrieve high scores from local storage
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Sort the high scores by score (from highest to lowest)
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });

  // Populate the ordered list with high scores
  highScores.forEach(function (score, index) {
    var listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${score.initials}: ${score.score}`;
    highscoresList.appendChild(listItem);
  });
});

// add button to remove score at end 



// var startButton = document.getElementById("start");
// var timeDisplay = document.getElementById("time");
// var questionTitle = document.getElementById("question-title");
// var choicesContainer = document.getElementById("choices");
// var endScreen = document.getElementById("end-screen");
// var finalScore = document.getElementById("final-score");
// var initialsInput = document.getElementById("initials");
// var submitButton = document.getElementById("submit");
// var feedback = document.getElementById("feedback");
// var startScreen = document.getElementById("start-screen");
// var questionsSection = document.getElementById("questions");
// var runningScore = 0;

// // Get DOM elements
// var highscoresList = document.getElementById("highscores");
// var clearButton = document.getElementById("clear");
// var scoreEntry = {
//   score: runningScore,
//   initials: initialsInput,
// };

// // Load highscores from local storage on page load
// window.onload = function () {
//   var highScore = localStorage.getItem("highScore");

//   if (highScore !== null) {
//     // Display the high score in your highscores page
//     // You can add it to an ordered list or any other way you prefer
//     var highscoresList = document.getElementById("highscores");
//     var listItem = document.createElement("li");
//     listItem.textContent = "High Score: " + highScore;
//     highscoresList.appendChild(listItem);
//   }
// };


// //need to sort high scores from highest to lowest

// // change the high scores to strings


// //store scores in local storage


// // Add an event listener to the clear button
// // clearButton.onclick = function () {
 
// // };

// function clearHighscores() {
 
// }





// // submitButton.addEventListener("click", startQuiz);