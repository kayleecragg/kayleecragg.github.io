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
