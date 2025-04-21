const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

const PORT = 3000;

// Enable CORS
server.use(cors());


// Use default middlewares and router
server.use(middlewares);
server.use(router);

// Start server
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

// Handle process termination
process.on('SIGTERM', () => {
  process.exit();
});
