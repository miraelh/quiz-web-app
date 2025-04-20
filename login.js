
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
});  



document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
});  


