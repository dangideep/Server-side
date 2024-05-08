// JavaScript program to delete the rollno property from an object and print the object before and after deleting the property.
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log("Object before deleting rollno property:", student);
// Delete the rollno property from the object
delete student.rollno;
console.log("Object after deleting rollno property:", student);
