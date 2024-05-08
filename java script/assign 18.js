// JavaScript function to convert case of letters in a string.
function convertCase(str) {
    // Use regular expressions to replace uppercase letters with lowercase letters and vice versa
    return str.replace(/([a-z])|([A-Z])/g, function(match, p1, p2) {
        return p1 ? p1.toUpperCase() : p2.toLowerCase();
    });
}
