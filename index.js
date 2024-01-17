const express = require('express');
const path = require('path');
const router = express.Router();

const app = express();

const port = 5001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'public')));

const loggerMiddleware = (req, res, next) => {
  console.log(`${new Date()} --- Request [${req.method}] [${req.url}]`);
  next();
};

app.use(loggerMiddleware);

app.use('/api/users', router);

const fakeAuth = (req, res, next) => {
  const authStatus = true;
  if (authStatus) {
    console.log('User authStatus : ', authStatus);
    next();
  } else {
    res.status(401);
    throw new Error('User is nor authorized');
  }
};

const getUsers = (req, res) => {
  res.json({ message: 'Get all users' });
};

const createUser = () => {
  console.log('This is the requset body received from client', req.body);

  res.json({ message: 'Create a user' });
};

router.use(fakeAuth);
router.route('/').get(getUsers).post(createUser);

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  switch (statusCode) {
    case 401:
      res.json({
        title: 'Authorized',
        message: err.message,
      });
      break;
    case 404:
      res.json({
        title: 'Not found',
        message: err.message,
      });
      break;
    case 500:
      res.json({
        title: 'Server error',
        message: err.message,
      });
      break;

    default:
      break;
  }
};

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
