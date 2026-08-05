/**
 * index.js
 *
 * Minimal Node.js HTTP server that responds with "Hello World!" to all requests.
 * Uses only the built-in `http` module -- no external dependencies required.
 */

const http = require('http');

/** Port the server listens on. Override via the PORT environment variable. */
const PORT = process.env.PORT || 3000;

/**
 * Create an HTTP server.
 *
 * Every incoming request receives:
 *  - Status code 200 (OK)
 *  - Content-Type header set to plain text
 *  - Body: "Hello World!"
 */
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

// Start listening for incoming connections.
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
