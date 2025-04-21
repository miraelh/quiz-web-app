
const adminUser = { username: 'admin@quiz.com', password: 'admin123' };


document.getElementById('loginTab').addEventListener('click', function() {
    document.getElementById('loginTab').classList.add('active');
    document.getElementById('registerTab').classList.remove('active');
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
});

document.getElementById('registerTab').addEventListener('click', function() {
    document.getElementById('registerTab').classList.add('active');
    document.getElementById('loginTab').classList.remove('active');
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});


document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const errorMessage = document.getElementById('error-message');

    if (username === adminUser.username && password === adminUser.password) {
        localStorage.setItem('loggedInUser', JSON.stringify(adminUser));
        window.location.href = 'dashboard.html'; 
    } else {
    
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const user = existingUsers.find(u => u.username === username && u.password === password);
    
        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = 'index.html'; 
          } else {
            errorMessage.textContent = 'Invalid username or password. Please try again.';
          }
        }

});  



document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some(u => u.username === newUsername);
    if (userExists) {
        alert('Username already exists. Please log in.');
    } else {
        const newUser = { username: newUsername, password: newPassword };
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));
        alert('Registration successful! You can now log in.');
    }
    
});  


