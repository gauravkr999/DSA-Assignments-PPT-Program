const taskInput = document.getElementById('task-input');
const submitBtn = document.getElementById('submit-btn');
const taskList = document.getElementById('task-list');

submitBtn.addEventListener('click', addTask);

function addTask() {
    const task = taskInput.value.trim();
    if (task !== '') {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
