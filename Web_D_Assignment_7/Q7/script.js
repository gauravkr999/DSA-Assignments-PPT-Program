const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const previewName = document.getElementById('preview-name');
const previewEmail = document.getElementById('preview-email');
const previewMessage = document.getElementById('preview-message');

nameInput.addEventListener('input', updatePreview);
emailInput.addEventListener('input', updatePreview);
messageInput.addEventListener('input', updatePreview);

function updatePreview() {
    previewName.textContent = nameInput.value;
    previewEmail.textContent = emailInput.value;
    previewMessage.textContent = messageInput.value;
}
