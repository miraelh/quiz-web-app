document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser || loggedInUser.username !== 'admin@quiz.com') {
        window.location.href = 'index.html';
        return;
    }

    const userScores = JSON.parse(localStorage.getItem('userScores')) || {};
    const tableBody = document.querySelector('tbody');
   
    Object.keys(userScores).forEach(username => {
        const scores = userScores[username];
        const totalScore = scores.reduce((acc, score) => acc + score.score, 0);
        const numberOfQuizzes = scores.length;
        const averageScore = numberOfQuizzes > 0 ? (totalScore / numberOfQuizzes).toFixed(2) : 0;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${username}</td>
            <td>${averageScore}</td>
        `;
        tableBody.appendChild(row);
    });
    
})