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
        const deleteTodoBtn = createDeleteTodoButton();
        li.appendChild(updateStatusBtn);
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

function createDeleteTodoButton() {
    const deleteTodoBtn = document.createElement('button');
    deleteTodoBtn.textContent = 'Delete Todo';
    deleteTodoBtn.classList.add('delete-todo-btn');
    deleteTodoBtn.addEventListener('click', function () {
        this.parentNode.remove();
    });
    return deleteTodoBtn;
}
