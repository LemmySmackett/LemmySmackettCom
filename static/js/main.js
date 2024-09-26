function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

function toggleReaderMode() {
    document.body.classList.toggle('reader-mode');
    localStorage.setItem('readerMode', document.body.classList.contains('reader-mode'));
}

document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    const readerModeToggle = document.getElementById('reader-mode-toggle');
    if (readerModeToggle) {
        readerModeToggle.addEventListener('click', toggleReaderMode);
    }

    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    if (localStorage.getItem('readerMode') === 'true') {
        document.body.classList.add('reader-mode');
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (event) => {
    if (event.key === 'r' || event.key === 'R') {
        toggleReaderMode();
    } else if (event.key === 'd' || event.key === 'D') {
        toggleDarkMode();
    }
});
