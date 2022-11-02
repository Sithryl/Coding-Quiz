// add questions
var questions = [
    {
        question: 'What is a header element',
        answers: ['<h1>', '<p>', '<img>', '<footer>'],
        answer: '<h1>',
    },

    {
        question: 'What is a header element',
        answers: ['<h1>', '<p>', '<img>', '<footer>'],
        answer: '<h1>',
    },

    {
        question: 'What is a header element',
        answers: ['<h1>', '<p>', '<img>', '<footer>'],
        answer: '<h1>',
    },

    {
        question: 'What is a header element',
        answers: ['<h1>', '<p>', '<img>', '<footer>'],
        answer: '<h1>',
    },

    {
        question: 'What is a header element',
        answers: ['<h1>', '<p>', '<img>', '<footer>'],
        answer: '<h1>',
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