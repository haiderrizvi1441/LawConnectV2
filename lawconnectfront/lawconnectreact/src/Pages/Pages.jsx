import Navbar from '../Component/Navbar';
import React from "react";
import {Route, Routes} from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';


function Pages() {

  return (
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="home" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
    </Routes>
  )
}

export default Pages