import React from 'react'
import logoIcon from '../assets/logo.png'
const Footer = () => {
  return (
    <>
        <section className="bg-gray-900 text-white  flex items-center justify-center px-6 pt-12">
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between w-full">
                <div>
                    <img className='w-10 h-10' src={logoIcon} alt="logo" />
                </div>
                <div className='space-x-2'><span className="text-gray-400 ">@{new Date().getFullYear()}</span> <span>Aditya Ranjan</span></div>
            </div>
        </section>
    </>
  )
}

export default Footer;