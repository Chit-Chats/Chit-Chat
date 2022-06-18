// import in the sql database from our model file
const db = require('../model');

// initialize an empty object as our user controller
const userController = {};

// signup functionality -> check to see if the username already exists, else add it to the database
userController.createUser = async (req, res, next) => {
  // should receive from the clients post request:
  // first_name, last_name, email, and password
  // use object destructuring to store those properties in variables 
  const {firstName, lastName, email, password} = req.body;
  // NEED TO IMPLEMENT PASSWORD HASHING USING 256 ENCRYPTION FOR PASSWORD
  // ====================================================================

  // implement error handling with a try catch statement
  try {
    // create a query string to query our database
    // use INSERT to add a new user into our users table
    // profile_pic and last_logged_in will be added to users table in profile settings
    

  }
  catch (err) {
    // invoke the next middleware function invoking the global error handler
    next({
      log: `userController.createUser  ERROR: ${err}`,
      message: { err: 'Error occured in userController.createUser'}
    });
  };

  // invoke the next middleware function'
  next();
};

// export the userController 
module.exports = userController;