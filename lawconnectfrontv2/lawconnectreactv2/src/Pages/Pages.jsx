import React from "react";
import { Route, Routes } from 'react-router-dom';
import AdminMain from '../Admin/AdminMain';
import UserMain from '../User/UserMain';
import VendorMain from '../Vendor/VendorMain';
import AddSkill from './AddSkill';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import MainHome from './MainHome';
import OktaLogin from './OktaLogin';
import RegisterPage from './RegisterPage';
import VendorProfile from "../Vendor/VendorProfile";
import UserProfile from "../User/UserProfile";


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
        <Route path="/oktalogin" element={<OktaLogin/>}/>
        <Route path="/vendorprofile" element={<VendorProfile/>} />
        <Route path="/userprofile" element={<UserProfile/>} />
    </Routes>
  )
}

export default Pages