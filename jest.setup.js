const localStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key]),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    removeItem: jest.fn((key) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();

global.localStorage = localStorageMock;

document.body.innerHTML = `
  <div id="quiz-form"></div>
  <div id="progress-bar" style="width: 0%"></div>
  <div id="question-number"></div>
  <div id="quiz-title"></div>
`;

global.questionsData = {
  web: {
    title: "Основы веб-разработки",
    questions: [],
  },
  html: {
    title: "HTML",
    questions: [],
  },
};
