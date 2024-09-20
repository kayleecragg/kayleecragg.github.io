// List of background images (place your actual image filenames)
const images = [
    'image1.jpeg',
    'image2.jpeg',
    'image3.jpeg',
    'image4.jpeg',
    'image5.jpeg',
    'image6.jpeg',
    'image7.jpeg',
    'image8.jpeg',
    'image9.jpeg',
    'image10.jpeg',
    'image11.jpeg'
];

// Shuffle function (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
    return array;
}

// Shuffle the images array
const shuffledImages = shuffleArray([...images]); // Make a copy of the images array and shuffle

// Index for tracking current image
let currentImageIndex = 0;

// Boolean to track which background is active
let isBackground1Active = true;

// Preload images to avoid flashes during transition
function preloadImages() {
    shuffledImages.forEach((image) => {
        const img = new Image();
        img.src = `images/${image}`;
    });
}

// Function to set background image with a fade transition
function setBackgroundImage() {
    const background1 = document.getElementById('background');
    const background2 = document.getElementById('background2');

    if (isBackground1Active) {
        // Fade out background1, fade in background2
        background2.style.backgroundImage = `url('images/${shuffledImages[currentImageIndex]}')`;
        background2.style.opacity = 1;
        background1.style.opacity = 0;
    } else {
        // Fade out background2, fade in background1
        background1.style.backgroundImage = `url('images/${shuffledImages[currentImageIndex]}')`;
        background1.style.opacity = 1;
        background2.style.opacity = 0;
    }

    // Update index for next image
    currentImageIndex = (currentImageIndex + 1) % shuffledImages.length;

    // Toggle active background
    isBackground1Active = !isBackground1Active;
}

// Preload images
preloadImages();

// Initial call to load first image immediately
document.getElementById('background').style.backgroundImage = `url('images/${shuffledImages[currentImageIndex]}')`;

// Change image every 5 seconds
setInterval(setBackgroundImage, 5000);



// Target dates in PST (UTC-8)
const act1Date = new Date('November 9, 2024 00:00:00 GMT-0800');
const act2Date = new Date('November 16, 2024 00:00:00 GMT-0800');
const act3Date = new Date('November 23, 2024 00:00:00 GMT-0800');

// Start countdown timers
startCountdown(1, act1Date, 'timer1');
startCountdown(2, act2Date, 'timer2');
startCountdown(3, act3Date, 'timer3');

// Function to start a countdown timer
function startCountdown(actNumber, targetDate, timerElementId) {
    const timerElement = document.getElementById(timerElementId);
    let interval; // Declare interval here to fix scoping issue

    function updateTimer() {
        const now = new Date();
        const distance = targetDate - now;

        if (distance <= 0) {
            timerElement.innerHTML = `LIVE NOW<br><a href="https://www.netflix.com/title/81435684" target="_blank">
            <img src="images/netflix.webp" alt="Netflix" style="width: 80px; height: auto; margin-top: 10px;">
        </a>`;
            clearInterval(interval);
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((distance / (1000 * 60)) % 60);
            const seconds = Math.floor((distance / 1000) % 60);

            // Create the countdown string
            let countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            // Convert the countdown string to uppercase
            countdownString = countdownString.toUpperCase();

            // Update the timer element with the uppercase countdown
            timerElement.innerHTML = countdownString;
        }
    }

    interval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call
}


// List of IANA timezone names
const timezones = [
    'America/Los_Angeles',
    'America/Denver',
    'America/Chicago',
    'America/New_York',
    'America/Mexico_City',
    'America/Sao_Paulo',
    'America/Argentina/Buenos_Aires',
    'Europe/London',
    'Europe/Paris',
    'Europe/Istanbul',
    'Africa/Accra',
    'Asia/Dubai',
    'Asia/Seoul',
    'Asia/Tokyo',
    'Asia/Singapore',
    'Australia/Sydney',
    // Add more timezones as needed
];

// Populate timezone selector
function populateTimezones() {
    const select = document.getElementById('timezone');
    timezones.forEach((tz) => {
        const option = document.createElement('option');
        option.value = tz;
        option.textContent = tz.replace('_', ' ');
        select.appendChild(option);
    });
}

populateTimezones();

// Display act times in user's local timezone on page load
const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
document.getElementById('timezone').value = userTimezone;
displayActTimesInTimezone(userTimezone);

// Update act times when timezone is changed
document.getElementById('timezone').addEventListener('change', function() {
    const selectedTimezone = this.value;
    displayActTimesInTimezone(selectedTimezone);
});

function displayActTimesInTimezone(timezone) {
    const options = {
        timeZone: timezone,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };

    // Convert the dates to uppercase
    const act1TimeString = new Intl.DateTimeFormat('en-US', options).format(act1Date).toUpperCase();
    const act2TimeString = new Intl.DateTimeFormat('en-US', options).format(act2Date).toUpperCase();
    const act3TimeString = new Intl.DateTimeFormat('en-US', options).format(act3Date).toUpperCase();

    // Display the formatted dates
    document.getElementById('act1-time').textContent = `ACT I: ${act1TimeString}`;
    document.getElementById('act2-time').textContent = `ACT II: ${act2TimeString}`;
    document.getElementById('act3-time').textContent = `ACT III: ${act3TimeString}`;
}

