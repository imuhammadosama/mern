const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//MIDDLEWARES
server.use(bodyParser.json());

//GETTING ROUTES
const PostsRoutes = require('./routes/posts.routes');
const UsersRoutes = require('./routes/users.routes');

//SETTING ROUTES
server.use('/posts', PostsRoutes);
server.use('/users', UsersRoutes);

//ROUTES
server.get('/', (req, res) => {
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
server.listen(5000, () => {
  console.log('Server is listening to Port 5000...');
});
