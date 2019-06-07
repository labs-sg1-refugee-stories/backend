const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');

const server = express();

const registerRouter = require('../routes/register/register-router.js');
const loginRouter = require('../routes/login/login-router.js');
const usersRouter = require('../routes/users/users-router.js');
const logoutRouter = require('../routes/logout/logout-router.js');
const storiesRouter = require('../routes/stories/stories-router.js');
const adminRouter = require('../routes/admin/admin-router.js');
const commentsRouter = require('../routes/comments');
// configure global middlewares
server.use(helmet());
server.use(express.json()); // built-in
server.use(cors());
server.use(logger('dev'));

server.use('/register', registerRouter);
server.use('/login', loginRouter);
server.use('/users', usersRouter);
server.use('/logout', logoutRouter);
server.use('/stories', storiesRouter);
server.use('/admin', adminRouter);
server.use('/comments', commentsRouter);
// sanity check route
server.get('/', (req, res) => {
  res.status(200).send(`<h2>Welcome to the Refugee Stories API...</h2>`);
});

module.exports = server;
