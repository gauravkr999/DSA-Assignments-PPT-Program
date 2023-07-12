// **Q. 9** Expand the existing todo web app with two additional functionalities:

// 1. On clicking the "Update Status" button:
//     - Update the status of the task.
    
// 2. On clicking the "Remove Todo" button:
//     - Remove the selected todo from the UI.
//     - Ensure that the deleted todo is no longer visible in the todo list.






import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { task: inputValue, status: 'pending' }]);
      setInputValue('');
    }
  };

  const handleUpdateStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = 'completed';
    setTasks(updatedTasks);
  };

  const handleRemoveTodo = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className={task.status === 'completed' ? 'completed' : ''}>
              {task.task}
            </span>
            <button onClick={() => handleUpdateStatus(index)}>Update Status</button>
            <button onClick={() => handleRemoveTodo(index)}>Remove Todo</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;





// In this updated code:

// The tasks state is modified to store objects containing the task and its status. The initial status is set to 'pending'.
// The handleUpdateStatus function is called when the "Update Status" button is clicked. It updates the status of the selected task to 'completed'.
// The handleRemoveTodo function is called when the "Remove Todo" button is clicked. It filters out the selected task from the tasks state array.
// The rendered tasks in the <ul> element are modified to include the task's status and the "Update Status" and "Remove Todo" buttons. The handleUpdateStatus and handleRemoveTodo functions are passed the respective task index as an argument.
// Additionally, a CSS class called 'completed' is conditionally added to the task's <span> element based on its status. You can define this CSS class in your stylesheet to style completed tasks differently.

// By implementing these changes, you can now update the status of a task and remove it from the UI when necessary, expanding the functionality of the Todo web app.







