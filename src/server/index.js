// Initialises the server and starts it listening on the port 8000

const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
