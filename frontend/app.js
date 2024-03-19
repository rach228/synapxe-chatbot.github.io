function showUpload() {
    // Hide login, show upload
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('upload-section').style.display = 'block';
}

function showChat() {
    // Hide upload, show chat
    document.getElementById('upload-section').style.display = 'none';
    document.getElementById('chat-section').style.display = 'block';
    
    // Dynamically import the chat module and initialize the chat widget
    import('https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js')
        .then((module) => {
            const Chatbot = module.default;
            Chatbot.initFull({
                chatflowid: "6ef60869-af77-4650-a7f3-5280599a10af",
                apiHost: "https://flowise-flowise.apps.ky4n7bsb.eastus.aroapp.io",
            });
        })
        .catch(err => console.error('Failed to load the chatbot module:', err));
}

// Optionally, keep the login function if needed
function login() {
    // Simple login logic to switch views
    showUpload(); // Directly call showUpload for demonstration
}
