let currentQuestion = 0;
let score = 0;
let questions = [];
let totalQuestions = 0;
const quizForm = document.getElementById("quiz-form");
const nextButton = document.createElement('button');


function initQuiz() {
  const theme = localStorage.getItem('quizTheme') || 'web';
  const quizData = questionsData[theme];
  
  document.getElementById('quiz-title').textContent = `Тест: ${quizData.title}`;
  questions = quizData.questions;
  totalQuestions = questions.length;
  

  nextButton.type = 'button';
  nextButton.id = 'next-button';
  nextButton.textContent = 'Далее';
  nextButton.addEventListener('click', handleNextQuestion);
  
  renderQuestions();
  showQuestion(0);
}


function renderQuestions() {
  quizForm.innerHTML = '';
  
  questions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.style.display = 'none';
    
    const optionsHTML = question.options.map(opt => `
      <label>
        <input type="radio" name="${question.name}" value="${opt}" required>
        <span>${opt}</span>
      </label>
    `).join('');
    
    questionDiv.innerHTML = `
      <p>${question.text}</p>
      <div class="options">${optionsHTML}</div>
    `;
    
    quizForm.appendChild(questionDiv);
  });
  

  quizForm.appendChild(nextButton);
}


function showQuestion(index) {
  document.querySelectorAll('.question').forEach((q, i) => {
    q.style.display = i === index ? 'block' : 'none';
  });

  const progress = ((index + 1) / totalQuestions) * 100;
  document.getElementById("progress-bar").style.width = `${progress}%`;
  document.getElementById("question-number").textContent = `Вопрос ${index + 1} из ${totalQuestions}`;
  nextButton.textContent = index === totalQuestions - 1 ? 'Завершить тест' : 'Далее';
}


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


function handleNextQuestion() {
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
}

document.addEventListener('DOMContentLoaded', initQuiz);
