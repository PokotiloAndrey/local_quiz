let currentQuestion = 0;
const questions = document.querySelectorAll(".question");
const totalQuestions = questions.length;

// Показываем текущий вопрос
function showQuestion(index) {
  questions.forEach((q, i) => {
    q.style.display = i === index ? "block" : "none";
  });

  // Обновляем прогресс-бар и номер вопроса
  document.getElementById("progress-bar").style.width = `${((index + 1) / totalQuestions) * 100}%`;
  document.getElementById("question-number").textContent = `Вопрос ${index + 1} из ${totalQuestions}`;

  // Меняем текст кнопки на последнем вопросе
  const nextButton = document.getElementById("next-button");
  nextButton.textContent = index === totalQuestions - 1 ? "Проверить" : "Далее";
}

// Обработчик отправки формы
document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Проверяем, выбран ли ответ
  const currentQuestionName = `q${currentQuestion + 1}`;
  const selectedAnswer = document.querySelector(`input[name="${currentQuestionName}"]:checked`);

  if (!selectedAnswer) {
    alert("Пожалуйста, выберите ответ!");
    return; // Прерываем функцию, если ответ не выбран
  }

  // Переключаем вопрос или завершаем тест
  if (currentQuestion < totalQuestions - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  } else {
    calculateResult();
  }
});

// Функция подсчета результатов
function calculateResult() {
  const correctAnswers = { q1: "HTML", q2: "CSS", q3: "Ссылка" };
  let score = 0;

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

// Инициализация первого вопроса
showQuestion(currentQuestion);
