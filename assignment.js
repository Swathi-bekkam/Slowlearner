document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const question = document.getElementById('question').value;
    const messageDiv = document.getElementById('message');
  
    if (name && email && question) {
      messageDiv.textContent = 'Thank you for submitting your question!';
      messageDiv.style.color = 'green';
  
      // Clear the form fields
      document.getElementById('questionForm').reset();
    } else {
      messageDiv.textContent = 'Please fill out all fields.';
      messageDiv.style.color = 'red';
    }
  });
  