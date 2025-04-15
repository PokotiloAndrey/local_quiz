document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const correctAnswers = {
    q1: "HTML"
  };

  let score = 0;

  for (let question in correctAnswers) {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    if (selected && selected.value === correctAnswers[question]) {
      score++;
    }
  }
  const result = document.getElementById("result");
  result.textContent = `Правильных ответов: ${score}`;
});
