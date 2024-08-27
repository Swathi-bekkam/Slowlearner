document.addEventListener('DOMContentLoaded', function () {
    let timer = 300; // 5 minutes in seconds
    const timerDisplay = document.getElementById('timer');
    const quizForm = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
  
    // Timer countdown function
    const countdown = setInterval(() => {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
      timerDisplay.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      timer--;
  
      if (timer < 0) {
        clearInterval(countdown);
        timerDisplay.textContent = "Time's up!";
        quizForm.submit();
      }
    }, 1000);
  
    // Handle form submission
    quizForm.addEventListener('submit', function (event) {
      event.preventDefault();
      clearInterval(countdown);
  
      const formData = new FormData(quizForm);
      const answers = {};
      for (let i = 1; i <= 30; i++) {
        answers[`q${i}`] = formData.get(`q${i}`);
      }
  
      // Simple logic to store answers (could be sent to a server in a real application)
      const correctAnswers = {
        q1: '4',
        q2: 'Paris',
        q3: '8',
        q4: 'Elephant',
        q5: '2',
        q6: '4',
        q7: 'H2O',
        q8: 'Shakespeare',
        q9: '30',
        q10: 'Mars',
        q11: 'Blue Whale',
        q12: '7',
        q13: 'Tokyo',
        q14: '3',
        q15: 'Leonardo da Vinci',
        q16: '100',
        q17: '366',
        q18: 'Rome',
        q19: '7',
        q20: 'Avocado',
        q21: 'Diamond',
        q22: '8',
        q23: 'Pacific',
        q24: 'Nile',
        q25: 'Carbon Dioxide',
        q26: 'Mercury',
        q27: 'Portuguese',
        q28: 'Yen',
        q29: '26',
        q30: '299792458'
      };
  
      let score = 0;
      for (let key in correctAnswers) {
        if (answers[key].toString().toLowerCase() === correctAnswers[key].toString().toLowerCase()) {
          score++;
        }
      }
  
      resultDiv.textContent = `You scored ${score} out of 30`;
    });
  });
  