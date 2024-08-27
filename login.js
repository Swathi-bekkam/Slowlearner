document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    // Simple validation (for demonstration purposes)
    if (username === 'rohith' && password === '1234') {
      alert('Login successful!');
      window.location.href = "/qae.html";
      // You can redirect the user to another page or perform other actions here
    } else {
      errorMessage.textContent = 'Invalid username or password';
    }
    if (username === 'praveen' && password === '1234') {
      alert('Login successful!');
      window.location.href = "/qae.html";
      // You can redirect the user to another page or perform other actions here
    } else {
      errorMessage.textContent = 'Invalid username or password';
    }
    if (username === 'jagan' && password === '1234') {
      alert('Login successful!');
      window.location.href = "/qae.html";
      // You can redirect the user to another page or perform other actions here
    } else {
      errorMessage.textContent = 'Invalid username or password';
    }
  });
  