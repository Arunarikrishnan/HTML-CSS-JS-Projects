// Get elements from the DOM
const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Add task to the list
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Delete task from the list
function deleteTask(event) {
    if (event.target.classList.contains("delete-button")) {
        event.target.parentElement.remove();
    }
}

// Event listeners
addTaskButton.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);
taskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
