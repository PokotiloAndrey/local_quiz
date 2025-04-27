document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const questions = document.querySelectorAll("#quiz-form > div");

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);

    document.getElementById("progress-bar").style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    document.getElementById("question-number").textContent = `Вопрос ${currentQuestion + 1} из ${questions.length}`;
  } else {
    const correctAnswers = {
      q1: "HTML",
      q2: "CSS",
      q3: "Ссылка"
    };

    let score = 0;
    let total = Object.keys(correctAnswers).length;

    for (let question in correctAnswers) {
      const selected = document.querySelector(`input[name="${question}"]:checked`);
      if (selected && selected.value === correctAnswers[question]) {
        score++;
      }
    }

    localStorage.setItem("score", score);
    localStorage.setItem("total", total); 

    window.location.href = "result.html";
  }
});

