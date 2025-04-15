document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const correctAnswers = {
    q1: "HTML"
    // можно добавить больше: q2: "CSS", q3: "JavaScript"
  };

  let score = 0;

  for (let question in correctAnswers) {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    if (selected && selected.value === correctAnswers[question]) {
      score++;
    }
  }

  // Сохраняем результат в localStorage
  localStorage.setItem("score", score);

  // Переход на result.html
  window.location.href = "result.html";
});

