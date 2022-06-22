// import in the sql database from our model file
const db = require('../model');

// initialize an empty object as our user controller
const userController = {};

// signup functionality -> check to see if the username already exists, else add it to the database
userController.createUser = async (req, res, next) => {
  // should receive from the clients post request:
  // first_name, last_name, email, and password
  // use object destructuring to store those properties in variables 
  const { email, username, firstName, lastName, password } = req.body;
  console.log(email, username, firstName, lastName, password);
  // NEED TO IMPLEMENT PASSWORD HASHING USING 256 ENCRYPTION FOR PASSWORD
  // ====================================================================

  // implement error handling with a try catch statement
  try {
    // create a query string to query our database
        // use INSERT to add a new user into our users table

    const queryString = 
    `
    INSERT INTO users (email, username, first_name, last_name, password)
    VALUES($1, $2, $3, $4, $5)
    RETURNING *;
    `
    // profile_pic and last_logged_in will be added to users table in profile settings
    
    // store the query params in an array to pass into the database query
    const params = [email, username, firstName, lastName, password];
    // query the database, passing in the query string and params and store the result in a variable
    const user = await db.query(queryString, params);
    // send back the current user that was added to the database
    // we do not want to send back the password
    res.locals.user = {...user.rows[0], password: null}
    console.log(user);
  }
  catch (err) {
    // check if the error is due to duplicate keys violating the UNIQUE attribute
    if (err.detail.includes('already exists.')){
      console.log(err.detail);
      // instantiate an empty object to store the names of the duplicates as properties
      const duplicates = {};
      
      // parse through the string and grab the names of the columnds
      let start = err.detail.indexOf('(') + 1;
      let pointer = start;
      while (err.detail[pointer - 1] !== ')'){
        
        if (err.detail[pointer] === ',' || err.detail[pointer] === ')'){
          // store the column name in a temp variable
          const temp = err.detail.slice(start, pointer);
          // add the column name as a property to the duplicates object 
          duplicates[temp] = true;
          start = pointer + 1;
        }
        pointer += 1;
      }
      console.log(duplicates);
    }
    // invoke the next middleware function invoking the global error handler
    next({
      log: `userController.createUser  ERROR: ${err}`,
      message: { err: 'Error occured in userController.createUser'}
    });
  };

  // invoke the next middleware function'
  next();
};

userController.loginUser = async(req, res, next) => {
  console.log('hi');
  // destructure the username and password from the body of the request object
  const { username, password } = req.body;

  // handle errors with a try c atch block
  try {
    // create a query string to find the username that is in the table
    const queryString = 
    `
    SELECT * FROM users
    WHERE username = $1
    `;
    // store query params 
    const params = [username];
    // query the databse and store the return value in a variable
    const user = await db.query(queryString, params);
    console.log(user);
    // check if the password matches and throw an error if not
    console.log(typeof password);
    console.log(typeof user.rows[0].password);
    if (password.toString() !== user.rows[0].password) {
      throw 'Incorrect Password - Please Try Again';
    }

    // store all data in an object to send back to client - do not send back the password
    const userData = {
      ...user.rows[0],
      password: null
    };

    // store the dataon the loclas object
    res.locals.userData = userData;
    
  }
  catch (err) {
    next({
      log: `userController.createUser  ERROR: ${err}`,
      message: { err: 'Error occured in userController.createUser'}
    });
  };

  // invoke the next middleware function
  next();
};

// export the userController 
module.exports = userController;