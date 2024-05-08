// JavaScript program to create a slideshow that changes the displayed image when a next or previous button is clicked.
let currentIndex = 0;
let images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Example array of image filenames

function showImage(index) {
    // Display the image at the specified index
    console.log("Displaying image:", images[index]);
}

function next() {
    // Increment the index to show the next image
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function previous() {
    // Decrement the index to show the previous image
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}
