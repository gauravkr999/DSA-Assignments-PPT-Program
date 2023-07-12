const quizData = [
    {
        question: "Question 1?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: 0
    },
    {
        question: "Question 2?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: 1
    },
    
];


let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;


const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');
const correctAnswersElement = document.getElementById('correct-answers');
const incorrectAnswersElement = document.getElementById('incorrect-answers');
const leaderboardContainer = document.getElementById('leaderboard-container');
const leaderboardBody = document.getElementById('leaderboard-body');


function initializeQuiz() {
    showQuestion();
    submitButton.addEventListener('click', checkAnswer);
}


function showQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElement.textContent = currentQuiz.question;

    optionsContainer.innerHTML = '';

    currentQuiz.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        optionElement.addEventListener('click', selectOption);
        optionsContainer.appendChild(optionElement);
    });
}


function selectOption(event) {
    const selectedOption = event.target;
    const options = optionsContainer.getElementsByClassName('option');

    Array.from(options).forEach(option => {
        option.classList.remove('selected');
    });

    selectedOption.classList.add('selected');
}


function checkAnswer() {
    const selectedOption = optionsContainer.getElementsByClassName('selected')[0];

    if (!selectedOption) {
        return; 
    }

    const selectedAnswer = Number(selectedOption.dataset.index);
    const currentQuiz = quizData[currentQuestion];

    if (selectedAnswer === currentQuiz.answer) {
        correctAnswers++;
        selectedOption.classList.add('correct');
    } else {
        incorrectAnswers++;
        selectedOption.classList.add('incorrect');
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        setTimeout(showQuestion, 500);
    } else {
        setTimeout(showResult, 500);
    }
}


function showResult() {
    questionElement.textContent = '';
    optionsContainer.innerHTML = '';
    submitButton.style.display = 'none';

    correctAnswersElement.textContent = `Correct Answers: ${correctAnswers}`;
    incorrectAnswersElement.textContent = `Incorrect Answers: ${incorrectAnswers}`;

    resultContainer.style.display = 'block';

    showLeaderboard();
}


function showLeaderboard() {
    leaderboardBody.innerHTML = '';

    
    const participants = [
        { name: 'Participant 1', correctAnswers: 3, incorrectAnswers: 1 },
        { name: 'Participant 2', correctAnswers: 2, incorrectAnswers: 2 },
        // Add more participants...
    ];

    participants.forEach(participant => {
        const row = leaderboardBody.insertRow();
        row.insertCell().textContent = participant.name;
        row.insertCell().textContent = participant.correctAnswers;
        row.insertCell().textContent = participant.incorrectAnswers;
    });

    leaderboardContainer.style.display = 'block';
}


initializeQuiz();
