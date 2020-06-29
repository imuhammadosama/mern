const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//ROUTES
app.get('/', (req, res) => {
  res.send('This is the api home directory!');
});

//FIXING MONGOOSE ERRORS
mongoose.set('useNewUrlParser', 'true');
mongoose.set('useUnifiedTopology', 'true');

//CONNECTING TO DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log('Connected to DB!');
});

//SERVER IS LISTENING
app.listen(5000, () => {
  console.log('Server is listening to Port 5000...');
});
