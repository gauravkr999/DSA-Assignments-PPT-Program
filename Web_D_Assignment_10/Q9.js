// Q9.  ****You are tasked with building the backend for a Todo web application. The application allows users to create, update, and delete tasks in their to-do list with Api Endpoint as mentioned below

// **`/`** -->  send all the todos which are created by user

// **`/add`** --> to create todo create a middleware to validate user providing all the mandatory input (task), if user doesn't provide task as input send resp as validation failed

// **`/update/:id`**  --> to update todo with Todo Id, after updating send resp as {msg:"todo update successfully",data:allTodos}

// **`/delete/:id`** -->  to update todo with Todo id, after deleting send resp as {msg:"todo deleted",data:allTodos}






// To build the backend for a Todo web application with the given API endpoints using Express, you can follow these steps:

// Step 1: Set up the project
// 1. Create a new directory for your project.
// 2. Open a terminal or command prompt and navigate to the project directory.
// 3. Initialize a new Node.js project by running the following command:
//    ```
//    npm init -y
//    ```
// 4. Install Express and body-parser (to parse JSON data) by running the following command:
//    ```
//    npm install express body-parser
//    ```

// Step 2: Create the server file
// 1. Create a new file called `server.js` in your project directory.
// 2. Open `server.js` with a text editor.
// 3. Import the required modules and create an Express app:
//    ```javascript
//    const express = require('express');
//    const bodyParser = require('body-parser');
   
//    const app = express();
//    app.use(bodyParser.json());
//    ```

// Step 3: Set up the initial todo list
// 1. Create a variable to store the todos and initialize it as an empty array:
//    ```javascript
//    let todos = [];
//    ```

// Step 4: Define the API endpoints
// 1. Add a route handler for the '/' route that sends all the todos created by the user as a JSON response:
//    ```javascript
//    app.get('/', (req, res) => {
//      res.json(todos);
//    });
//    ```

// 2. Create a middleware function to validate if the user provides the mandatory input (task) when creating a new todo:
//    ```javascript
//    const validateTodoInput = (req, res, next) => {
//      const { task } = req.body;
//      if (!task) {
//        return res.status(400).json({ error: 'Validation failed. Task is required.' });
//      }
//      next();
//    };
//    ```

// 3. Add a route handler for the '/add' route that creates a new todo:
//    ```javascript
//    app.post('/add', validateTodoInput, (req, res) => {
//      const { task } = req.body;
//      const todo = { id: todos.length + 1, task };
//      todos.push(todo);
//      res.json(todo);
//    });
//    ```

// 4. Add a route handler for the '/update/:id' route that updates a specific todo by its id:
//    ```javascript
//    app.put('/update/:id', (req, res) => {
//      const { id } = req.params;
//      const { task } = req.body;
//      const todoIndex = todos.findIndex(todo => todo.id === Number(id));
//      if (todoIndex === -1) {
//        return res.status(404).json({ error: 'Todo not found.' });
//      }
//      todos[todoIndex].task = task;
//      res.json({ msg: 'Todo updated successfully.', data: todos });
//    });
//    ```

// 5. Add a route handler for the '/delete/:id' route that deletes a specific todo by its id:
//    ```javascript
//    app.delete('/delete/:id', (req, res) => {
//      const { id } = req.params;
//      const todoIndex = todos.findIndex(todo => todo.id === Number(id));
//      if (todoIndex === -1) {
//        return res.status(404).json({ error: 'Todo not found.' });
//      }
//      todos.splice(todoIndex, 1);
//      res.json({ msg: 'Todo deleted.', data: todos });
//    });
//    ```

// Step 5: Start the server
// 1. Add code to start the server and listen on a specific port (e.g., 3000):
//    ```javascript
//    const port = 3000;
//    app.listen(port, () => {
//      console.log(`Server listening on port ${port}`);
//    });
//    ```

// Step 6: Run the server
// 1. Save the changes to `server.js`.
// 2. Open a terminal or command prompt and navigate to the project directory.
// 3. Start the server by running the following command:
//    ```
//    node server.js
//    ```

// Your server is now running, and you can access the Todo list and manage it using the provided API endpoints.

// - To get all the todos, make a GET request to 'http://localhost:3000/'.
// - To create a new todo, make a POST request to 'http://localhost:3000/add' with a JSON body containing the "task" property.
// - To update a todo, make a PUT request to 'http://localhost:3000/update/:id' with the specific todo id as a route parameter and the updated todo details in the JSON body.
// - To delete a todo, make a DELETE request to 'http://localhost:3000/delete/:id' with the specific todo id as a route parameter.

// Each time you make a request to the appropriate endpoint, the server will update the todo list accordingly and send the appropriate JSON response.

// Remember to stop the server by pressing Ctrl+C in the terminal when you're finished testing or when you want to terminate the server.