window.onload = function() {
    loadTasks();
}

function addTask() {
    const taskInput = document.getElementById("taskInput").value;
    if (taskInput) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(taskInput);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
    }
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${task} <button onclick="removeTask(${index})">Remove Task</button>`;
        taskList.appendChild(li);
    });
}

function removeTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function loadTasks() {
    displayTasks();
}
