const questionElement = document.getElementById("question");
const questionContainer = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

const questions = [
  {
    question: "HTML Stands for",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "HyperText Machine Language", correct: false },
      { text: "HyperTower Machine Language", correct: false },
    ],
  },
  {
    question: "CSS Stands for",
    answers: [
        { text: "Cascading Super Sheet", correct: false },
        { text: "Customize Style Sheet", correct: false },
        { text: "Cascading Style Sheet", correct: true },
    ],
  },
];

let score = 0;
let questionIndex = 0;

function showContant() {
    resetContant();
    let currentQuestion = questions[questionIndex];
    let questionNumber = questionIndex + 1;
    questionElement.innerHTML = `${questionNumber}. ${currentQuestion.question}`;
    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.classList.add("btn");
        questionContainer.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        };
    });
};

function resetContant() {
    nextButton.style.display = "none";
    while(questionContainer.firstChild) {
        questionContainer.removeChild(questionContainer.firstChild);
    }
}
