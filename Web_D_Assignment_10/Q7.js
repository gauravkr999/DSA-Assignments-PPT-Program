// Build a Server that Generate Random Number Using Express
// ‘/random’ → send random number in response {random:10}





// To build a server using Express that generates a random number and sends it as a response to the '/random' route, you can follow these steps:

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

// Step 3: Define the '/random' route
// 1. Add a route handler for the '/random' route that generates a random number and sends it as a response:
//    ```javascript
//    app.get('/random', (req, res) => {
//      const randomNumber = Math.floor(Math.random() * 10);
//      res.json({ random: randomNumber });
//    });
//    ```

// Step 4: Start the server
// 1. Add code to start the server and listen on a specific port (e.g., 3000):
//    ```javascript
//    const port = 3000;
//    app.listen(port, () => {
//      console.log(`Server listening on port ${port}`);
//    });
//    ```

// Step 5: Run the server
// 1. Save the changes to `server.js`.
// 2. Open a terminal or command prompt and navigate to the project directory.
// 3. Start the server by running the following command:
//    ```
//    node server.js
//    ```

// Your server is now running, and you can access the random number by making a GET request to 'http://localhost:3000/random'. Each time you make a request to that URL, the server will generate a new random number between 0 and 9 and send it as a JSON response.

// Remember to stop the server by pressing Ctrl+C in the terminal when you're finished testing or when you want to terminate the server.