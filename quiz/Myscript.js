const questions = [
    {
        q: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Whale", correct: true },
            { text: "lion", correct: false },
            { text: "snake", correct: false }
        ]
    },
    {
        q: "Which is the largest country in the world?",
        answers: [
            { text: "america", correct: false },
            { text: "russia", correct: true },
            { text: "australia", correct: false },
            { text: "india", correct: false }
        ]
    },
    {
        q: "Which is smallest continent in the world?",
        answers: [
            { text: "antartica", correct: false },
            { text: "australia", correct: true },
            { text: "asia", correct: false },
            { text: "europe", correct: false }
        ]
    } ,
    {
        q: "Which is biggest planet in the Solar System?",
        answers: [
            { text: "Earth", correct: false },
            { text: "saturn", correct: false },
            { text: "Neptune", correct: false },
            { text: "Jupiter", correct: true}
        ]
    },
    {
        q: "Which planet has zero moon ?",
        answers: [
            { text: "mars", correct: false },
            { text: "neptune", correct: false },
            { text: "uranus", correct: false },
            { text: "venus", correct: true }
        ]
    },
    {
        q: "Speed of light in m/s?",
        answers: [
            { text: "3 X 10 m/s", correct: true },
            { text: "3.1 X 10 m/s", correct: false},
            { text: "4.1 X 10 m/s", correct: false },
            { text: "2.1 X 10 m/s", correct: false }
        ]
    },
    {
        q: "Time Required for light to reach the earth in min?",
        answers: [
            { text: "10 ", correct: false },
            { text: "8", correct: true },
            { text: "5", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        q: "Who invented the electron?",
        answers: [
            { text: "JJ thompson", correct: true },
            { text: "Rutherford", correct: false },
            { text: "Einstein", correct: false },
            { text: "James Chadwick", correct: false }
        ]
    },
    {
        q: "Who invented the Nitrogen?",
        answers: [
            { text: "JJ thompson", correct: false },
            { text: "Rutherford", correct: true },
            { text: "Einstein", correct: false },
            { text: "James Chadwick", correct: false }
        ]
    },
    {
        q: "Atomic Number of Carbon?",
        answers: [
            { text: "5", correct: false },
            { text: "8", correct: false },
            { text: "6", correct: true },
            { text: "12", correct: false }
        ]
    }
]
const bod = document.getElementById("body");
const questionEle = document.getElementById("question");
const playag = document.getElementById("playagain");
const next = document.getElementById("next");
let currQuestionindex = 0;
let Score = 0;
function showquestion() {
    resetstate();
    let questno = currQuestionindex + 1;
    questionEle.innerHTML = "Q." + questno + "  " + questions[currQuestionindex].q;
    const option = document.getElementById("options");
    for (let i = 0; i < 4; i++) {
        const btn = document.createElement("button");
        btn.innerText = questions[currQuestionindex].answers[i].text;
        if (questions[currQuestionindex].answers[i].correct) {
            btn.dataset.correct = "true";
        }

        option.appendChild(btn);

    }
    const res = document.querySelector("#options");
    res.addEventListener("click", checkanswer);
    next.addEventListener("click", nextquest);

}
function nextquest() {
    currQuestionindex++;
    if (currQuestionindex < questions.length) {
        showquestion();
    }
    else {
        questionEle.innerHTML = "Your Score is  " + Score + " out of  " + questions.length;
        const res = document.querySelector("#options");

        Array.from(res.children).forEach(button => {
            button.style.display = "none";
        })

        playag.style.display = "block";
        next.style.display = "none";
        playag.addEventListener("click", playagain);
    }
}
function playagain() {
    currQuestionindex = 0;
    Score = 0;
    showquestion();
}
function checkanswer(event) {
    const selectbtn = event.target;
    console.log(selectbtn);
    const correct1 = selectbtn.dataset.correct === "true";
    if (correct1) {
        selectbtn.classList.add("correct");
        Score++;
    }
    const res = document.querySelector("#options");
    Array.from(res.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        else {
            button.classList.add("incorrect");
        }
        button.disabled = true;
    })

    next.style.display = "block";
}
function resetstate() {

    playag.style.display = "none";
    const res = document.getElementById("options");
    for (let i = 0; i < 4; i++) {
        res.removeChild(res.firstElementChild);
    }

    next.style.display = "none";
}
showquestion();