function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}

function checkPassword(password) {
  var correctPassword = "phish"; // Set the correct password here
  if (password === correctPassword) {
    return "https://sites.google.com/uchicago.edu/demo-site-v2/demo-puzzle-2"; // Set the redirect URL here
  } else {
    return "Incorrect password. Please try again.";
  }
}
