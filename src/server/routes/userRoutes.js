const { Router } = require('express');
// import the userController to add to middleware chain for requests
const userController = require('../controllers/userController');
// create a new router instance
const userRouter = Router();

userRouter.get('/something', (req, res) => {
  console.log('in something');
  res.status(200).send('nice');
});

userRouter.post('/signup', userController.createUser, (req, res) => {
  console.log('in signup router');
  // respond with a status of 200
  res.status(200).send('postin');
});

// export the user router
module.exports = userRouter;