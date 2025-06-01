const questions = [
    {
        question: "JavaScript Invented by?",
        options: ["Brendan Eich", "Tim berner Lee", "Nawaz Shareef", "Zardari"],
        correct: "Brendan Eich"
    },
    {
        question: "HTML Stands for?",
        options: ["HyperText Makeup Language", "HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        correct: "HyperText Markup Language"
    },
    {
        question: "JavaScript was invented in?",
        options: ["1995", "2000", "1990", "1999"],
        correct: "1995"
    },
    {
        question: "CSS Stands for?",
        options: ["Creative Style Sheet", "Cascading Style Sheet", "Computer Style System", "Colorful Style Sheet"],
        correct: "Cascading Style Sheet"
    },
    {
        question: "Which tag is used for a paragraph in HTML?",
        options: ["para", "p", "h1", "div"],
        correct: "p"
    }
];

const quizContainer = document.getElementById("quiz");

questions.forEach((q, index) => {
    const block = document.createElement("div");
    block.className = "question-block";

    const question = document.createElement("div");
    question.className = "question";
    console.log(question);
    question.innerText = `${index + 1}. ${q.question}`;
    block.appendChild(question);

    q.options.forEach(option => {
        const label = document.createElement("label");
        label.className = "option";
        label.innerHTML = `
        <input type="radio" name="question${index}" value="${option}" />
        ${option}
      `;
        block.appendChild(label);
    });

    quizContainer.appendChild(block);
});

document.getElementById("submit-btn").addEventListener("click", () => {
    let score = 0;

    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && selected.value === q.correct) {
            score++;
        }
    });

    const total = questions.length;
    const percentage = Math.round((score / total) * 100);

    const result = document.getElementById("result");
    let count = 0;
    const duration = 1000; // total animation time in ms
    const stepTime = Math.max(10, Math.floor(duration / (percentage || 1))); // avoid divide by zero

    result.innerText = `Your Score: 0%`;

    const counter = setInterval(() => {
        count++;
        result.innerText = `Your Score: ${count}%`;
        if (count >= percentage) {
            clearInterval(counter);
        }
    }, stepTime);
});