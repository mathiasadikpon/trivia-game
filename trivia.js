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
      if (index >= questions.length) {
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

// Step 4: Handle the "New Question" Button

document.getElementById("questionBtn").addEventListener("click", () => {
  getTriviaQuestion()
    .then((question) => {
      currentQuestion = question;
      displayQuestion(currentQuestion);
    })
    .catch((error) => console.log(error));
});

// Step 5: Handle the "Submit Answer" Button
document.querySelector("#answerBtn").addEventListener("click", () => {
  let feedbackMessage;
  const userAnswer = answerDiv.value.trim().toLowerCase();
  if (
    currentQuestion && userAnswer ===
    currentQuestion.answer.trim().toLowerCase()
  ) {
    //feedbackDiv.textContent = `Correct!`;
    feedbackDiv.style.color = `green`;
    feedbackMessage = `Great job! Your answer is correct.`;
  } else {
    //feedbackDiv.innerHTML = `Wrong!`;
    feedbackDiv.style.color = `red`;
    feedbackMessage = `Sorry, that is incorrect. The correct answer is: "${currentQuestion.answer}". Try another question!`;
  }
  feedbackDiv.textContent = feedbackMessage;
});
