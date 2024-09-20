// Smooth scrolling for navigation links
document.querySelectorAll('.sidenav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// NEW SECTION FOR TYPING EFFECT AAH!

// Typing effect for the first section
const sentences = [
    "listening to laufey",
    "playing path to nowhere",
    "re-watching arcane",
    "drawing my favs <3",
    "playing love and deepspace"
];

// Typing and erasing delays in milliseconds
const typingDelay = 34;
const erasingDelay = 30;
const newSentenceDelay = 900; // Delay between switching to a new sentence
let sentenceIndex = 0;
let characterIndex = 0;
let typing = true;

const typingElement = document.getElementById('typing');
const cursorElement = document.querySelector('.typing-cursor');

function type() {
    if (typing) {
        if (characterIndex < sentences[sentenceIndex].length) {
            // Add next character
            typingElement.textContent += sentences[sentenceIndex].charAt(characterIndex);
            characterIndex++;
            setTimeout(type, typingDelay);
        } else {
            // End of sentence
            typing = false;
            cursorElement.style.opacity = '1'; // Show the cursor
            setTimeout(type, newSentenceDelay);
        }
    } else {
        if (characterIndex > 0) {
            // Remove last character
            typingElement.textContent = sentences[sentenceIndex].substring(0, characterIndex - 1);
            characterIndex--;
            setTimeout(type, erasingDelay);
        } else {
            // Move to the next sentence
            typing = true;
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
            cursorElement.style.opacity = '0'; // Hide the cursor
            setTimeout(type, typingDelay + 1100); // Delay before typing starts to allow cursor blink
        }
    }
}

// Start typing effect when the page loads
window.addEventListener("load", () => {
    setTimeout(type, newSentenceDelay);
});
