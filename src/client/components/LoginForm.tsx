import React from 'react';
import { useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form'
import { TextField, Button } from '@mui/material';
import { Navigate, useNavigate } from "react-router-dom";

// interface FieldValues {
//   username: string, 
//   password: string
// }

const LoginForm = (): JSX.Element => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const [loggedInState, setLoggedInState] = useState(false)

  //onSubmit should make post request to db
  const onSubmit = (data: FieldValues) => {
    console.log(data)
    // const {username, password} = data
    // fetch('http://localhost:3000/login', {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: {username, password},
    //   method: 'POST',
    //   body: JSON.stringify(data)
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //   setLoggedInState(true)
    // })
    // .catch((err) => {
    //   console.log("login error", err);
    //   alert('Wrong username/password');
    // });
  };

  const navigate = useNavigate();

  function signupForm () {
    navigate('/signup')
  }

  return loggedInState ? <Navigate to="/home" /> : (
    <div id='login-form'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField 
          {...register("username", {required: 'Username is required'})} 
          id='username' 
          placeholder='username'
          error={errors?.username ? true : false}
          helperText={errors?.username ? errors.username.message : null}
          /> 
        <br></br>
        <TextField 
          {...register("password", {required: 'Password is required'})} 
          type='password' 
          id='password' 
          placeholder='password'
          error={errors?.password ? true : false}
          helperText={errors?.password ? errors.password.message : null}
        />
        <br></br>
        <Button 
          type='submit' 
          variant='contained' 
          className="submitbutton"
        >
        Submit
        </Button>
        <br></br>
        <Button 
          variant='text'
          onClick={signupForm}
        >
          Don't have an account?
          <br></br>
          Signup
        </Button>
      </form>
    </div>
  )
}

export default LoginForm