const quizQuestions = [
  {
    question: "1. If you have 3 apples and you take away 2, how many do you have?",
    options: ["1", "2", "3"],
    answer: "3"
  },
  {
    question: "2. If a doctor gives you 3 pills and tells you to take one pill every half hour, how long would they last?",
    options: ["1 hour", "1.5 hours", "2 hours"],
    answer: "1 hour"
  },
  {
    question: "3. A farmer has 17 sheep. All but 9 of them die. How many sheep are left?",
    options: ["9", "8", "0"],
    answer: "9"
  },
  {
    question: "4. If you divide 30 by half and then add ten, what do you get?",
    options: ["25", "40", "70"],
    answer: "70"
  },
  {
    question: "5. How many sides does a circle have?",
    options: ["0", "1", "Infinite"],
    answer: "1"
  },
  {
    question: "6. What is the next number in the sequence: 1, 4, 9, 16, ...?",
    options: ["24", "25", "36"],
    answer: "25"
  },
  {
    question: "7. If you rearrange the letters 'CIFAIPC', you would have the name of a(n):",
    options: ["City", "Ocean", "Animal"],
    answer: "Ocean"
  },
  {
    question: "8. How many months have 28 days?",
    options: ["1", "12", "All of them"],
    answer: "All of them"
  },
  {
    question: "9. What is the missing number in the sequence: 2, 6, 12, 20, ...?",
    options: ["30", "24", "36"],
    answer: "30"
  },
  {
    question: "10. What has keys but can't open locks?",
    options: ["A piano", "A computer", "A treasure chest"],
    answer: "A piano"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;
let userName; // Variable to store the user's name

// Function to start the quiz
function startQuiz() {
  // Prompt for the user's name and store it
  userName = prompt("Please enter your name:");
  if (!userName) {
    alert("Name is required to start the quiz.");
    return;
  }

  document.getElementById("start-button").style.display = "none";
  displayQuestion();
  startTimer();
}

// Function to display a question and its options
function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");

  // Clear previous question and answer options
  questionText.innerHTML = "";
  answerButtons.innerHTML = "";

  // Display the current question
  questionText.innerHTML = currentQuestion.question;

  // Create answer buttons for each option
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("answer-button");
    answerButtons.appendChild(button);

    // Add click event listener to check the answer
    button.addEventListener("click", function() {
      checkAnswer(option);
    });
  });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Check if the selected answer is correct
  if (selectedOption === currentQuestion.answer) {
    score++;
  }

  // Move to the next question or end the quiz if all questions are answered
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    confirmEndQuiz();
  }
}

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(function() {
    timeLeft--;

    // Update the timer text
    document.getElementById("timer").textContent = timeLeft;

    // End the quiz if time runs out
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

function confirmEndQuiz() {
  if (confirm("Quiz Completed! Would you like to submit your quiz?")) {
    endQuiz();
  }
}

// Function to end the quiz
function endQuiz() {
  // Stop the timer
  clearInterval(timerInterval);

  // Calculate the score percentage
  const scorePercentage = (score / quizQuestions.length) * 100;

  // Determine the type of learner based on the score percentage
  let typeOfLearner;
  if (scorePercentage <= 30) {
    typeOfLearner = "Slow Learner";
  } else if (scorePercentage <= 60) {
    typeOfLearner = "Average Learner";
  } else {
    typeOfLearner = "Perfect Learner";
  }

  const results = {
    name: userName,
    score: score,
    percentage: scorePercentage,
    typeOfLearner: typeOfLearner
  };

  localStorage.setItem("observationQuizResults", JSON.stringify(results));

  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} out of ${quizQuestions.length}</p>
    <p>Score Percentage: ${scorePercentage}%</p>
    <a href="pbresult.html">Track your progress</a>
  `;
}

// Add event listener to start the quiz when the start button is clicked
document.getElementById("start-button").addEventListener("click", startQuiz);
