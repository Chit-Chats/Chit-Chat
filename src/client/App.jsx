import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignupContainer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<LoginContainer/>} />
          <Route path ='/signup' element={<SignupContainer/>} />

          {/* <Route path = '/home' element={<HomeContainer />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;