
function send() {
    const feedbackInput = document.querySelector(".feedback-input");
    
    if (feedbackInput.value.trim() === '') {
        alert("You must write your name, email, and comment.");
    } else {
        alert("Your comment is sent");
    }
}

function changeText(element) {
    element.textContent = "Doguhan Ilter with 'h'";
}

function resetText(element) {
    element.textContent = "Doguhan Ilter";
}
    