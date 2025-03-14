import React from 'react'

const Modal = ({children}) => {
  return (
    <>
 <div
        className="fixed inset-0  bg-opacity-50 backdrop-blur-md z-40"

      ></div>

    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full  md:w-11/12 md:h-11/12 z-50   flex justify-center items-center'>
        {children}
    </div>
    </>
  )
}

export default Modal;