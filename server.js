const express = require('express');
const app = express();
const port = 1234;

app.listen(port, () => {
  console.log(`Server now listening on port ${port}`);
})

app.use(express.static('client'));

app.get('/', (req, res) => {
  res.end('Hello World!');
})