// add questions
var questions = [
    {
        id: 0,
        q: 'Who is the Greek God of Wisdom?',
        a: [{ text: 'Athena', isCorrect: true },
        { text: 'Hera', isCorrect: false },
        { text: 'Zeus', isCorrect: false },
        { text: 'Hephestus', isCorrect: false }]
        
    },
    { id: 1,
        q: 'What was the name of the Famous Greek Hero from The Odyssey?',
        a: [{ text: 'Jason', isCorrect: false },
            { text: 'Hercules', isCorrect: false },
            { text: 'Odysseus', isCorrect: true },
            { text: 'Kratos', isCorrect: false }]
        
    },

    {   id: 2,
        q: 'What was the name of the Titan that had children with Gaia?',
        a: [{ text: 'Kronos', isCorrect: false },
            { text: 'Hyperion', isCorrect: false },
            { text: 'Rhea', isCorrect: false },
            { text: 'Uranus', isCorrect: true }]
    },

    {
        id: 3,
        q: 'Who is the god of Death?',
        a: [{ text: 'Hades', isCorrect: false },
            { text: 'Erebus', isCorrect: false },
            { text: 'Thanatos', isCorrect: true },
            { text: 'Cerberus', isCorrect: false }]
    },

    {   id: 4,
        q: 'What Greek Hero was known for slaying Medusa?',
        a: [{ text: 'Jason', isCorrect: false },
            { text: 'Perseus', isCorrect: true },
            { text: 'Achillies', isCorrect: false },
            { text: 'Theseus', isCorrect: false }]

    },
];
// add timer variables
var timerEl = document.querySelector('#timer');
var startButton = document.querySelector('#start');
var timeLeft = 60;
startButton.addEventListener('click', startGame);

// when i hit a button, the quiz starts
function startGame() {
    // hide main start screen
    // start timer
    timer();
    // get question
};




// a timer starts when i am presented with a question
function timer() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft === 0) {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            // endGame();
        }
    }, 1000);
};
console.log(timeLeft)
// when i answer a question i get another one
function getQuestions() {
// get question object at index 0 - questions[0]
// 
// for loop to get choices
    // create btnEl
// take btnEl set text to choice[i]
};

function questionClick() {
    // event.target
    // if correct index++
    // if choice is not correct - time-- index++
}

// when i answer all question or if the timer is 0 the game ends
// when the game ends i can save my score
function endGame() {
    // clear page of quiz
    // get values of user initials + score
    // set to local storage
};

function scoreboard() {
// render scoreboard from local storage
}