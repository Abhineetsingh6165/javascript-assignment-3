// Event listener for the "Add" button
document.getElementById("addButton").addEventListener("click", function() {
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        addTodoItem(todoText);
        todoInput.value = "";
    }
});

// Function to add a new to-do item
function addTodoItem(todoText) {
    const todoList = document.getElementById("todoList");

    // Create new list item
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const textSpan = document.createElement("span");
    textSpan.textContent = todoText;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";

    // Event listener for the "Delete" button
    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    // Event listener for the checkbox
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            li.classList.add("checked");
            playSound(); // Play the 'ding' sound when checked
        } else {
            li.classList.remove("checked");
        }
    });

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
}

// Function to play the 'ding' sound
function playSound() {
    const sound = document.getElementById("sound");
    sound.currentTime = 0; // Reset the audio to the beginning
    sound.play();
}
