import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { TextField, Button } from '@mui/material';


const LoginForm = (props) => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = data => console.log(data);

  return(
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