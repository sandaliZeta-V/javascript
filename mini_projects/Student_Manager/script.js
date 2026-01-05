// Array to store students
let students = [];

// Add student
function addStudent() {
    let name = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;

    let student = {
        name: name,
        marks: Number(marks)
    };

    students.push(student);   // store student in array

    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}

// Display all students
function displayStudent() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    students.map(function(student) {
        let li = document.createElement("li");
        li.innerText = student.name + " - " + student.marks;
        list.appendChild(li);
    });
}

// Show passed students (marks >= 35)
function passedStudent() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    let passed = students.filter(function(student) {
        return student.marks >= 35;
    });

    passed.map(function(student) {
        let li = document.createElement("li");
        li.innerText = student.name + " - " + student.marks;
        list.appendChild(li);
    });
}

// Delete last student
function deleteStudent() {
    students.pop();   // removes last student
    displayStudent();
}


// Update marks immutably
function updateStudent() {
    let studentName = prompt("Enter student name to update marks:");
    let newMarks = prompt("Enter new marks:");

    students = students.map(function(student) {
        if (student.name === studentName) {
            return {
                ...student,
                marks: Number(newMarks)
            };
        }
        return student;
    });

    displayStudent();
}
