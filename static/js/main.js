function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

function toggleReaderMode() {
    document.body.classList.toggle('reader-mode');
    localStorage.setItem('readerMode', document.body.classList.contains('reader-mode'));
    // Check positions after reader mode changes
    setTimeout(fixShortFirstParagraphs, 100);
}

function fixShortFirstParagraphs() {
    const stories = document.querySelectorAll('.story-content');
    stories.forEach(story => {
        const firstP = story.querySelector('p:first-of-type');
        const secondP = firstP?.nextElementSibling;
        if (!firstP || !secondP || secondP.tagName !== 'P') return;

        // Get the drop cap (first letter pseudo-element)
        // Create a temporary span for the first letter to measure it
        const tempSpan = document.createElement('span');
        tempSpan.textContent = firstP.textContent.charAt(0);
        tempSpan.style.cssText = 'font-size: 4em; float: left; line-height: 0.8;'; // Match your drop cap styles
        firstP.insertBefore(tempSpan, firstP.firstChild);
        
        const dropCapRect = tempSpan.getBoundingClientRect();
        const secondPRect = secondP.getBoundingClientRect();
        
        // Clean up
        firstP.removeChild(tempSpan);

        // If second paragraph starts while still beside drop cap
        if (secondPRect.top < (dropCapRect.top + dropCapRect.height)) {
            firstP.classList.add('short-first-para');
            secondP.classList.add('beside-drop-cap');
        } else {
            firstP.classList.remove('short-first-para');
            secondP.classList.remove('beside-drop-cap');
        }
    });
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

// Add window.onload handler
window.addEventListener('load', fixShortFirstParagraphs);

// Keyboard shortcuts
document.addEventListener('keydown', (event) => {
    if (event.key === 'r' || event.key === 'R') {
        toggleReaderMode();
    } else if (event.key === 'd' || event.key === 'D') {
        toggleDarkMode();
    }
});