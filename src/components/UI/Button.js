import React from 'react';
import classes from './Button.module.css'
const Button = (props) => {
  return (

    <button className={`${props.className} btn ${classes.gen_btn}`} type={props.type} onClick={props.onClick}>
                {props.children}
              </button>
  )
}

export default Button;