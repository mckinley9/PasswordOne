function checkPassword() {
    const correctPassword = "GonePhishing";
    const enteredPassword = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (enteredPassword === correctPassword) {
        window.open("https://sites.google.com/uchicago.edu/site/phishing-recap", "_blank");
        message.textContent = "";
    } else {
        message.textContent = "Incorrect password. Please try again.";
    }
}
