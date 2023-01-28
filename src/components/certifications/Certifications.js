import React from 'react';
import classes from './Certifications.module.css'
import abs7 from "../../img/Abstract-07.svg";
import abs8 from "../../img/Abstract-08.svg";
import css_c from "../../img/css_c.png";
import html_l_c from "../../img/html.PNG";
import css_l_c from "../../img/Css.PNG";
import Row from './../UI/Row';
import Card from './../UI/Card';


const Certifications = () => {
  return (
    <div id='certifications' className={`mb-4 mt-5 ${classes.experience_container}`}>
        <div className={classes.abstract_img_7}>
          <img src={abs7} alt="" />
        </div>
        <h1 className="text-center mb-5 heading"> My Achievements & Certifications</h1>
        <Row>
        <div className={`  col-12  ${classes.card_main} `}> 
          <Card>
            <h5 className="card-title heading">LinkedIn Skill Assessment badge for "HTML" & "CSS"</h5>
            <img src={html_l_c} alt="" />
            <img src={css_l_c} alt="" />
          </Card>
        </div>
        
        </Row>{" "}
        <br />
        <Row>
          <div
            className={` col-md-6 col-12 ${classes.card_main}`}
          >
            <Card>
              <h5 className="card-title heading">14th National Science Olympiad</h5>
              <p className="card-text">
                <span className="text-muted">Position : </span>2nd Rank
              </p>
              <p>
                <span className="text-muted">Year : </span>11/2011
              </p>
                <hr/>
              <h5 className="card-title heading">2nd International English Olympiad</h5>
              <p className="card-text">
                <span className="text-muted">Position : </span>2nd Rank
              </p>
              <p>
                <span className="text-muted">Year : </span>01/2012
              </p>
            </Card>
          </div>
          <div className={` col-md-6 col-12  ${classes.card_main} `}> 
          <Card>
            <h5 className="card-title heading">HackerRank Skills Certificate for "CSS"</h5>
            <img src={css_c} alt="" />
          </Card>
        </div>
        </Row>
        <div className={classes.abstract_img_8}>
          <img src={abs8} alt="" />
        </div>
      </div>
  )
}

export default Certifications;