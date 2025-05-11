let currentQuestion = 0;
const questions = document.querySelectorAll(".question");
const totalQuestions = questions.length;

function showQuestion(index) {
  questions.forEach((q, i) => {
    q.style.display = i === index ? "block" : "none";
  });

  document.getElementById("question-number").textContent = `Вопрос ${index + 1} из ${totalQuestions}`;
  document.getElementById("progress-bar").style.width = `${((index + 1) / totalQuestions) * 100}%`;

  const nextButton = document.getElementById("next-button");
  nextButton.textContent = index === totalQuestions - 1 ? "Проверить" : "Далее";
}

document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Проверка выбранного ответа
  const currentQuestionName = `q${currentQuestion + 1}`;
  if (!document.querySelector(`input[name="${currentQuestionName}"]:checked`)) {
    alert("Пожалуйста, выберите ответ!");
    return;
  }

  if (currentQuestion < totalQuestions - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  } else {
    const correctAnswers = {
      q1: "HTML",
      q2: "CSS",
      q3: "Ссылка"
    };

    let score = 0;
    for (let question in correctAnswers) {
      const selected = document.querySelector(`input[name="${question}"]:checked`);
      if (selected && selected.value === correctAnswers[question]) {
        score++;
      }
    }

    localStorage.setItem("score", score);
    localStorage.setItem("total", totalQuestions);
    window.location.href = "result.html";
  }
});

// Инициализация первого вопроса
showQuestion(currentQuestion);
