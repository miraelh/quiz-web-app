localStorage.clear();

const sampleQuizzes = [
    { name: "French Quizz" ,
      questions: [
        { question: "How do you say 'hello' in French?", 
          options: ["Hola", "Bonjour", "Ciao"], 
          correct: "Bonjour" },
        { question: "What is the French word for 'book'?", 
          options: ["Livre", "Libro", "Buch"], 
          correct: "Livre" },
        { question: "What is the capital of France?", 
          options: ["Paris", "London", "Berlin"], 
          correct: "Paris" }
      ]
    },
    { name: "Spanish Quiz" ,
      questions: [
        { question: "How do you say 'thank you' in Spanish?", 
          options: ["Gracias", "Merci", "Danke"], 
          correct: "Gracias" },
        { question: "What is the Spanish word for 'friend'?", 
          options: ["Amigo", "Freund", "Copain"], 
          correct: "Amigo" },
        { question: "Which country speaks Spanish as its primary language?", 
          options: ["Brazil", "Argentina", "Germany"], 
          correct: "Argentina" }
    ]
    },
    { name: "German Quiz" ,
      questions: [
        { question: "How do you say 'good morning' in German?", 
          options: ["Guten Morgen", "Buenos Dias", "Buongiorno"], 
          correct: "Guten Morgen" },
        { question: "What is the German word for 'apple'?", 
          options: ["Manzana", "Apfel", "Pomme"], 
          correct: "Apfel" },
        { question: "What is the capital of Germany?", 
          options: ["Berlin", "Vienna", "Munich"], 
          correct: "Berlin" }
      ]
    }
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
  