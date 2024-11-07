function login() {
    // You can add basic validation here if necessary
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // Redirect to home.html
        window.location.href = "home.html";
    } else {
        alert("Please enter both email and password");
    }
}
