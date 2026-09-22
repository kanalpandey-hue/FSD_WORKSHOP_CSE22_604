const fs = require("fs");

const file = "attendance.txt";

// Add a student
function addStudent(name) {
    fs.appendFileSync(file, name + "\n");
    console.log("Student added.");
}

// Show all students
function showStudents() {
    if (!fs.existsSync(file)) {
        console.log("No attendance records.");
        return;
    }

    const data = fs.readFileSync(file, "utf8");
    console.log("Students:");
    console.log(data);
}

// Update a student's name
function updateStudent(oldName, newName) {
    if (!fs.existsSync(file)) return;

    let data = fs.readFileSync(file, "utf8");
    data = data.replace(oldName, newName);

    fs.writeFileSync(file, data);
    console.log("Student updated.");
}

// Delete a student
function deleteStudent(name) {
    if (!fs.existsSync(file)) return;

    let students = fs.readFileSync(file, "utf8")
        .split("\n")
        .filter(student => student.trim() !== name);

    fs.writeFileSync(file, students.join("\n"));
    console.log("Student deleted.");
}

// Example operations
addStudent("Kanal");
addStudent("Rahul");

showStudents();

updateStudent("Rahul", "Aman");

deleteStudent("Kanal");

showStudents();