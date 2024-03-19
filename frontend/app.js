function login() {
    // Simple login validation
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === "admin" && password === "admin") { // Simple check (for demonstration only)
        window.location.href = 'upload.html'; // Redirect to the upload page
    } else {
        alert("Invalid credentials!");
    }
}

function displayFileContent() {
    const fileInput = document.getElementById('fileInput');
    const fileContent = document.getElementById('fileContent');
    
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        fileContent.innerText = e.target.result; // Display file content
    };
    
    reader.readAsText(file); // Read the file content as text
}

function goToChat() {
    window.location.href = 'chat.html'; // Redirect to the chat page
}