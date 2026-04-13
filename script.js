function login() {
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let errorMsg = document.getElementById("error-msg");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[6-9]\d{9}$/;

    if (!emailPattern.test(email)) {
        errorMsg.innerText = "Please enter a valid email address.";
        return;
    }

    if (!phonePattern.test(phone)) {
        errorMsg.innerText = "Please enter a valid 10-digit phone number.";
        return;
    }

    window.location.href = "portfolio.html";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function logout() {
    window.location.href = "index.html";
}
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Reset messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('invalid'));

    // Name Validation
    const name = document.getElementById('name');
    if (name.value.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        name.classList.add('invalid');
        isValid = false;
    }

    // Email Validation
    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        email.classList.add('invalid');
        isValid = false;
    }

    // Message Validation
    const message = document.getElementById('message');
    if (message.value.trim().length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
        message.classList.add('invalid');
        isValid = false;
    }

    if (isValid) {
        // Here you would typically send data to a server
        document.getElementById('feedbackForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
    }
});
