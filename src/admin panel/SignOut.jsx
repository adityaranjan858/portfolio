import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router';
import { auth } from '../firebase';
import Button from '../utils/Button';
import logo from '../assets/logo.png';
const SignOut = () => {
     const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div className="flex justify-between bg-gray-900 items-center  px-4 py-4">
        <div>
            <img src={logo} className='w-12 h-12' alt="Logo" />    
        </div>    
        <Button className="font-medium" onClick={handleLogout}>Logout</Button>
    </div>
    </>
  )
}

export default SignOut;