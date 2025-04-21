document.addEventListener('DOMContentLoaded', () => {
    const quizIndex = new URLSearchParams(window.location.search).get('quizIndex');




    const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    const quiz = quizzes[quizIndex];



    let currentQuestion = 0;
    let score = 0;
    let userAnswers = [];


    function loadQuestion() {
        const question = quiz.questions[currentQuestion]; 
        const quizQuestionsElement = document.getElementById('quizQuestions');

        quizQuestionsElement.innerHTML = `
            <h2>${question.question}</h2>
            <div class="options">
                ${question.options.map((option, index) => `
                    <label>
                        <input type="radio" name="answer" value="${option}" class="answer-option" data-index="${index}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
        const submitButton = document.getElementById('submitQuiz');
        submitButton.innerText = currentQuestion === quiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question';

    }     
    
    function handleAnswerSelection() {
        const selectedOption = document.querySelector('input[name="answer"]:checked');

        if (selectedOption) {
            const answer = selectedOption.value; 
            const question = quiz.questions[currentQuestion]; 

            userAnswers.push({
                question: question.question,
                selectedAnswer: answer,
                correct: answer === question.correct 
            });
        }
    }

    function nextQuestion() {
        handleAnswerSelection();
        if (currentQuestion < quiz.questions.length - 1) {
            currentQuestion++; 
            loadQuestion();
        } else {
            finishQuiz(); 
        }
    }

    function finishQuiz() {
        let score = userAnswers.filter(answer => answer.correct).length;
        const scoreMessage = `You scored ${score} out of ${quiz.questions.length}!`;

        document.getElementById('quizQuestions').innerHTML = `<h2>${scoreMessage}</h2>`;
        document.getElementById('submitQuiz').style.display = 'none';
     
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUser) {
            const userScores = JSON.parse(localStorage.getItem('userScores')) || {};
            userScores[loggedInUser.username] = userScores[loggedInUser.username] || [];
            userScores[loggedInUser.username].push({
                quiz: quiz.name,
                score: userAnswers.filter(answer => answer.correct).length
            });

            console.log('Saving userScores:', userScores);  
            localStorage.setItem('userScores', JSON.stringify(userScores));
        }
    }


    

    loadQuestion();

    document.getElementById('submitQuiz').addEventListener('click', nextQuestion);

});