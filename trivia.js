// Global variables
// Call the first variable questionDiv and select the DOM element containing the #question id.
let questionDiv = document.querySelector("#question");
// Call the second variable answerDiv and select the DOM element containing the #answer id.
let answerDiv = document.getElementById("answer");
// Call the third variable feedbackDiv and select the DOM element containing the #feedback id.
let feedbackDiv = document.querySelector("#feedback");
// Create a fourth variable using let and call it currentQuestion, and give it an initial value of null. This variable will store the question that is returned from the Promise.
let currentQuestion = null;

// Step 2: Simulate Fetching a Random Trivia Question

function getTriviaQuestion() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Code to fetch random trivia will go here
      const index = Math.floor(Math.random() * questions.length);
      const question = questions[index];
      if (index > questions.length) {
        reject("An error occurred while fetching the trivia question.");
      } else {
        resolve(question);
      }
    }, 1000); // Delay of 1 second
  });
}

// Step 3: Display the Trivia Question
function displayQuestion(triviaQuestion) {
  questionDiv.textContent = triviaQuestion.question; // give new content to the div
  answerDiv.value = ""; // reset the answer field
  feedbackDiv.textContent = ""; // reset the feedback div
}
