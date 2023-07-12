// Q.1 Explain Middlewares in NodeJS ?


// In Node.js, middleware refers to a software component or a function that sits between the web server and the application's request/response handling logic. It plays a crucial role in processing and manipulating incoming HTTP requests and outgoing responses. Middlewares provide a way to extend the functionality of the server by performing various tasks such as request parsing, authentication, logging, error handling, and more.

// The middleware concept is based on the concept of "function chaining," where the request flows through a series of functions in a specific order. Each middleware function has access to the request and response objects and can perform operations on them or pass control to the next middleware in the chain.

// Here's a basic example of how middlewares work in Node.js:

// ```javascript
const express = require('express');
const app = express();

// Middleware function
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware
};

// Middleware registration
app.use(logger);

// Route handler
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});



// In the above example, the logger function is a middleware that logs the timestamp, HTTP method, and URL of each incoming request. It then calls the next() function to pass control to the next middleware or the route handler if there are no more middlewares. The app.use(logger) line registers the middleware with the Express application.

// Middleware functions can be registered globally using app.use() or scoped to specific routes using app.use() or router.use(). They can be added in a specific order to control the sequence of execution. Additionally, middleware functions can modify the request and response objects, terminate the request-response cycle, or pass control to the next middleware or route handler.

// Overall, middlewares in Node.js provide a modular and flexible way to add additional functionality to your application's request/response processing pipeline, enabling tasks such as authentication, authorization, error handling, and more.