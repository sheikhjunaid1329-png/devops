// Navigation Functions
function hideAllScreens() {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.add('hidden'));
}

function showScreen(screenId) {
    hideAllScreens();
    document.getElementById(screenId).classList.remove('hidden');
}

function goToScreen2() {
    showScreen('screen2');
}

function goToScreen3Like() {
    showScreen('screen3');
}

function goToDislike() {
    showScreen('screen4');
}

function goToFinite() {
    showScreen('screen5');
}

function goToInfinite() {
    showScreen('screen6');
}

function goToPassword() {
    document.getElementById('passwordInput').value = '';
    document.getElementById('passwordError').textContent = '';
    showScreen('screen7');
}

function exitSite() {
    if (confirm('Are you sure you want to exit?')) {
        showScreen('screen1');
    }
}

// Password Check
function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value.toLowerCase();
    const correctPassword = 'love';
    const errorElement = document.getElementById('passwordError');

    if (passwordInput === correctPassword) {
        errorElement.textContent = '';
        showScreen('screenSuccess');
    } else {
        errorElement.textContent = '❌ Incorrect password. Try again!';
        document.getElementById('passwordInput').value = '';
    }
}

// Allow Enter key to submit password
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                checkPassword();
            }
        });
    }
});

function restartSite() {
    showScreen('screen1');
}