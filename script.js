var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");

var questionsScreen = document.querySelector("#question-container");
var timeEl = document.querySelector("#timer");
var questionsEl = document.querySelector("#questions");
var choiceEl = document.querySelector("#choices");
var resultEl = document.querySelector("#result");
var index = 0;
var score = 0;

var endScreen = document.querySelector("#end-scores");
var submit = document.querySelector("#submit");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
// add questions
var questions = [
    {
        question: "Who is the Greek Goddess of wisdom?",
        choices: ["Zeus", "Athena", "Ares", "Hermes"],
        correct: "Athena"
    },
    {
        question: "Who is the Greek God of Death",
        choices: ["Hades", "Tartarus", "Thanatos", "Zeus"],
        correct: "Thanatos"
    },
    {
        question: "Which Greek hero was known for slaying Medusa?",
        choices: ["Perseus", "Theseus", "Heracles", "Kratos"],
        correct: "Perseus"
    },
    {
        question: "Which Greek hero was known for slaying the Minotaur",
        choices: ["Heracles", "Achilles", "Odysseus", "Theseus"],
        correct: "Theseus"
    },
    {
        question: "Whick Greek Hero was known for outsmarting the Cyclops Polyphemus",
        choices: ["Odysseus", "Achilles", "Kratos", "Heracles"],
        correct: "Odysseus"
    },
];
// add timer variables
var timerEl = document.querySelector('#timer');
var startButton = document.querySelector('#start');
var timeLeft = 60;
startButton.addEventListener('click', startGame);

// when i hit choices button, the quiz starts
function startGame() {
    // hide main start screen
    // start timer
    // get question
    clearStartScreen();
    timer();
    getQuestions();
};
function clearStartScreen() {
    startScreen.setAttribute("class", "hide");
    questionsScreen.classList.remove("hide");
}


// when i answer all question or if the timer is 0 the game ends
function timer() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft === 0) {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            endGame();
        }
        if (index == questions.length) {
             timerEl.textContent = '';
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);
};
console.log(timeLeft)
// get first question
function getQuestions() {

    questions.textContent = "";
    questionsEl.textContent = "";

    var questionsVisable = document.createElement("h1");
    questionsVisable.setAttribute("id", "show");
    questionsEl.appendChild(questionsVisable);
    document.getElementById("show").textContent = questions[index].question;

    for (var i = 0; i < questions[index].choices.length; i++) {
        var choicesVisable = document.createElement("button");
        choicesVisable.setAttribute("id", questions[index].choices[i]);
        choiceEl.appendChild(choicesVisable);
        choicesVisable.append(questions[index].choices[i]);

        choicesVisable.addEventListener("click", function (event) {
            if (event.target.id = questions[index].correct) {
                resultEl.textContent = "Correct!";
                console.log("correct");
            }
            else{
                resultEl.textContent = "Incorrect";
                timeLeft -= 10;
                timerEl.textContent = timeLeft;
                console.log("incorrect");
            }
            nextQuestion();

        })
    }
}
// get next question
function nextQuestion(){
    index ++;
    resultEl.textContent = "";
    choiceEl.textContent = "";

    if(index < questions.length){
    getQuestions();
    }
    else if(index == questions.length){
    endGame();
    }
}

// when the game ends i can save my score
function endGame() {
        console.log("game over");
        questionsScreen.setAttribute("class", "hide");
        endScreen.classList.remove("hide"); 
        
        submit.addEventListener("click", () => {
        });
    }

function renderScoreboard() {
    clearStartScreen();
    finalScore.textContent = 
    window.localStorage.setItem(initials)
    window.localStorage.setItem(finalScore)

        // renders scores and initials from local storage (use for loop and array)

}
