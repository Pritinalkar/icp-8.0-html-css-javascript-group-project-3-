const quizData = [
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Creative Style Sheets",
        c: "Computer Style Sheets",
        d: "Colorful Style Sheets",
        correct: "a",
    },
    {
        question: "Which HTML attribute is used to define inline styles in CSS?",
        a: "styles",
        b: "class",
        c: "font",
        d: "style",
        correct: "d",
    },
    {
        question: "Which property is used to change the background color in CSS?",
        a: "color",
        b: "bgcolor",
        c: "background-color",
        d: "background",
        correct: "c",
    },
    {
        question: "Which CSS property controls the text size?",
        a: "font-style",
        b: "text-size",
        c: "font-size",
        d: "text-style",
        correct: "c",
    },
    {
        question: "How do you make each word in a text start with a capital letter in CSS?",
        a: "text-transform: capitalize",
        b: "text-transform: uppercase",
        c: "text-transform: lowercase",
        d: "text-transform: capitalize-each",
        correct: "a",
    },
    {
        question: "Which property is used to change the font of an element in CSS?",
        a: "font-weight",
        b: "font-style",
        c: "font-family",
        d: "font-variant",
        correct: "c",
    },
    {
        question: "How do you make a list not display bullet points in CSS?",
        a: "list-style-type: no-bullet",
        b: "list-style-type: no-point",
        c: "list-style-type: none",
        d: "list-style-type: non",
        correct: "c",
    },
    {
        question: "How do you center an element horizontally in CSS?",
        a: "margin: center",
        b: "margin: auto",
        c: "margin: 0 auto",
        d: "margin-left: auto; margin-right: auto",
        correct: "d",
    },
    {
        question: "Which property is used to change the space between letters in CSS?",
        a: "letter-spacing",
        b: "spacing",
        c: "character-spacing",
        d: "letter-space",
        correct: "a",
    },
    {
        question: "Which property is used to change the text color in CSS?",
        a: "fgcolor",
        b: "font-color",
        c: "text-color",
        d: "color",
        correct: "d",
    }
];


const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answersEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const feedbackEl = document.getElementById("feedback");


let currentQuiz = 0;
let score = 0;
let time = 180; // 3 minutes in seconds

loadQuiz();
startTimer();


function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    feedbackEl.innerText = '';
}

function deselectAnswers() {
    answersEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answersEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}


submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
            feedbackEl.innerText = 'Correct!';
            feedbackEl.style.color = 'green';
        } else {
            feedbackEl.innerText = `Wrong! The correct answer was ${quizData[currentQuiz].correct.toUpperCase()}.`;
            feedbackEl.style.color = 'red';
        }
        scoreEl.innerText =` Score: ${score}`;
        currentQuiz++;
        setTimeout(() => {
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                clearInterval(timerInterval);
                quiz.innerHTML = `
                    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                    <button onclick="location.reload()">Reload</button>
                `;
            }
        }, 1000); // Delay to show feedback for a second
    }
});

function startTimer() {
    timerInterval = setInterval(() => {
        time--;
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerEl.innerText = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (time <= 0) {
            clearInterval(timerInterval);
            quiz.innerHTML = `
                <h2>Time's up! You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }, 1000);
}
