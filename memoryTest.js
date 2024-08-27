const quizQuestions = [
  {
    question: "1. What comes next in the sequence: 2, 4, 8, 16, ?",
    options: ["20", "24", "30"],
    answer: "20"
  },
  {
    question: "2. Which number is the odd one out: 3, 5, 7, 9, 11?",
    options: ["2", "5", "9"],
    answer: "9"
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

function startQuiz() {
  userName = prompt("Please enter your name:");
  if (!userName) {
    alert("Name is required to start the quiz.");
    return;
  }

  document.getElementById("start-button").style.display = "none";
  displayQuestion();
  startTimer();
}

function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");

  questionText.innerHTML = "";
  answerButtons.innerHTML = "";

  questionText.innerHTML = currentQuestion.question;

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("answer-button");
    answerButtons.appendChild(button);

    button.addEventListener("click", function() {
      checkAnswer(option);
    });
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    confirmEndQuiz();
  }
}


function confirmEndQuiz() {
  if (confirm("Quiz Completed! Would you like to submit your quiz?")) {
    endQuiz();
  }
}

function startTimer() {
  timerInterval = setInterval(function() {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;

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

function endQuiz() {
  clearInterval(timerInterval);

  const scorePercentage = (score / quizQuestions.length) * 100;

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

  localStorage.setItem("quizResults", JSON.stringify(results));

  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} out of ${quizQuestions.length}</p>
    <p>Score Percentage: ${scorePercentage}%</p>
    <a href="database.html">Track your progress</a>
  `;
}

document.getElementById("start-button").addEventListener("click", startQuiz);