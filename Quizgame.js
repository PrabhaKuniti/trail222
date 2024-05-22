const questions = [{
        question: "I would like to spend a hoilday in ???",
        answers: [{
                text: "Amusement park",
                correct: false
            },
            {
                text: "Sleep calmly",
                correct: false
            },
            {
                text: "Beaches",
                correct: true
            },
            {
                text: "Netflix and chill",
                correct: false
            },

        ]
    },

    {
        question: "What do you think prabha 1st notices in a person ?",
        answers: [{
                text: "looks",
                correct: false
            },
            {
                text: "smile ",
                correct: false
            },
            {
                text: "way of addressing",
                correct: true
            },
            {
                text: "nothing can be judged in the 1st meet",
                correct: false
            },

        ]
    },

    {
        question: "What could be that one fictional thing or quality I could fall for a person ???",
        answers: [{
                text: "who can surprise me by playing differnt instruments",
                correct: false
            },
            {
                text: "Amazing voice and can sing for mee.....",
                correct: true
            },
            {
                text: "Fabulous dancer whom I can dance with",
                correct: true
            },
            {
                text: "who can mesmerize me with his Poetry ",
                correct: false
            },

        ]
    },

    {
        question: "If I am having a thali full of dishes , which item do u think I will taste 1st?",
        answers: [{
                text: "Samosa",
                correct: false
            },
            {
                text: "Gulab jamoon ",
                correct: false
            },
            {
                text: "cake",
                correct: false
            },
            {
                text: "ice-cream",
                correct: true
            },

        ]
    },

    {
        question: "If I could choose any superpower for a day, what would it be",
        answers: [{
                text: "fly",
                correct: false
            },
            {
                text: "Invisible",
                correct: true
            },
            {
                text: "can listen others inner voices",
                correct: false
            },
            {
                text: " can eat anything I wish for",
                correct: false
            },

        ]
    },

    {
        question: " What acc to me is most overated movie  ???",
        answers: [{
                text: " Baahubali",
                correct: false
            },
            {
                text: "Karthikeya 2",
                correct: false
            },
            {
                text: "animal",
                correct: false
            },
            {
                text: " Pushpa",
                correct: true
            },

        ]
    },
    {
        question: "What do think is one of my fav char from movies ???",
        answers: [{
                text: "Karthik from sakhi",
                correct: false
            },
            {
                text: "Arun from hridayam",
                correct: false
            },
            {
                text: "Krishnan from surya s/o krishnan",
                correct: true
            },
            {
                text: "kosakshi Pacchipulusula ",
                correct: false
            },

        ]
    },

    {
        question: "If a person has this quality I will reject him ???",
        answers: [{
                text: "smoking",
                correct: false
            },
            {
                text: "Drinking",
                correct: false
            },
            {
                text: "girl bestie ",
                correct: false
            },
            {
                text: "all of the above ",
                correct: true
            },

        ]
    },
    {
        question: "If I would be stressed what do you think I will do ???",
        answers: [{
                text: "talking to loved ones",
                correct: false
            },
            {
                text: "sleep",
                correct: false
            },
            {
                text: "Listening to songs or Dance",
                correct: true
            },
            {
                text: " eating fav food",
                correct: false
            },

        ]
    }


];

const quesELe = document.getElementById("Question");
const ansBtn = document.getElementById("ans-buttons");
const nextBtn = document.getElementById("next-btn");


let currentIndex = 0;
let score = 0;

function startQuiz() {
    currentIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQues = questions[currentIndex];
    let quesNo = currentIndex + 1;
    quesELe.innerHTML = quesNo + ". " + currentQues.question;

    currentQues.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansBtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}

function resetState() {
    nextBtn.style.display = "none";
    while (ansBtn.firstChild) {
        ansBtn.removeChild(ansBtn.firstChild);
    }
}




function selectAnswer(e) {
    const selectedBtn = e.target;
    const iscrct = selectedBtn.dataset.correct === "true";
    if (iscrct) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(ansBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

startQuiz();



function showScore() {
    resetState();
    quesELe.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

function handleNextBtn() {
    currentIndex++;
    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
})