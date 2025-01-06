// Ladebalken-Animation
let progress = 0;
const progressBar = document.getElementById('progress-bar');

function increaseProgress() {
    if (progress < 100) {
        progress += 1;
        progressBar.style.width = progress + '%';
    }
}

setInterval(increaseProgress, 50); // Erhöht den Fortschritt alle 50ms
