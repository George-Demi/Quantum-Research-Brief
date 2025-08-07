// /js/trivia.js
document.addEventListener("DOMContentLoaded", () => {
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  const feedback = document.getElementById("feedback");
  const nextBtn = document.getElementById("next-btn");
  const scoreContainer = document.getElementById("score-container");

  let currentQuestionIndex = 0;
  let score = 0;

  function showQuestion() {
    feedback.textContent = "";
    nextBtn.style.display = "none";
    const q = questions[currentQuestionIndex];

    questionContainer.innerHTML = `<p>${q.question}</p>`;
    optionsContainer.innerHTML = "";

    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("option-btn");
      btn.addEventListener("click", () => checkAnswer(option));
      optionsContainer.appendChild(btn);
    });
  }

  function checkAnswer(selected) {
    const correct = questions[currentQuestionIndex].answer;
    if (selected === correct) {
      feedback.textContent = "✅ Correct!";
      score++;
    } else {
      feedback.textContent = `❌ Wrong. Correct answer: ${correct}`;
    }
    nextBtn.style.display = "inline-block";
  }

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  });

  function showScore() {
    questionContainer.innerHTML = "";
    optionsContainer.innerHTML = "";
    feedback.textContent = "";
    nextBtn.style.display = "none";
    scoreContainer.innerHTML = `<h3>Your Score: ${score} / ${questions.length}</h3>`;
  }

  // Start the game
  showQuestion();
});
