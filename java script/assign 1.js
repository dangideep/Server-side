// JavaScript function to find all the index positions of a given word within a given string.
function findAllIndexes(str, word) {
    let indexes = [];
    let index = str.indexOf(word);
    while (index !== -1) {
        // Push the index of the found word into the array
        indexes.push(index);
        // Continue searching for the word from the next index
        index = str.indexOf(word, index + 1);
    }
    return indexes;
}
