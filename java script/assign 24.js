// JavaScript program that uses a try-catch block to catch and handle a 'SyntaxError' when parsing an invalid JSON string.
let jsonString = '{"name": "John", "age": }'; // Invalid JSON string

try {
    let data = JSON.parse(jsonString);
    console.log("Parsed data:", data);
} catch (error) {
    console.log("Error:", error.message);
}
