// Quiz Questions Array
const quizQuestions = [
  { question: "What is the capital of India?", answer: "delhi" },
  { question: "What is the integer value of g for the earth?", answer: "9.81" },
  { question: "Who is known as the father of computer?", answer: "charles babbage" },
  { question: "Differentiation of x^3?", answer: "3x^2" },
  { question: "What is the chemical symbol for potassium?", answer: "k" }
];

// Function to Run the Quiz
function runQuiz() {
  let score = 0; // Score Initialization

  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question); // Prompt input

    if (userAnswer) {
      userAnswer = userAnswer.toLowerCase().trim(); // Normalize input
    }

    if (userAnswer === quizQuestions[i].answer) { // Check answer
      score++;
      alert("Correct! 🎉");
    } else {
      alert("Wrong ❌. The correct answer is: " + quizQuestions[i].answer.toUpperCase());
    }
  }

  // Final Score Display
  alert("Quiz Completed! 🏁\nYour Score: " + score + "/" + quizQuestions.length);
}

// Run Quiz
runQuiz();
