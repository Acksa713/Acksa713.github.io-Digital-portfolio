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