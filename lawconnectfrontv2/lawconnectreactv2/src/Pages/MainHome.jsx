import React from 'react'
import Navbar from '../Component/Navbar'
import AdminMain from '../Admin/AdminMain'
import VendorMain from '../Vendor/VendorMain'
import UserMain from '../User/UserMain'

function MainHome() {
  return (
    <div>
        <Navbar/>
        {/* <AdminMain/> */}
        {/* <VendorMain/> */}
        <UserMain/>
    </div>
  )
}

export default MainHome