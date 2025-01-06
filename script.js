// Ladebalken-Animation
let progress = 0;
const progressBar = document.getElementById('progress-bar');

function increaseProgress() {
    if (progress < 100) {
        progress += 1;
        progressBar.style.width = progress + '%';
    } else {
        clearInterval(progressInterval); // Stoppt die Animation, wenn 100% erreicht sind
        setTimeout(function() {
            window.location.href = "dashboard.html"; // Weiterleitung zur "Dashboard"-Seite
        }, 500); // Verzögerung von 500ms, um den Abschluss zu sehen
    }
}

// Starte die Lade-Animation alle 50ms
const progressInterval = setInterval(increaseProgress, 50);
