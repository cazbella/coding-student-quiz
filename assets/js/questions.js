// The HTML document has a link for questions.js so I will use that for the questions. I will put the questions in an array of objects that I can access later.
const questions = [
    {
      question: "What does HTML stand for?",
      choices: ["Hyper Text Markup Language", "Highly Textured Modern Language", "Hyperlink and Text Markup Language"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "Which programming language is known for its use in web development?",
      choices: ["Python", "C++", "JavaScript"],
      correctAnswer: "JavaScript"
    },
    // Add more questions here
  ];
  
  // Export the questions array. 
  //from web the export statement is used to make functions, objects, or values available for use in other JavaScript files, commonly referred to as modules. It allows you to define what parts of a module should be accessible from other modules.
  export { questions };
  