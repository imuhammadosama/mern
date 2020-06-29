const express = require('express');
const app = express();

//ROUTES
app.get('/', (req, res) => {
  res.send('This is the api home directory!');
});

//SERVER IS LISTENING
app.listen(5000, () => {
  console.log('Server is listening to Port 5000...');
});
