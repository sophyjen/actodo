import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "./index.css"

import Login from "./Pages/Login";
import Landing from "./Pages/Landing";
import Signup from "./Pages/Signup";

function App() {

  const [userdet, setuserdet] =useState(
    [
      {
          username:"Sophia",
          pwd:"123"
      }
    ])

  return (
    <div>
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<Login userdet={userdet} setuserdet={setuserdet} />}></Route>
        <Route path="/Signup" element={<Signup userdet={userdet} setuserdet={setuserdet} />}></Route>
        <Route path="/Landing" element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
     
  );
}

export default App;
