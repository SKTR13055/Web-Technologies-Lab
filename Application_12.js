// app.js

// Import the 'url' and 'http' modules
const url = require('url');
const http = require('http');

// Create a server that handles incoming requests
const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);

  // Extract information from the parsed URL
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  // Send a response based on the extracted information
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!');
});

// Set the server to listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}/`);
});
