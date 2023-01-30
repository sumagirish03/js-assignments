// const { count } = require("console");

const qData = [
  {
    que: "What Year was Javascript launched?",
    a: 1996,
    b: 1995,
    c: 1994,
    d: "none of the above",
    correct: "b",
  },
  {
    que: "Your favorite food ?",
    a: "Idly",
    b: "Dosa",
    c: "Vada",
    d: "none of the above",
    correct: "a",
  },
  {
    que: "What Year was React launched?",
    a: 2011,
    b: 2012,
    c: 2013,
    d: "none of the above",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const ansEls = document.querySelectorAll(".answer");
const qEl = document.getElementById("quesAns");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const qcount = document.getElementById("qcount");
const qaHead = document.getElementById("qaHead");

const crtScoreCount = document.getElementById("crtScoreCount");
const currentScoreHead = document.getElementById("currentScoreHead");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deSelectAnswers();

  const currentqData = qData[currentQuiz];

  qEl.innerText = currentqData.que;
  a_text.innerText = currentqData.a;
  b_text.innerText = currentqData.b;
  c_text.innerText = currentqData.c;
  d_text.innerText = currentqData.d;
}

function deSelectAnswers() {
  ansEls.forEach((ansEl) => (ansEl.checked = false));
}

function getSelected() {
  let answer;

  ansEls.forEach((ansEl) => {
    if (ansEl.checked) {
      answer = ansEl.id;
    }
  });
  return answer;
}

var quesCount = 0;
var count = 0;
submitBtn.addEventListener("click", () => {
  //    console.log(quesCount);
  const answer = getSelected();

  if (answer) {
    if (quesCount === 0) {
      quesCount++;
      qaHead.classList.add("show");
      currentScoreHead.classList.add("show");

      qcount.innerHTML = quesCount;
    } else if (quesCount > 0) {
      quesCount++;
      qcount.innerHTML = quesCount;
    }

    if (answer === qData[currentQuiz].correct) {
      score++;
      crtScoreCount.innerText++;
    }
    currentQuiz++;

    if (currentQuiz < qData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2> You Answered ${score}/${qData.length} questions correctly</h2>        
        <button onclick="location.reload()">Reload</button>
        `;
    }
  } else if (answer === undefined) {
    alert("choose an option");
  }
});
