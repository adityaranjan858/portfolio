import React from "react";
import classes from "./About.module.css";
import hero_illustration from "../../img/Hero_Illustration.svg";
import abs2 from "../../img/Abstract-02.svg";
import abs3 from "../../img/Abstract-03.svg";
import abs4 from "../../img/Abstract-04.svg";
import Button from "../UI/Button";
import me from "../../img/mine.png";

const About = () => {
  
  return (
    <div className={classes.hero_container} id="about">
      <div className={`container ${classes.hero_sec} py-5`}>
        <div className="row">
          <div className="col-md-6">
            <h1 className={`${classes.hero_title} display-5`}>
              Hello,
              <br /> I am <span>Aditya Ranjan</span>
            </h1>
            <div className={classes.intro_title}>
              <div className={classes.intro_wrapper}>
                <div className={classes.intro_item}>Front End Developer</div>
                <div className={classes.intro_item}>Web Designer</div>
                <div className={classes.intro_item}>Software Engineer</div>
              </div>
            </div>
            <div className={classes.headline_steps}>
              <div className={classes.headline_content}>
                <p className="text-muted mb-0">
                  Proficient Front End Developer with <strong>1.5 year</strong>  of experience in{" "}
                  <strong>
                    {" "}
                    HTML5, CSS3, Bootstrap, JS, React Js, Redux, Router, jQuery, SASS, WordPress, PSD to
                    Html, Responsive UI Design, Photoshop.
                  </strong>{" "}
                  Providing high-impact web solutions for diverse industry
                  organizations.
                </p>
              </div>
              <div className={classes.headline_shape}></div>
            </div>
            <Button className={`mt-4 ${classes.downld_btn}`}>Download CV</Button>
          </div>
          <div className={`col-md-6 ${classes.hero_img} d-none d-md-block`}>
            <img src={hero_illustration} alt="" className={classes.hero_img_illustration}/>
            <div>
          <img
            src={me}
            className={`${classes.intro_img}`}
            alt=""
          />
          </div>
          </div>
          
        </div>
      </div>
      <div className={classes.abstract_img_2}>
        <img src={abs2} alt="" />
      </div>
      <div className={classes.abstract_img_3}>
        <img src={abs3} alt="" />
      </div>
      <div className={classes.abstract_img_4}>
        <img src={abs4} alt="" />
      </div>
    </div>
  );
};

export default About;
