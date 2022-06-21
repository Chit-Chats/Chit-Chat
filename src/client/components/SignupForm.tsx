import React from 'react';
import { useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form'
import { TextField, Button } from '@mui/material';
import { Navigate, useNavigate } from "react-router-dom";


const SignupForm = (): JSX.Element => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    console.log(data)
    const {email, username, firstName, lastName, password} = data
    fetch('http://localhost:3000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, username, firstName, lastName, password}),
    })
    .then((response) => response.json())
    .then((data) => {
      navigate('/home')
    })
    // .catch((err) => {
    //   console.log("signup error", err);
    //   alert('missing fields');
    // });
  };

  return (
    <div id='signup-form'>
      <h1>Create An Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField 
          {...register("email", {required: 'Email is required'})} 
          id='email' 
          placeholder='email'
          error={errors?.username ? true : false}
          helperText={errors?.email ? errors.email.message : null}
          /> 
        <br></br>
        <TextField 
          {...register("username", {required: 'Username is required'})} 
          id='username' 
          placeholder='username'
          error={errors?.username ? true : false}
          helperText={errors?.username ? errors.username.message : null}
          /> 
        <br></br>
        <TextField 
          {...register("firstName", {required: 'First name is required'})} 
          id='firstName' 
          placeholder='firstName'
          error={errors?.firstName ? true : false}
          helperText={errors?.firstName ? errors.firstName.message : null}
        /> 
        <br></br>
        <TextField 
          {...register("lastName", {required: 'Last name is required'})} 
          id='lastName' 
          placeholder='lastName'
          error={errors?.lastName ? true : false}
          helperText={errors?.lastName ? errors.lastName.message : null}
        /> 
        <br></br>
        <TextField 
          {...register("password", {
            required: 'Password is required', 
            minLength: 8, 
            // pattern: {
            //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]$/i,
            //   message: 'Invalid password'
            //   }
            })}            
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

export default SignupForm