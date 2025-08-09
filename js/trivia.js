// /js/trivia.js
document.addEventListener("DOMContentLoaded", () => {
  // ----- DOM refs -----
  const categoryPicker   = document.getElementById("category-picker");
  const questionContainer = document.getElementById("question-container");
  const optionsContainer  = document.getElementById("options-container");
  const feedback          = document.getElementById("feedback");
  const nextBtn           = document.getElementById("next-btn");
  const scoreContainer    = document.getElementById("score-container");
  const progressBar       = document.getElementById("progress-bar");
  const progressTrack     = document.getElementById("progress-track");
  const progressText      = document.getElementById("progress-text");

  // ----- State -----
  let currentQuestionIndex = 0;
  let score = 0;
  let hasAnswered = false;
  let currentCategory = "All";
  let runQuestions = []; // active pool for the current run

  // ----- Utilities -----
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function allQuestionsFromSets() {
    // Flattens QUESTION_SETS into a single array
    return Object.values(QUESTION_SETS).flat();
  }

  // ----- Progress -----
  function updateProgress() {
    const total = runQuestions.length || 1;
    const current = Math.min(currentQuestionIndex, total);
    const pct = Math.round((current / total) * 100);
    if (progressBar) progressBar.style.width = `${pct}%`;
    if (progressTrack) progressTrack.setAttribute("aria-valuenow", pct);

    if (progressText) {
      if (current < total) {
        progressText.textContent = `Question ${current + 1} / ${total}`;
      } else {
        progressText.textContent = `Done! ${total} / ${total}`;
      }
    }
  }

  // ----- Category UI -----
  function buildCategoryButtons() {
    if (!categoryPicker) return;
    categoryPicker.innerHTML = "";


    // Other categories from QUESTION_SETS keys
    const categories = Object.keys(QUESTION_SETS);
    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.textContent = cat;
      btn.classList.add("category-btn");
      btn.addEventListener("click", () => startCategory(cat));
      categoryPicker.appendChild(btn);
    });
  }

function startCategory(cat) {
  currentCategory = cat;
  const pool = (QUESTION_SETS[cat] || []);
  runQuestions = shuffle(pool);
  currentQuestionIndex = 0;
  score = 0;
  scoreContainer.innerHTML = "";

  // Hide category view, show quiz
  document.getElementById("category-view").style.display = "none";
  document.getElementById("quiz-view").style.display = "block";
  document.getElementById("score-container").style.display = "none";

  showQuestion();
  updateProgress();
}
  function markActiveCategory(cat) {
    if (!categoryPicker) return;
    const btns = categoryPicker.querySelectorAll(".category-btn");
    btns.forEach(b => b.classList.remove("active"));
    const match = Array.from(btns).find(b => b.textContent === cat);
    if (match) match.classList.add("active");
    if (cat === "All") {
      const allBtn = Array.from(btns).find(b => b.textContent === "All");
      if (allBtn) allBtn.classList.add("active");
    }
  }

  // ----- Core quiz flow -----
  function showQuestion() {
    // Guard: no questions in this category
    if (!runQuestions.length) {
      questionContainer.innerHTML = `<p>No questions available in "${currentCategory}".</p>`;
      optionsContainer.innerHTML = "";
      feedback.textContent = "";
      nextBtn.style.display = "none";
      updateProgress();
      return;
    }

    hasAnswered = false;
    feedback.textContent = "";
    nextBtn.style.display = "none";

    const q = runQuestions[currentQuestionIndex];
    const shuffledOptions = shuffle(q.options);

    questionContainer.innerHTML = `<p>${q.question}</p>`;
    optionsContainer.innerHTML = "";

    shuffledOptions.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("option-btn");
      btn.addEventListener("click", () => {
        if (hasAnswered) return;  // one answer only
        hasAnswered = true;
        checkAnswer(option);
        // Disable all option buttons after the first click
        optionsContainer.querySelectorAll(".option-btn").forEach(b => { b.disabled = true; });
      });
      optionsContainer.appendChild(btn);
    });

    updateProgress();
  }

  function checkAnswer(selected) {
    const correct = runQuestions[currentQuestionIndex].answer;
    if (selected === correct) {
      feedback.textContent = "Correct!";
      score++;
    } else {
      feedback.textContent = `Wrong. Correct answer: ${correct}`;
    }
    nextBtn.style.display = "inline-block";
  }

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < runQuestions.length) {
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

  scoreContainer.innerHTML = `
    <h3>Your Score: ${score} / ${runQuestions.length}</h3>
    <div class="post-quiz-actions">
      <button id="restart-same">Restart ${currentCategory}</button>
      <button id="choose-category" class="secondary">Back to Categories</button>
    </div>
  `;
  updateProgress();
  
  // hide quiz view, show score view
  document.getElementById("quiz-view").style.display = "none";
  document.getElementById("score-container").style.display = "block";

  // restart button
  document.getElementById("restart-same").addEventListener("click", () => startCategory(currentCategory));

  // back to categories button
  document.getElementById("choose-category").addEventListener("click", () => {
    document.getElementById("score-container").style.display = "none";
    document.getElementById("category-view").style.display = "block";
  });
}


  // ----- Init -----
  buildCategoryButtons();

});
