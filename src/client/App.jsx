import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginContainer from './containers/LoginContainer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<LoginContainer/>} />
          {/* <Route path = '/home' element={<HomeContainer />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;