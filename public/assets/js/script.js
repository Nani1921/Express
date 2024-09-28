document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (validateForm(name, email, password)) {
        console.log('Registration successful!');
        // Simulate sending to MongoDB Shell
        alert('User registered successfully.');
    }
});

function validateForm(name, email, password) {
    if (name === '' || email === '' || password === '') {
        alert('All fields are required.');
        return false;
    }
    // Additional validation can be added here
    return true;
}


