document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser || loggedInUser.username !== 'admin@quiz.com') {
        window.location.href = 'index.html';
        return;
    }

    const userScores = JSON.parse(localStorage.getItem('userScores')) || {};
    const tableBody = document.querySelector('tbody');

})