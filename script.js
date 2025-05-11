let currentQuestion = 0;
let score = 0;
const questions = document.querySelectorAll(".question");
const totalQuestions = questions.length;
const quizForm = document.getElementById("quiz-form");
const nextButton = document.getElementById("next-button");

// Показываем текущий вопрос
function showQuestion(index) {
  questions.forEach((q, i) => {
    q.style.display = i === index ? "block" : "none";
  });

  // Обновляем прогресс-бар и номер вопроса
  document.getElementById("progress-bar").style.width = `${((index + 1) / totalQuestions) * 100}%`;
  document.getElementById("question-number").textContent = `Вопрос ${index + 1} из ${totalQuestions}`;

  // Меняем текст кнопки на последнем вопросе
  nextButton.textContent = index === totalQuestions - 1 ? "Проверить" : "Далее";
}

// Функция подсчета результатов
function calculateResult() {
  const correctAnswers = { q1: "HTML", q2: "CSS", q3: "Ссылка" };

  for (let question in correctAnswers) {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    if (selected && selected.value === correctAnswers[question]) {
      score++;
    }
  }

  // Сохраняем результат и переходим на страницу результатов
  localStorage.setItem("score", score);
  localStorage.setItem("total", totalQuestions);
  window.location.href = "result.html";
}

// Обработчик отправки формы
quizForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Проверяем выбран ли ответ на ТЕКУЩЕМ вопросе
  const currentQuestionName = `q${currentQuestion + 1}`;
  const selected = document.querySelector(`input[name="${currentQuestionName}"]:checked`);

  if (!selected) {
    alert("Пожалуйста, выберите ответ!");
    return; // Останавливаем функцию
  }

  // Логика перехода/проверки
  if (currentQuestion < totalQuestions - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  } else {
    calculateResult();
  }
});

// Инициализация первого вопроса
showQuestion(currentQuestion);
