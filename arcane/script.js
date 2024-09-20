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
    'image11.jpeg',
    'gif1.webp',
    'gif2.webp',
    'gif3.webp',
    'gif4.webp',
    'gif5.webp',
    'gif6.webp',
    'gif7.webp',
    'gif8.webp',
    'gif9.webp',
    'gif10.webp',
    'gif11.webp'
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
    const currentImage = shuffledImages[currentImageIndex];
    
    // Check if the current image is a gif/webp
    const isGif = currentImage.endsWith('.webp') || currentImage.endsWith('.gif');

    // Toggle between the two background layers
    if (isBackground1Active) {
        background2.style.backgroundImage = `url('images/${currentImage}')`;
        background2.style.opacity = 1;
        background1.style.opacity = 0;
    } else {
        background1.style.backgroundImage = `url('images/${currentImage}')`;
        background1.style.opacity = 1;
        background2.style.opacity = 0;
    }

    // Update index for next image
    currentImageIndex = (currentImageIndex + 1) % shuffledImages.length;

    // Toggle active background
    isBackground1Active = !isBackground1Active;

    // Set the duration based on whether it's a gif or static image
    const duration = isGif ? 3000 : 5000; // 2 seconds for gif, 5 seconds for static images

    // Set the next image change interval
    clearInterval(imageChangeInterval); // Clear the previous interval
    imageChangeInterval = setInterval(setBackgroundImage, duration);
}

// Preload images
preloadImages();

// Initial call to load first image immediately
document.getElementById('background').style.backgroundImage = `url('images/${shuffledImages[currentImageIndex]}')`;

// Set an initial interval based on whether the first image is a gif or not
let imageChangeInterval;
const initialDuration = shuffledImages[currentImageIndex].endsWith('.webp') || shuffledImages[currentImageIndex].endsWith('.gif') ? 2000 : 5000;
imageChangeInterval = setInterval(setBackgroundImage, initialDuration);



// Target dates in PST (UTC-8)
const act1Date = new Date('November 9, 2024 00:00:00 GMT-0800');
const act2Date = new Date('November 16, 2024 00:00:00 GMT-0800');
const act3Date = new Date('November 23, 2024 00:00:00 GMT-0800');

// Start countdown timers
startCountdown(1, act1Date, 'timer1');
startCountdown(2, act2Date, 'timer2');
startCountdown(3, act3Date, 'timer3');

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

            // Build the countdown string, omitting any units with zero
            let countdownParts = [];
            if (days > 0) {
                countdownParts.push(`${days}d`);
            }
            if (hours > 0) {
                countdownParts.push(`${hours}h`);
            }
            if (minutes > 0) {
                countdownParts.push(`${minutes}m`);
            }
            if (seconds > 0) {
                countdownParts.push(`${seconds}s`);
            }

            // If all units are zero (i.e., less than one second left), show "0S"
            if (countdownParts.length === 0) {
                countdownParts.push('0S');
            }

            // Join the parts with spaces and convert to uppercase
            let countdownString = countdownParts.join(' ').toUpperCase();

            // Update the timer element with the uppercase countdown
            timerElement.innerHTML = countdownString;
        }
    }

    interval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call
}



// List of IANA timezone names
const timezones = [
    "Pacific/Honolulu",
    "America/Anchorage",
    "America/Los_Angeles",
    "America/Phoenix",
    "America/Denver",
    "America/Mexico_City",
    "America/Chicago",
    "America/Lima",
    "America/New_York",
    "America/Toronto",
    "America/Caracas",
    "America/Sao_Paulo",
    "America/Argentina/Buenos_Aires",
    "America/Halifax",
    "America/Noronha",
    "Atlantic/South_Georgia",
    "Atlantic/Azores",
    "Atlantic/Cape_Verde",
    "Europe/London",
    "Africa/Accra",
    "Europe/Paris",
    "Europe/Berlin",
    "Africa/Johannesburg",
    "Europe/Istanbul",
    "Europe/Moscow",
    "Asia/Dubai",
    "Asia/Karachi",
    "Asia/Kolkata",
    "Asia/Dhaka",
    "Asia/Bangkok",
    "Asia/Jakarta",
    "Asia/Singapore",
    "Asia/Shanghai",
    "Asia/Hong_Kong",
    "Asia/Seoul",
    "Asia/Tokyo",
    "Australia/Brisbane",
    "Australia/Adelaide",
    "Australia/Sydney",
    "Pacific/Fiji",
    "Pacific/Auckland"
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
