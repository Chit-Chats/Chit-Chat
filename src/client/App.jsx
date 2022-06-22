import React, { Component } from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignupContainer';
import HomePageContainer from './containers/HomePageContainer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<LoginContainer />} />
          <Route path ='/signup' element={<SignupContainer />} />
          <Route path ='/home' element={<HomePageContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;