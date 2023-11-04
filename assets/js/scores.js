document.addEventListener("DOMContentLoaded", function () {
  var highscoresList = document.getElementById("highscores");
  var clearButton = document.getElementById("clear"); // Get the "Clear Highscores" button

  // Retrieve high scores from local storage
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Sort the high scores by score (from highest to lowest)
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });

  // Populate the ordered list with high scores
  highScores.forEach(function (score, index) {
    var listItem = document.createElement("li");
    listItem.textContent = `${score.initials}: ${score.score}`;
    highscoresList.appendChild(listItem);
  });

  // Add an event listener to the "Clear Highscores" button
  clearButton.addEventListener("click", function () {
    // Clear the high scores from local storage
    localStorage.removeItem("highScores");

    // Clear the highscoresList element by removing all its parts
    while (highscoresList.firstChild) {
      highscoresList.removeChild(highscoresList.firstChild);
    }
  });
});
