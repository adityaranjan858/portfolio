import React from "react";
import classes from "./Footer.module.css";
import illustration_contact from "../../img/Illustration_Contact.svg";

const Footer = () => {
  return (
    <footer id="contacts" className={`pt-5 ${classes["section-footer"]}`}>
      <div className="container ">
        <div className="row">
          <div className={`col-md-4 col-12 ${classes.footer_text}`}>
            <h1 className="hero_title heading">Get in Touch</h1>
            <ul className={classes.address}>
            <li><span class="text-muted">Email : </span>adityaranjan858@gmail.com</li>
            <li><span class="text-muted">Mobile No. : </span>9144154686</li>
            <li><span class="text-muted">Location : </span>Hyderabad</li>
        </ul>
            <button
              type="button"
              className={`btn ${classes.qq_btn} `}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              Schedule a Call
            </button>
            <p className="text-dark">
              A-Design is a trading name of Aditya Design PVT. LTD., based in
              Hyderabad, Telangana.
            </p>

            <div className={`${classes['basr-social-share']} ${classes.social}`}>
              <ul className="">
                <li>
                  <a className={classes.facebook} target="_blank" href="https://www.facebook.com/adityaranjan858/">
                  <i className="fab fa-facebook-f"></i>
                    <span>Facebook</span>
                  </a>
                </li>

                <li>
                  <a className={classes.twitter} target="_blank" href="https://api.whatsapp.com/send?phone=9144154686&text=Please%20Contact%20Me">
                  <i class="fab fa-whatsapp"></i>
                    <span>WhatsApp</span>
                  </a>
                </li>

                <li>
                  <a className={classes.linkedin} target="_blank" href="https://www.linkedin.com/in/aditya-ranjan-7b1785203">
                    <i className="fab fa-linkedin-in"></i>
                    <span>Linkedin</span>
                  </a>
                </li>

              </ul>
            </div>
          </div>
          <div className={`col-md-8 col-12 ${classes.footer_img}`}>
            <img src={illustration_contact} alt="" />
          </div>
          <p className='text-center text-dark mb-0'>
            <small>&copy; A-Design. All Rights Reserved.</small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
