function checkPassword() {
    const correctPassword = "phished";
    const enteredPassword = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (enteredPassword === correctPassword) {
        window.open("https://sites.google.com/uchicago.edu/site/social-engineering", "_blank");
        message.textContent = "";
    } else {
        message.textContent = "Incorrect password. Please try again.";
    }
}
