import React from 'react';
import classes from "./MainHeader.module.css";
import logo from "../../../img/logo.png"
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <nav class={`navbar navbar-light bg-light ${classes.admin_nav}`}>
  <div class="container-fluid">
    <Link class="navbar-brand" to="/admin">
      <img src={logo} alt="" class={` ${classes.logo}`} />
    </Link>
  </div>
</nav>
  )
}

export default MainHeader;