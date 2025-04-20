const sampleQuizzes = [
    { name: "French Quizz" },
    { name: "Spanish Quiz" },
    { name: "German Quiz" },
];

if (!localStorage.getItem('quizzes')) {
  localStorage.setItem('quizzes', JSON.stringify(sampleQuizzes));
}


function loadQuizzes() {
    const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    const quizList = document.getElementById('quizList');
    
    if (quizzes.length === 0) {
      quizList.innerHTML = '<li>No quizzes available. Please check back later.</li>';
    } else {
      quizList.innerHTML = ''; 
      quizzes.forEach((quiz, index) => {
        const quizItem = document.createElement('li');
        quizItem.textContent = quiz.name;
        quizItem.onclick = () => startQuiz(index); 
        quizList.appendChild(quizItem);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', loadQuizzes);



  authLinks.innerHTML = `
      <a href="login.html" class="login-btn">Login</a>
    `;
  