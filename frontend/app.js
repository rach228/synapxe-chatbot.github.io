function login() {
    // Example login check (for demonstration)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === "admin" && password === "admin") {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('upload-section').style.display = 'block';
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
        fileContent.innerText = e.target.result;
    };
    
    reader.readAsText(file);
}

function goToChat() {
    document.getElementById('upload-section').style.display = 'none';
    document.getElementById('chat-section').style.display = 'block';
}
