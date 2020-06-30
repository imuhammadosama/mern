const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//MIDDLEWARES
app.use(bodyParser.json());

//GETTING ROUTES
const PostsRoutes = require('./routes/posts.routes');
const UsersRoutes = require('./routes/users.routes');

//SETTING ROUTES
app.use('/posts', PostsRoutes);
app.use('/users', UsersRoutes);

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
