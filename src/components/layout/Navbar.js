import { init } from "emailjs-com";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import classes from "./Navbar.module.css";



const Navbar = () => {

const onSubmitHandler = (event) =>{
  event.preventDefault();
  // init.sendForm("service_7icj8x6", "template_qmjahon", event.target, "mbMEaUtYoHG2EnESI").then(
  //   res=>{
  //     console.log(res);
  //   }
  // ).catch(err => console.log(err));
  console.log("hei")
}

  return (
    <Fragment>
      <nav
        className={`${classes.navbar} navbar navbar-expand-lg ${classes.navbar_light} navbar-light bg-light py-4`}
      >
        <div className="container mainMenu">
          <Link to="/" className={`${classes["navbar-brand"]} navbar-brand`}>
            <img src={logo} alt="" className={classes.logo_img} />
          </Link>
          
          <div className={`d-flex d-block d-lg-none ${classes.nav_buttons}`}>
              <Link to="admin" target="_blank" className={`btn ${classes.qq_btn}`}>
                Login
              </Link>

              <button
                type="button"
                className={`btn ${classes.qq_btn} `}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Schedule a Call
              </button>
              <button className={`navbar-toggler ${classes.navbar_toggle_btn}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            </div>
          <div className="d-flex flex-wrap justify-content-end w-100 mt-3 ">
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className={`navbar-nav ${classes.navbar_nav} mb-2 mb-lg-0`}>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${classes.nav_link}`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${classes.nav_link}`}
                    aria-current="page"
                    href="#about"
                  >
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${classes.nav_link}`}
                    aria-current="page"
                    href="#experience"
                  >
                    Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${classes.nav_link}`}
                    aria-current="page"
                    href="#skills"
                  >
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${classes.nav_link}`}
                    aria-current="page"
                    href="#certifications"
                  >
                    Certifications
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${classes.nav_link}`}
                    aria-current="page"
                    href="#contacts"
                  >
                    Contacts
                  </a>
                </li>
              </ul>
            </div>

            <div className={`d-flex nav_buttons d-lg-block d-none ${classes.nav_buttons}`}>
            <Link to="admin" target="_blank" className={`btn ${classes.qq_btn}`}>
            Login
          </Link>

              <button
                type="button"
                className={`btn ${classes.qq_btn} `}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Schedule a Call
              </button>
            </div>
          </div>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Quote Request
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={onSubmitHandler}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        name="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email-address"
                        name="email"
                        placeholder="Email-Address"
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="product-enquiry"
                        name="message"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className={`btn ${classes.qq_btn_clse}`}
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className={`btn ${classes.qq_btn_sbm}`}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
