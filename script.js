let currentQuestion = 0;
let score = 0;
let questions = [];
let totalQuestions = 0;
const quizForm = document.getElementById("quiz-form");
const nextButton = document.createElement('button');
nextButton.type = 'submit';
nextButton.id = 'next-button';
nextButton.textContent = 'Далее';
quizForm.appendChild(nextButton);

// Инициализация квиза
function initQuiz() {
  const theme = localStorage.getItem('quizTheme') || 'web';
  const quizData = questionsData[theme];
  
  document.getElementById('quiz-title').textContent = `Тест: ${quizData.title}`;
  questions = quizData.questions;
  totalQuestions = questions.length;
  
  renderQuestions();
  showQuestion(0);
}

// Рендер всех вопросов
function renderQuestions() {
  quizForm.innerHTML = '';
  
  questions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.style.display = 'none';
    questionDiv.innerHTML = `
      <p>${question.text}</p>
      ${question.options.map(opt => `
        <label>
          <input type="radio" name="${question.name}" value="${opt}"> ${opt}
        </label>
      `).join('')}
    `;
    quizForm.insertBefore(questionDiv, nextButton);
  });
}

// Показываем текущий вопрос
function showQuestion(index) {
  document.querySelectorAll('.question').forEach((q, i) => {
    q.style.display = i === index ? 'block' : 'none';
  });

  document.getElementById("progress-bar").style.width = `${((index + 1) / totalQuestions) * 100}%`;
  document.getElementById("question-number").textContent = `Вопрос ${index + 1} из ${totalQuestions}`;
  nextButton.textContent = index === totalQuestions - 1 ? 'Проверить' : 'Далее';
}

// Подсчет результатов
function calculateResult() {
  score = 0;
  
  questions.forEach(question => {
    const selected = document.querySelector(`input[name="${question.name}"]:checked`);
    if (selected && selected.value === question.correct) {
      score++;
    }
  });

  localStorage.setItem("score", score);
  localStorage.setItem("total", totalQuestions);
  window.location.href = "result.html";
}

// Обработчик формы
quizForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const currentQ = questions[currentQuestion];
  const selected = document.querySelector(`input[name="${currentQ.name}"]:checked`);
  
  if (!selected) {
    alert("Пожалуйста, выберите ответ!");
    return;
  }

  if (currentQuestion < totalQuestions - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  } else {
    calculateResult();
  }
});

// Запускаем квиз при загрузке
document.addEventListener('DOMContentLoaded', initQuiz);
