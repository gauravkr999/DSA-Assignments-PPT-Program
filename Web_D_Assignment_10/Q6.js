const http = require('http');

// Sample data for men and women products
const menProducts = [
  { id: 1, name: 'Men Product 1', price: 10 },
  { id: 2, name: 'Men Product 2', price: 20 },
  // Add more products as needed
];

const womenProducts = [
  { id: 1, name: 'Women Product 1', price: 15 },
  { id: 2, name: 'Women Product 2', price: 25 },
  // Add more products as needed
];

const server = http.createServer((req, res) => {
  // Root endpoint
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Men & Women Dummy Data');
  }
  // Men products endpoint
  else if (req.url === '/men') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(menProducts));
  }
  // Women products endpoint
  else if (req.url === '/women') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(womenProducts));
  }
  // Other endpoints
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});




// We created a server using the http module. We define different endpoints for the root path ('/'), men products ('/men'), women products ('/women'), and handle other endpoints by returning a "Page not found" response.

// When you run this script and navigate to http://localhost:3000/, you will see the message "Welcome to Men & Women Dummy Data". Accessing http://localhost:3000/men will return 10 products' data for men, and accessing http://localhost:3000/women will return 10 products' data for women. Any other endpoint will return a "Page not found" response.