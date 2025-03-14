import React from 'react'
import pageNotFound from '../assets/page-not-found.png'
import Button from './Button';

const PageNotFound = () => {
  return (
    <>
    <div>
        <div className='relative w-full h-screen overflow-hidden'>
            <img src={pageNotFound} alt="404 page image" className='w-full h-full object-cover' />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
            <h1 className='text-9xl font-bold'>
            404!
            </h1>
            <h2 className='text-3xl font-medium uppercase'>oops! Page not found</h2>
            <p className='text-xl mt-4 capitalize'>Sorry! The page you are looking for does not exist. </p>
        <Button className="font-medium mt-10" onClick={() => window.history.back()}>Go Back</Button>
            </div>
        </div>
    </div>
    </>
  )
}

export default PageNotFound;