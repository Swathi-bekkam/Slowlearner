document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    if (name && email && feedback) {
        document.getElementById('responseMessage').innerText = 'Thank you for your feedback!';
        this.reset();
    } else {
        document.getElementById('responseMessage').innerText = 'Please fill in all fields.';
    }
});
