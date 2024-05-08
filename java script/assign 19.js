// JavaScript function to convert minutes into hours and minutes.
function timeConvert(minutes) {
    // Calculate hours and minutes
    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;
    // Construct the output string
    let result = minutes + " minutes = " + hours + " hour(s) and " + remainingMinutes + " minute(s).";
    return result;
}
