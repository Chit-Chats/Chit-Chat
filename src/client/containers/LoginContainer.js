import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginContainer = (props) => {
  return(
    <div>
      <LoginForm loggedInState={props.loggedInState} setLoggedInState={props.setLoggedInState}/>
    </div>
  )
}

export default LoginContainer