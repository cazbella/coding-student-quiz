
  
//The first view of the application displays a button used to start the quiz


//Clicking the 'Start Quiz' button displays a series of questions


//Once the quiz begins, a countdown timer starts


//If a question is answered incorrectly, additional time is subtracted from the timer


//The game ends when all questions have been answered or the timer reaches zero


//After the game ends, the user can save their initials and score to a highscores view using local storage

 
//  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//  var timeInterval = setInterval(function () {
//     // As long as the `timeLeft` is greater than 1
//     if (timeLeft > 1) {
//       // Set the `textContent` of `timerEl` to show the remaining seconds
//       timerEl.textContent = timeLeft + ' seconds remaining';
//       // Decrement `timeLeft` by 1
//       timeLeft--;
//     } else if (timeLeft === 1) {
//       // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//       timerEl.textContent = timeLeft + ' second remaining';
//       timeLeft--;
//     } else {
//       // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//       timerEl.textContent = '';
//       // Use `clearInterval()` to stop the timer
//       clearInterval(timeInterval);
//       // Call the `displayMessage()` function
//       displayMessage();
//     }
//   }, 1000);
// }

// // Displays the message one word at a time
// function displayMessage() {
 