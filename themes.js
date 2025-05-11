const questionsData = {
  web: {
    title: "Основы веб-разработки",
    questions: [
      {
        text: "1. Какой язык используют для создания веб-страниц?",
        options: ["HTML", "Python"],
        correct: "HTML",
        name: "q1"
      },
      {
        text: "2. Какой язык используется для стилизации веб-страниц?",
        options: ["CSS", "Java"],
        correct: "CSS",
        name: "q2"
      },
      {
        text: "3. Что делает тег `<a>`?",
        options: ["Ссылка", "Абзац"],
        correct: "Ссылка",
        name: "q3"
      }
    ]
  },
  html: {
    title: "HTML",
    questions: [
      {
        text: "1. Какой тег используется для заголовка первого уровня?",
        options: ["<h1>", "<header>"],
        correct: "<h1>",
        name: "q1"
      }
    ]
  },
  css: {
    title: "CSS",
    questions: [
      {
        text: "1. Какое свойство изменяет цвет текста?",
        options: ["color", "font-color"],
        correct: "color",
        name: "q1"
      }
    ]
  }
};
