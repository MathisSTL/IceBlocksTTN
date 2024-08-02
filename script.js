function validateAnswer() {
    var userInput = document.getElementById("userInput").value;
    var message = document.getElementById("message");
    
    if (userInput.trim().toLowerCase() === "54") {
        message.textContent = "Bravo";
        message.style.color = "green";
    } else {
        message.textContent = "Essayez encore";
        message.style.color = "red";
    }
}
