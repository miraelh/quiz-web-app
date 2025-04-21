document.addEventListener('DOMContentLoaded', () => {
    const quizIndex = new URLSearchParams(window.location.search).get('quizIndex');




    const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    const quiz = quizzes[quizIndex];



    let currentQuestion = 0;
    let score = 0;

});