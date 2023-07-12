// **Q.8**  Create a Simple Todo Web App with following features Using React :

// - An input button where users can type their tasks.
// - On clicking the submit button, the entered task should be displayed in the UI.
// - The UI layout should resemble the image provided.





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
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
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
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;






// The TodoApp component uses the useState hook to manage the tasks and the input value. The handleInputChange function is called when the input value changes, updating the inputValue state. The handleSubmit function is called when the form is submitted, adding the entered task to the tasks state and clearing the input value.

// The JSX code represents the UI layout, including the input field, submit button, and the list of tasks. Each task is rendered as an <li> element within an <ul>, with the key prop set to the index of the task in the tasks array.

// To use this Todo app component, you would import it into your main application file and include it in the render method or return statement. For example:




import React from 'react';
import TodoApp from './TodoApp';

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
