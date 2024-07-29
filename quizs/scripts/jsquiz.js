const quizData = [
    {
        question: "Which company developed JavaScript?",
        a: "Microsoft",
        b: "Netscape",
        c: "Sun Microsystems",
        d: "Oracle",
        correct: "b",
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        a: "//",
        b: "/* */",
        c: "#",
        d: "<!-- -->",
        correct: "a",
    },
    {
        question: "How do you declare a variable in JavaScript?",
        a: "var myVariable",
        b: "variable myVariable",
        c: "v myVariable",
        d: "myVariable var",
        correct: "a",
    },
    {
        question: "Which method is used to create a new array in JavaScript?",
        a: "Array()",
        b: "NewArray()",
        c: "CreateArray()",
        d: "MakeArray()",
        correct: "a",
    },
    {
        question: "How do you write 'Hello World' in an alert box in JavaScript?",
        a: "msgBox('Hello World')",
        b: "alert('Hello World')",
        c: "alertBox('Hello World')",
        d: "msg('Hello World')",
        correct: "b",
    },
    {
        question: "How do you add a comment in JavaScript?",
        a: "/* This is a comment */",
        b: "// This is a comment",
        c: "# This is a comment",
        d: "<!-- This is a comment -->",
        correct: "b",
    },
    {
        question: "Which JavaScript method is used to write on the browser's console?",
        a: "console.write()",
        b: "console.output()",
        c: "console.log()",
        d: "console.display()",
        correct: "c",
    },
    {
        question: "Which method is used to parse a string to an integer in JavaScript?",
        a: "parseInt()",
        b: "toInteger()",
        c: "Integer.parse()",
        d: "parse()",
        correct: "a",
    },
    {
        question: "Which method is used to convert a JSON string into a JavaScript object?",
        a: "JSON.stringify()",
        b: "JSON.parse()",
        c: "JSON.convert()",
        d: "JSON.toObject()",
        correct: "b",
    },
    {
        question: "Which keyword is used to define a function in JavaScript?",
        a: "def",
        b: "function",
        c: "define",
        d: "func",
        correct: "b",
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
   
                <button onclick="location.reload()" style=" background-color: #1a8765;">Reload</button>
            `;
        }
    }, 1000);
}
