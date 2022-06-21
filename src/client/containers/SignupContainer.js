import React from 'react';
import SignupForm from '../components/SignupForm';

const SignupContainer = (props) => {
  return(
    <div>
      <SignupForm loggedInState={props.loggedInState} setLoggedInState={props.setLoggedInState}/>
    </div>
  )
}

export default SignupContainer