//adding event listener here to deal with error. Web says this ensures DOM is fully loaded.

document.addEventListener("DOMContentLoaded", function () {
  var highscoresList = document.getElementById("highscores");

  // Retrieve high scores from local storage
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Sort the high scores by score (from highest to lowest)
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });

  // Populate the ordered list with high scores
  //code from lesson 
  highScores.forEach(function (score, index) {
    var listItem = document.createElement("li");
    listItem.textContent = `${score.initials}: ${score.score}`;
    highscoresList.appendChild(listItem);
  });
});

//need function to clear high scores
//event listener on clear highscores button
//button to clear individual high scores?

//need key event to make enter work on buttons 

