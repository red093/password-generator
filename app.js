function generatePassword() {
    const length = document.getElementById('length').value;
    const numUppercase = document.getElementById('num-uppercase').value;
    const numLowercase = document.getElementById('num-lowercase').value;
    const numNumbers = document.getElementById('num-numbers').value;
    const numSymbols = document.getElementById('num-symbols').value;

    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let allCharacters = '';
    allCharacters += uppercaseLetters.repeat(numUppercase);
    allCharacters += lowercaseLetters.repeat(numLowercase);
    allCharacters += numbers.repeat(numNumbers);
    allCharacters += symbols.repeat(numSymbols);

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    document.getElementById('password').value = password;
}

function copyToClipboard() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand('copy');

    alert('Password copied to clipboard!');
}

// Initialize Clipboard.js
new ClipboardJS('#copy', {
    target: function() {
        return document.getElementById('password');
    }
});
