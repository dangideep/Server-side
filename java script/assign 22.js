// JavaScript program to create a class called 'Rectangle' with properties for width and height.
// Include methods to calculate rectangle area and perimeter.
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Method to calculate rectangle area
    calculateArea() {
        return this.width * this.height;
    }

    // Method to calculate rectangle perimeter
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Create an instance of the 'Rectangle' class
let rectangle = new Rectangle(5, 4);
// Calculate area and perimeter
console.log("Area of the rectangle:", rectangle.calculateArea());
console.log("Perimeter of the rectangle:", rectangle.calculatePerimeter());
