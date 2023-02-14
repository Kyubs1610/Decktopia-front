import './App.css';
import React from 'react';
import ProfilePage from './Component/userprofile/profile';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Component/Auth/login';

function App() {
  return( 
  <div className="App">
  <Router>
    <Routes>
      {/* <Route path="/" element={<HomePage/>}/> */}
      <Route path="/login" element={<LoginPage/>}/>
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/profile" element={<ProfilePage/>}/>
      {/* <Route path="/home/user/checkout" element={<Checkout/>}/>
      <Route path="/home/LoginPage/ForgotPassword" element={<ForgotPassword/>}/> */}
    </Routes>
  </Router>
</div>
);
}

export default App;
