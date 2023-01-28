import React from "react";
import { NavLink, Link, Routes, Route } from "react-router-dom";
import About from "../../about/About";
import Admin from "./Admin";
import classes from "./Sidebar.module.css";
import Experience from './../../experience/Experience';
import Skills from './../../skills/Skills';
import Certifications from './../../certifications/Certifications';
import Footer from './../../footer/Footer';

const Sidebar = () => {
  let activeStyle = {
    color: 'white',
    "background-color": "#eba920",
    "border-radius": "100px",
    padding: "0 30px 0px" 
  };
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class={`col-auto col-md-3 col-xl-2 px-sm-2 px-0 ${classes.dashboard}`}>
          <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <NavLink to="/admin"   class={`d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none ${(navData) =>navData.isActive && ""}`}>
              <span class="fs-5 d-none d-sm-inline">Menu</span>
            </NavLink>
            <ul
              class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li class="nav-item">
                <NavLink to="/"  target="_blank" class="nav-link align-middle px-0 ">
                  <span class="ms-1 d-none d-sm-inline ">Home</span>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="about"
                  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                  class="nav-link align-middle px-0" >
                  <span class="ms-1 d-none d-sm-inline ">About Me</span>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="experience"
                  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                  class="nav-link align-middle px-0" >
                  <span class="ms-1 d-none d-sm-inline ">Experience</span>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="skills"
                  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                  class="nav-link align-middle px-0" >
                  <span class="ms-1 d-none d-sm-inline ">Skills</span>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="certifications"
                  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                  class="nav-link align-middle px-0" >
                  <span class="ms-1 d-none d-sm-inline ">Certifications</span>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="contacts"
                  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                  class="nav-link align-middle px-0" >
                  <span class="ms-1 d-none d-sm-inline ">Contacts</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-9 col-xl-10 py-3">
          <div className={classes.welcome}>
            <span>Welcome To Admin Panel </span>
          </div>
          <Routes>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/certifications" element={<Certifications/>}/>
            <Route path="/contacts" element={<Footer/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
