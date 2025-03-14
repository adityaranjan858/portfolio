import React from 'react'

const Button = ({onClick, children, bgColor, className}) => {
  return (
    <button className={bgColor ? `${bgColor} ${className} text-black px-4 sm:px-6 md:px-8 py-2 hover:bg-primary-hover rounded-3xl cursor-pointer` : `${className} bg-primary hover:bg-primary-hover text-black px-4 sm:px-6 md:px-8 py-2 rounded-3xl cursor-pointer`} onClick={onClick} >
        {children}
    </button>
  )
}

export default Button;