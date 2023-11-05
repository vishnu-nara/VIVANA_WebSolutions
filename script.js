function contactUs() {

    window.location.href = 'mailto:naravishnu2002@gmail.com';
}

function getStarted() {
    var email = document.getElementById("email").value;
    if (email.trim() !== "") {
        alert("Get Started with email: " + email);
    } else {
        alert("Please enter a valid email address.");
    }
}