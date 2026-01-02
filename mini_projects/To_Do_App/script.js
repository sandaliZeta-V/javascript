let tasks = [];     //creates an empty array to store tasks

// Add Task
function addTask() {

    let task = document.getElementById("taskInput").value;
    tasks.push(task);
    document.getElementById("taskInput").value = "";
    
}

// Display Task
function displayTask() {
    let list = document.getElementById("TaskList");
    list.innerHTML = "";   //Clears list first to avoid duplicate tasks.

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.innerText = tasks[i];
        list.appendChild(li);
    }
}

// Delete Task
function deleteTask() {
    tasks.pop();
    displayTask();
}
