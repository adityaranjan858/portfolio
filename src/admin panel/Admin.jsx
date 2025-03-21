import React, { useEffect } from 'react'
import Sidebar from './sidebar/Sidebar';
import { Outlet } from 'react-router';
import SignOut from './SignOut';

const Admin = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <SignOut/> 
      <div className="flex flex-col sm:flex-row min-h-screen">
        <div className="w-full bg-gray-900 text-white  sm:w-2/5   ms-4 pe-4 md:w-1/5">
          <Sidebar />
        </div>

        {/* Content Area where Nested Routes are Rendered */}
        <main className="flex-1 content text-center sm:w-3/5 md:w-4/5 w-full p-4 bg-gray-700 text-white ">
          <Outlet /> {/* Nested Routes will render here */}
        </main>
      </div>
    </>
  )
}

export default Admin;