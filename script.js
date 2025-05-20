/* global questionsData */
const Quiz = (() => {
  let currentQuestion = 0;
  const score = 0;
  let questions = [];
  let totalQuestions = 0;
  const quizForm = document.getElementById("quiz-form");
  const nextButton = document.createElement("button");

  function renderQuestions() {
    quizForm.innerHTML = "";

    questions.forEach((question) => {
      const questionDiv = document.createElement("div");
      questionDiv.className = "question";
      questionDiv.style.display = "none";

      const optionsHTML = question.options.map((opt) => `
      <label>
        <input type="radio" name="${question.name}" value="${opt}" required>
        <span>${opt}</span>
      </label>
    `).join("");

      questionDiv.innerHTML = `
      <p>${question.text}</p>
      <div class="options">${optionsHTML}</div>
    `;

      quizForm.appendChild(questionDiv);
    });

    quizForm.appendChild(nextButton);
  }

  function showQuestion(index) {
    document.querySelectorAll(".question").forEach((questionElement, i) => {
      questionElement.style.display = i === index ? "block" : "none";
    });

    const progress = ((index + 1) / totalQuestions) * 100;
    document.getElementById("progress-bar").style.width = `${progress}%`;
    document.getElementById("question-number").textContent = `Вопрос ${index + 1} из ${totalQuestions}`;
    nextButton.textContent = index === totalQuestions - 1 ? "Завершить тест" : "Далее";
  }

  function calculateResult() {
    let totalScore = 0;

    questions.forEach((question) => {
      const selected = document.querySelector(`input[name="${question.name}"]:checked`);
      if (selected && selected.value === question.correct) {
        totalScore += 1;
      }
    });

    localStorage.setItem("score", totalScore);
    localStorage.setItem("total", totalQuestions);
    window.location.href = "result.html";
    return totalScore;
  }

  function handleNextQuestion() {
    const currentQuestionData = questions[currentQuestion];
    const selected = document.querySelector(`input[name="${currentQuestionData.name}"]:checked`);

    if (!selected) {
    // eslint-disable-next-line no-alert
      alert("Пожалуйста, выберите ответ!");
      return;
    }

    if (currentQuestion < totalQuestions - 1) {
      currentQuestion += 1;
      showQuestion(currentQuestion);
    } else {
      calculateResult();
    }
  }

  function initQuiz() {
    const theme = localStorage.getItem("quizTheme") || "web";
    const quizData = questionsData[theme];

    document.getElementById("quiz-title").textContent = `Тест: ${quizData.title}`;
    questions = quizData.questions;
    totalQuestions = questions.length;

    nextButton.type = "button";
    nextButton.id = "next-button";
    nextButton.textContent = "Далее";
    nextButton.addEventListener("click", handleNextQuestion);

    renderQuestions();
    showQuestion(0);
  }

  document.addEventListener("DOMContentLoaded", initQuiz);

  return {
    initQuiz,
    renderQuestions,
    showQuestion,
    calculateResult,
    handleNextQuestion,
    getCurrentQuestion: () => currentQuestion,
    getQuestions: () => questions,
    setQuestions: (newQuestions) => { questions = newQuestions; },
    getTotalQuestions: () => totalQuestions,
    setTotalQuestions: (count) => { totalQuestions = count; },
  };
})();
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Quiz };
}
