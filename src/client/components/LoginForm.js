import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { TextField, Button } from '@mui/material';
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const [loggedInState, setLoggedInState] = useState(false)

  //onSubmit should make post request to db
  const onSubmit = data => {
    console.log(data)
    const {username, password} = data
    fetch('http://localhost:3000/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: {username, password},
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
      setLoggedInState(true)
    })
    .catch((err) => {
      console.log("login error", err);
      alert('Wrong username/password');
    });
  };

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
      </form>
    </div>
  )
}

export default LoginForm