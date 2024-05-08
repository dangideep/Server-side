// JavaScript program to sort the characters in a string alphabetically.
function sortString(str) {
    // Convert the string to an array of characters, sort it, and join back to form a string
    return str.split('').sort().join('');
}
