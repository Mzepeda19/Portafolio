let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let guess = document.getElementById('guess').value;
    let message = document.getElementById('message');

    if (guess < randomNumber) {
        message.textContent = "¡El número es más alto!";
    } else if (guess > randomNumber) {
        message.textContent = "¡El número es más bajo!";
    } else {
        message.textContent = "¡Correcto! El número era " + randomNumber;
    }
}

document.querySelector('form').addEventListener('submit', function(event) {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;

    if (!nombre || !email) {
        event.preventDefault();
        alert('Por favor, completa todos los campos.');
    }
});
function showSkillDetails(skill) {
    let skillDetails = {
        HTML5: 'HTML5 es el último estándar del lenguaje de marcado para la web...',
        CSS3: 'CSS3 es la última versión de CSS que permite crear sitios web más atractivos...',
        // ... y así sucesivamente
    };
    document.getElementById('skillDetails').innerText = skillDetails[skill];
    document.getElementById('skillModal').style.display = "block";
}

function closeModal() {
    document.getElementById('skillModal').style.display = "none";
}

