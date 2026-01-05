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

    students.push(student);

    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";

    displayStudent(); 
}

// Display all students with Update & Delete buttons
function displayStudent() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    students.map(function(student, index) {
        let li = document.createElement("li");

        li.innerHTML =
            student.name + " - " + student.marks +
            ' <button onclick="updateStudent(' + index + ')">Update</button>' +
            ' <button onclick="deleteStudent(' + index + ')">Delete</button>';

        list.appendChild(li);
    });
}

// Show passed students only
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

// Delete student by index
function deleteStudent(index) {
    students = students.filter(function(student, i) {
        return i !== index;
    });

    displayStudent();
}

// Update marks immutably using index
function updateStudent(index) {
    let newMarks = prompt("Enter new marks:");

    students = students.map(function(student, i) {
        if (i === index) {
            return {
                ...student,
                marks: Number(newMarks)
            };
        }
        return student;
    });

    displayStudent();
}
