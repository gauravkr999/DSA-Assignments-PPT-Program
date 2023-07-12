const taskInput = document.getElementById('task-input');
const submitBtn = document.getElementById('submit-btn');
const taskList = document.getElementById('task-list');

submitBtn.addEventListener('click', addTask);

function addTask() {
    const task = taskInput.value.trim();
    if (task !== '') {
        const li = document.createElement('li');
        li.textContent = task;
        const updateStatusBtn = createUpdateStatusButton();
        const editTodoBtn = createEditTodoButton();
        const deleteTodoBtn = createDeleteTodoButton();
        li.appendChild(updateStatusBtn);
        li.appendChild(editTodoBtn);
        li.appendChild(deleteTodoBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function createUpdateStatusButton() {
    const updateStatusBtn = document.createElement('button');
    updateStatusBtn.textContent = 'Update Status';
    updateStatusBtn.classList.add('update-status-btn');
    updateStatusBtn.addEventListener('click', function () {
        this.parentNode.classList.toggle('completed');
    });
    return updateStatusBtn;
}

function createEditTodoButton() {
    const editTodoBtn = document.createElement('button');
    editTodoBtn.textContent = 'Edit';
    editTodoBtn.classList.add('edit-todo-btn');
    editTodoBtn.addEventListener('click', function () {
        const task = this.parentNode.firstChild.textContent;
        const updatedTask = prompt('Update the task:', task);
        if (updatedTask !== null && updatedTask.trim() !== '') {
            this.parentNode.firstChild.textContent = updatedTask;
        }
    });
    return editTodoBtn;
}

function createDeleteTodoButton() {
    const deleteTodoBtn = document.createElement('button');
    deleteTodoBtn.textContent = 'Delete Todo';
    deleteTodoBtn.classList.add('delete-todo-btn');
    deleteTodoBtn.addEventListener('click', function () {
        this.parentNode.remove();
    });
    return deleteTodoBtn;
}






// In this updated code, a new function createEditTodoButton() is added to create the "Edit" button dynamically for each task. When the "Edit" button is clicked, a prompt is displayed where the user can enter the updated task. If the user clicks "OK" and provides a non-empty value, the task text content is updated with the new value.

// You can also add CSS styles to the edit-todo-btn class to modify the appearance of the "Edit" button.

// Now, when you click the "Edit" button for a specific todo, a prompt will appear to allow you to edit the task. If you provide a new value and click "OK," the task in the UI will be immediately updated to reflect the changes.

// Remember to update the CSS code in the styles.css file to match the desired layout and design.
