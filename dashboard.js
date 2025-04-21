document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser || loggedInUser.username !== 'admin@quiz.com') {
        window.location.href = 'index.html';
        return;
    }
})