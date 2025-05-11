const questionsData = {
  web: {
    title: "Основы веб-разработки",
    questions: [
      {
        text: "1. Какой язык используют для создания веб-страниц?",
        options: ["HTML", "Python", "C++", "Java"],
        correct: "HTML",
        name: "q1"
      },
      {
        text: "2. Какой язык используется для стилизации веб-страниц?",
        options: ["CSS", "JavaScript", "PHP", "Ruby"],
        correct: "CSS",
        name: "q2"
      },
      {
        text: "3. Что делает тег `<a>`?",
        options: ["Ссылка", "Абзац", "Картинка", "Таблица"],
        correct: "Ссылка",
        name: "q3"
      },
      {
        text: "4. Какой тег определяет основное содержимое документа?",
        options: ["<main>", "<header>", "<nav>", "<aside>"],
        correct: "<main>",
        name: "q4"
      }
    ]
  },
  html: {
    title: "HTML",
    questions: [
      {
        text: "1. Какой тег используется для заголовка первого уровня?",
        options: ["<h1>", "<header>", "<head>", "<heading>"],
        correct: "<h1>",
        name: "q1"
      },
      {
        text: "2. Какой атрибут указывает альтернативный текст для изображения?",
        options: ["alt", "title", "src", "description"],
        correct: "alt",
        name: "q2"
      },
      {
        text: "3. Какой тег создает ненумерованный список?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        correct: "<ul>",
        name: "q3"
      },
      {
        text: "4. Какой тег используется для вставки видео?",
        options: ["<video>", "<media>", "<movie>", "<embed>"],
        correct: "<video>",
        name: "q4"
      }
    ]
  },
  css: {
    title: "CSS",
    questions: [
      {
        text: "1. Какое свойство изменяет цвет текста?",
        options: ["color", "font-color", "text-color", "font-style"],
        correct: "color",
        name: "q1"
      },
      {
        text: "2. Как сделать текст жирным?",
        options: ["font-weight: bold", "font-style: bold", "text-weight: bold", "bold: true"],
        correct: "font-weight: bold",
        name: "q2"
      },
      {
        text: "3. Как центрировать блок по горизонтали?",
        options: ["margin: 0 auto", "align: center", "position: center", "text-align: center"],
        correct: "margin: 0 auto",
        name: "q3"
      },
      {
        text: "4. Что делает свойство 'display: flex'?",
        options: ["Включает flex-раскладку", "Делает элемент гибким", "Выравнивает текст", "Скрывает элемент"],
        correct: "Включает flex-раскладку",
        name: "q4"
      }
    ]
  },
  js: {
    title: "JavaScript",
    questions: [
      {
        text: "1. Как объявить переменную в современном JavaScript?",
        options: ["let", "var", "const", "Все варианты верны"],
        correct: "Все варианты верны",
        name: "q1"
      },
      {
        text: "2. Какой метод добавляет элемент в конец массива?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: "push()",
        name: "q2"
      },
      {
        text: "3. Что возвращает метод querySelector()?",
        options: ["Первый подходящий элемент", "Все подходящие элементы", "Массив элементов", "Ничего"],
        correct: "Первый подходящий элемент",
        name: "q3"
      },
      {
        text: "4. Какой оператор проверяет равенство по значению и типу?",
        options: ["===", "==", "=", "!=="],
        correct: "===",
        name: "q4"
      }
    ]
  },
  git: {
    title: "Git",
    questions: [
      {
        text: "1. Как создать новую ветку в Git?",
        options: ["git branch <name>", "git new branch <name>", "git create branch <name>", "git checkout -b <name>"],
        correct: "git branch <name>",
        name: "q1"
      },
      {
        text: "2. Как зафиксировать изменения в Git?",
        options: ["git commit", "git save", "git add", "git push"],
        correct: "git commit",
        name: "q2"
      },
      {
        text: "3. Как отправить изменения в удаленный репозиторий?",
        options: ["git push", "git upload", "git send", "git commit --push"],
        correct: "git push",
        name: "q3"
      },
      {
        text: "4. Как просмотреть историю коммитов?",
        options: ["git log", "git history", "git commits", "git status --history"],
        correct: "git log",
        name: "q4"
      }
    ]
  },
  react: {
    title: "React",
    questions: [
      {
        text: "1. Как создать компонент в React?",
        options: ["function MyComponent() {}", "class MyComponent extends React.Component {}", "const MyComponent = () => {}", "Все варианты верны"],
        correct: "Все варианты верны",
        name: "q1"
      },
      {
        text: "2. Как передать данные в компонент?",
        options: ["Через props", "Через state", "Через context", "Через ref"],
        correct: "Через props",
        name: "q2"
      },
      {
        text: "3. Как обновить состояние компонента?",
        options: ["setState() или useState()", "updateState()", "changeState()", "modifyState()"],
        correct: "setState() или useState()",
        name: "q3"
      },
      {
        text: "4. Что делает метод render()?",
        options: ["Возвращает JSX для отрисовки", "Обновляет DOM", "Загружает данные", "Обрабатывает события"],
        correct: "Возвращает JSX для отрисовки",
        name: "q4"
      }
    ]
  },
  node: {
    title: "Node.js",
    questions: [
      {
        text: "1. Что такое Node.js?",
        options: ["Среда выполнения JavaScript", "Фреймворк", "Библиотека", "Язык программирования"],
        correct: "Среда выполнения JavaScript",
        name: "q1"
      },
      {
        text: "2. Какой модуль используется для создания сервера?",
        options: ["http", "server", "web", "create-server"],
        correct: "http",
        name: "q2"
      },
      {
        text: "3. Какой пакетный менеджер по умолчанию в Node.js?",
        options: ["npm", "yarn", "pnpm", "bower"],
        correct: "npm",
        name: "q3"
      },
      {
        text: "4. Какой метод используется для асинхронного чтения файлов?",
        options: ["fs.readFile()", "fs.readFileSync()", "fs.read()", "fs.readAsync()"],
        correct: "fs.readFile()",
        name: "q4"
      }
    ]
  },
  python: {
    title: "Python",
    questions: [
      {
        text: "1. Как объявить функцию в Python?",
        options: ["def my_function():", "function my_function():", "func my_function():", "fn my_function():"],
        correct: "def my_function():",
        name: "q1"
      },
      {
        text: "2. Какой тип данных изменяемый в Python?",
        options: ["Список", "Кортеж", "Строка", "Число"],
        correct: "Список",
        name: "q2"
      },
      {
        text: "3. Как создать виртуальное окружение?",
        options: ["python -m venv env", "virtualenv env", "python create env", "Оба первых варианта верны"],
        correct: "Оба первых варианта верны",
        name: "q3"
      },
      {
        text: "4. Какой оператор используется для возведения в степень?",
        options: ["**", "^", "^^", "pow()"],
        correct: "**",
        name: "q4"
      }
    ]
  },
  algorithms: {
    title: "Алгоритмы",
    questions: [
      {
        text: "1. Какая сложность у линейного поиска?",
        options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
        correct: "O(n)",
        name: "q1"
      },
      {
        text: "2. Какой алгоритм сортировки самый быстрый в среднем случае?",
        options: ["Быстрая сортировка", "Сортировка пузырьком", "Сортировка выбором", "Сортировка вставками"],
        correct: "Быстрая сортировка",
        name: "q2"
      },
      {
        text: "3. Что такое рекурсия?",
        options: ["Функция, вызывающая саму себя", "Цикл", "Условный оператор", "Итерация"],
        correct: "Функция, вызывающая саму себя",
        name: "q3"
      },
      {
        text: "4. Какая структура данных работает по принципу LIFO?",
        options: ["Стек", "Очередь", "Связный список", "Дерево"],
        correct: "Стек",
        name: "q4"
      }
    ]
  },
  security: {
    title: "Безопасность",
    questions: [
      {
        text: "1. Что такое HTTPS?",
        options: ["Защищенная версия HTTP", "Новая версия HTML", "Протокол передачи файлов", "Язык программирования"],
        correct: "Защищенная версия HTTP",
        name: "q1"
      },
      {
        text: "2. Как защитить пароли пользователей?",
        options: ["Хэшировать с солью", "Хранить в открытом виде", "Использовать base64", "Шифровать с обратимый алгоритм"],
        correct: "Хэшировать с солью",
        name: "q2"
      },
      {
        text: "3. Что такое CSRF-атака?",
        options: ["Межсайтовая подделка запроса", "Внедрение SQL-кода", "Межсайтовый скриптинг", "Переполнение буфера"],
        correct: "Межсайтовая подделка запроса",
        name: "q3"
      },
      {
        text: "4. Какой заголовок защищает от XSS?",
        options: ["Content-Security-Policy", "X-XSS-Protection", "X-Content-Type-Options", "Все варианты верны"],
        correct: "Все варианты верны",
        name: "q4"
      }
    ]
  }
};
