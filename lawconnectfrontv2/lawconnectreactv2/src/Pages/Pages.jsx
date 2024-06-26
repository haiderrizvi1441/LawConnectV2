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
import SkillForm from "../Vendor/SkillForm";
import SkillsList from "../Vendor/SkillsList";
import VendorCards from "../Vendor/VendorCards";
import ToVendorProfile from "../Vendor/ToVendorProfile";
import CreateAppointment from "../User/CreateAppointment";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import AdminToVendorProfile from "../Admin/AdminToVendorProfile";

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
        <Route path="/vendorprofile" element={<VendorProfile  />} />
        <Route path="/userprofile" element={<UserProfile/>} />
        <Route path= "/skillform" element={<SkillForm/>} />
        <Route path= "/skilllist" element ={<SkillsList/>} />
        <Route path= "/vendorcard" element={<VendorCards/>}/>
        <Route path= "/tovendorprofile/:id" element={<ToVendorProfile/>}/>
        <Route path= "/admintovendorprofile/:id" element={<AdminToVendorProfile/>}/>
        <Route path= "/createappointment" element= {<CreateAppointment/>}/>
        <Route path= "/aboutus" element={<AboutUs/>}/>
        <Route path = "/contactus" element={<ContactUs/>}/>
    </Routes>
  )
}

export default Pages