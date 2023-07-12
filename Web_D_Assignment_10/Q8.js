// Q8.  Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Express

// - ‘/’ → send counter data as {counter:counter}
// - `/increment` → increment counter by 1 and send in response latest data as {counter:counter}
// - `/decrement` → decrement counter by 1 and send in response latest data as {counter:counter}

// **Note:** Using Express is Mandatory for this Question




// To create a backend for a counter web app with API endpoints for managing the counter using Express, you can follow these steps:

// Step 1: Set up the project
// 1. Create a new directory for your project.
// 2. Open a terminal or command prompt and navigate to the project directory.
// 3. Initialize a new Node.js project by running the following command:
//    ```
//    npm init -y
//    ```
// 4. Install Express by running the following command:
//    ```
//    npm install express
//    ```

// Step 2: Create the server file
// 1. Create a new file called `server.js` in your project directory.
// 2. Open `server.js` with a text editor.
// 3. Import the required modules and create an Express app:
//    ```javascript
//    const express = require('express');
//    const app = express();
//    ```

// Step 3: Set up the counter variable
// 1. Create a variable to store the counter value and initialize it to 0:
//    ```javascript
//    let counter = 0;
//    ```

// Step 4: Define the API endpoints
// 1. Add a route handler for the '/' route that sends the counter data as a JSON response:
//    ```javascript
//    app.get('/', (req, res) => {
//      res.json({ counter });
//    });
//    ```

// 2. Add a route handler for the '/increment' route that increments the counter by 1 and sends the latest data as a JSON response:
//    ```javascript
//    app.get('/increment', (req, res) => {
//      counter++;
//      res.json({ counter });
//    });
//    ```

// 3. Add a route handler for the '/decrement' route that decrements the counter by 1 and sends the latest data as a JSON response:
//    ```javascript
//    app.get('/decrement', (req, res) => {
//      counter--;
//      res.json({ counter });
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

// Your server is now running, and you can access the counter data and manage it using the provided API endpoints.

// - To get the current counter value, make a GET request to 'http://localhost:3000/'.
// - To increment the counter, make a GET request to 'http://localhost:3000/increment'.
// - To decrement the counter, make a GET request to 'http://localhost:3000/decrement'.

// Each time you make a request to the appropriate endpoint, the server will update the counter accordingly and send the latest counter value as a JSON response.

// Remember to stop the server by pressing Ctrl+C in the terminal when you're finished testing or when you want to terminate the server.