// JavaScript program to create a clock.
function displayTime() {
    // Get current time
    let now = new Date();
    // Format hours, minutes, and seconds with leading zeros if necessary
    let hours = ('0' + now.getHours()).slice(-2);
    let minutes = ('0' + now.getMinutes()).slice(-2);
    let seconds = ('0' + now.getSeconds()).slice(-2);
    // Display time in console
    console.log(hours + ":" + minutes + ":" + seconds);
}

// Update time every second
setInterval(displayTime, 1000);
