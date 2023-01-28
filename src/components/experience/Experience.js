import React, { Fragment } from "react";
import Card from "../UI/Card";
import Row from "../UI/Row";
import { Link } from "react-router-dom";
import classes from "./Experience.module.css";
import abs7 from "../../img/Abstract-07.svg";
import abs8 from "../../img/Abstract-08.svg";
import tick from "../../img/Check.svg";
import conn_arrow from "../../img/Robe.svg";

const Experience = () => {
  return (
    <Fragment >
      <div id="experience" className={`mb-4 mt-5 ${classes.experience_container}`}>
        <div className={classes.abstract_img_7}>
          <img src={abs7} alt="" />
        </div>
        <h1 className="text-center mb-5 heading"> My Experience</h1>
        <Row>
          <div
            className={`col-md-4 col-12 ${classes.card_main} `}
          >
            <div className={`d-none d-md-block ${classes.robe}`}>
              <img src={conn_arrow} alt="" />
            </div>
            <Card>
              <h5 className="card-title">
                <span className="text-muted">Position : </span>Software Engineer
              </h5>
              <p className="card-text">
                <span className="text-muted">Company : </span>HCL Technologies{" "}
                <small> Hyderabad, Telangana</small>{" "}
              </p>
              <p>
                <span className="text-muted">Years : </span>11/2021 - Present
              </p>
              <Link to="/projects" className="link_des">
                Use Cases <small className="text-success"> 5+ completed</small>
              </Link>
            </Card>
          </div>
          <div className="col-md-8 col-sm-12 col-12">
            <div className={classes.headline_steps}>
              <div className={classes.headline_content}>
              <p className="text-muted hero_para"><i>Achievements/Tasks</i> </p>
                <ul className={classes.card_exp}>
                  <li className="d-flex">
                    <img src={tick} alt="" className={classes.tick} />
                    Worked on multiple use cases based on React Js.
                  </li>
                  <li className="d-flex">
                    <img src={tick} alt="" className={classes.tick} />
                    
                      Experience in Router, Rest API, Redux, based on different
                      use cases.
                    
                  </li>
                  <li className="d-flex">
                    <img src={tick} alt="" className={classes.tick} />
                    Ensuring website function and stability across devices i.e.
                    desktop, mobile, tablet.
                  </li>
                </ul>
              </div>
              <div className={classes.headline_shape}></div>
            </div>
          </div>
        </Row>{" "}
        <br />
        <Row>
          <div
            className={`col-md-4 col-12 ${classes.card_main} `}
          >
            <div className={`d-none d-md-block ${classes.robe}`}>
              <img src={conn_arrow} alt="" />
            </div>
            <Card>
              <h5 className="card-title">
                <span className="text-muted">Position : </span>Web Designer
              </h5>
              <p className="card-text">
                <span className="text-muted">Company : </span>Crest Infotech{" "}
                <small> Ahmedabad, Gujarat</small>{" "}
              </p>
              <p>
                <span className="text-muted">Years : </span>11/2020 - 11/2021
              </p>
              <Link to="/projects" className="link_des">
                Projects 
                <small className="text-success"> 5+ completed</small>
              </Link>
            </Card>
          </div>
          <div className="col-md-8 col-sm-12 col-12">
            <div className={classes.headline_steps}>
              <div className={classes.headline_content}>
              <p className="text-muted hero_para"><i>Achievements/Tasks</i> </p>
                <ul className={classes.card_exp}>
                  <li className="d-flex">
                    <img src={tick} alt="" className={classes.tick} />
                    Worked on multiple projects based on Shopify, WordPress,
                    React, Joomla & Laravel.
                  </li>
                  <li className="d-flex">
                    <img src={tick} alt="" className={classes.tick} />
                    Experience in conversion of PSD to HTML with responsiveness.
                  </li>
                  <li className="d-flex">
                    <img src={tick} alt="" className={classes.tick} />
                    Selected for giving training of web designing to new
                    trainee.
                  </li>
                  <li className="d-flex">
                    <img src={tick} alt="" className={classes.tick} />
                    Experience in solving bugs, based on different technology
                    Projects & existing sites.
                  </li>
                  <li className="d-flex">
                    <img src={tick} alt="" className={classes.tick} />
                    Ensuring website function and stability across devices i.e.
                    desktop, mobile, tablet.
                  </li>
                </ul>
              </div>
              <div className={classes.headline_shape}></div>
            </div>
          </div>
        </Row>
        <div className={classes.abstract_img_8}>
          <img src={abs8} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default Experience;
