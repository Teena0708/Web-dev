//goal is to create a https server and we are using library known as express.

const express = require('express');
const port = 3000;
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});