import Navbar from '../Component/Navbar';
import React from "react";
import {Route, Routes} from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import MainHome from './MainHome';
import AddSkill from './AddSkill';
import AdminMain from '../Admin/AdminMain';
import VendorMain from '../Vendor/VendorMain';
import UserMain from '../User/UserMain';


function Pages() {

  return (
    <Routes>
        <Route path="/" element={<HomePage/>} />
        
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/home" element={<MainHome/>}/>
        <Route path="/addskill" element={<AddSkill/>} />
        <Route path="/adminhome" element={<AdminMain/>} />
        <Route path="/vendorhome" element={<VendorMain/>} />
        <Route path="/userhome" element={<UserMain/>} />
    </Routes>
  )
}

export default Pages