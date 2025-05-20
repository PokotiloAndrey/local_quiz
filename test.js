/**
 * @jest-environment jsdom
 */
import { describe,expect, jest } from '@jest/globals';
import Quiz from './script.js';

delete window.location;
window.location = { href: "" };

const localStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key]),
    setItem: jest.fn((key, value) => { store[key] = value.toString(); }),
    clear: jest.fn(() => { store = {}; }),
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });

const testQuestions = [
  {
    name: "q1",
    text: "Question 1?",
    options: ["A", "B"],
    correct: "A",
  },
  {
    name: "q2",
    text: "Question 2?",
    options: ["C", "D"],
    correct: "C",
  },
];

global.questionsData = {
  web: {
    title: "Web Development",
    questions: testQuestions,
  },
};

const initTestQuiz = () => {
  document.body.innerHTML = `
    <form id="quiz-form"></form>
    <div id="progress-bar" style="width: 0%"></div>
    <div id="question-number"></div>
    <div id="quiz-title"></div>
  `;

  Quiz.setQuestions(testQuestions);
  Quiz.setTotalQuestions(testQuestions.length);

  const nextButton = document.createElement("button");
  nextButton.id = "next-button";
  nextButton.type = "button";
  document.getElementById("quiz-form").appendChild(nextButton);

  testQuestions.forEach((question) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";
    questionDiv.style.display = "none";
    questionDiv.innerHTML = `
      <p>${question.text}</p>
      <div class="options">
        ${question.options.map((opt) => `
          <label>
            <input type="radio" name="${question.name}" value="${opt}" required>
            <span>${opt}</span>
          </label>
        `).join("")}
      </div>
    `;
    document.getElementById("quiz-form").insertBefore(questionDiv, nextButton);
  });
};

beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
  initTestQuiz();
});

describe("renderQuestions", () => {
  test("renders questions correctly", () => {
    const questionElements = document.querySelectorAll(".question");
    expect(questionElements.length).toBe(2);
    expect(document.getElementById("quiz-form").textContent).toContain("Question 1?");
    expect(document.getElementById("quiz-form").textContent).toContain("Question 2?");
  });
});

describe("showQuestion", () => {
  test("shows first question and updates progress", () => {
    Quiz.showQuestion(0);

    const questionElements = document.querySelectorAll(".question");
    expect(questionElements[0].style.display).toBe("block");
    expect(questionElements[1].style.display).toBe("none");
    expect(document.getElementById("progress-bar").style.width).toBe("50%");
  });
});

describe("calculateResult", () => {
  test("calculates correct score", () => {
    document.querySelector("input[name=\"q1\"][value=\"A\"]").checked = true;
    document.querySelector("input[name=\"q2\"][value=\"D\"]").checked = true;

    const score = Quiz.calculateResult();
    expect(score).toBe(1);
  });
});

describe("handleNextQuestion", () => {
  test("shows alert when no answer selected", () => {
    window.alert = jest.fn();
    Quiz.handleNextQuestion();
    expect(window.alert).toHaveBeenCalledWith("Пожалуйста, выберите ответ!");
  });

  test("moves to next question when answer selected", () => {
    document.querySelector("input[name=\"q1\"][value=\"A\"]").checked = true;
    Quiz.handleNextQuestion();
    expect(Quiz.getCurrentQuestion()).toBe(1);
  });
});
