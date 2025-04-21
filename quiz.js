const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
const quiz = quizzes[quizIndex];



let currentQuestion = 0;
let score = 0;