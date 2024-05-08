// JavaScript program to implement a stack that checks if a given element is present or not.
class Stack {
    constructor() {
        this.items = [];
    }

    // Push element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Check if element is present in the stack
    contains(element) {
        return this.items.includes(element);
    }
}

// Example usage:
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Is 2 present in the stack?", stack.contains(2)); // Should print true
console.log("Is 5 present in the stack?", stack.contains(5)); // Should print false
