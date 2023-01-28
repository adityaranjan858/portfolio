import React from 'react';
import classes from './Skills.module.css'

const Skills = () => {
  return (
    <section className={classes.services_container} id="skills">
    <div className={`container ${classes.skills_contents}`}>
      <h1 className='heading'>Skills</h1>
      <p className="text-muted hero_para">What Skills I Have</p>

      <div className={classes.starter_service}>
        <div className={classes['service-type-list']}>

        <div className={classes['service-type-item']}>
          <div className={classes["service-type-name"]}>
            <p className="text-03">Html<br/></p>
          </div>
          <div className={classes["horizontal-divider"]}></div>
        </div>
        <div className={classes['service-type-item']}>
          <div className={classes["service-type-name"]}>
            <p className="text-03">Css<br/></p>
          </div>
          <div className={classes["horizontal-divider"]}></div>
        </div>
        <div className={classes['service-type-item']}>
          <div className={classes["service-type-name"]}>
            <p className="text-03">Bootstrap<br/></p>
          </div>
          <div className={classes["horizontal-divider"]}></div>
        </div>
        <div className={classes['service-type-item']}>
          <div className={classes["service-type-name"]}>
            <p className="text-03">Sass<br/></p>
          </div>
          <div className={classes["horizontal-divider"]}></div>
        </div>
        <div className={classes['service-type-item']}>
          <div className={classes["service-type-name"]}>
            <p className="text-03">JavaScript<br/></p>
          </div>
          <div className={classes["horizontal-divider"]}></div>
        </div>
        <div className={classes['service-type-item']}>
          <div className={classes["service-type-name"]}>
            <p className="text-03">JQuery<br/></p>
          </div>
          <div className={classes["horizontal-divider"]}></div>
        </div>
        <div className={classes['service-type-item']}>
          <div className={classes["service-type-name"]}>
            <p className="text-03">Wordpress<br/></p>
          </div>
          <div className={classes["horizontal-divider"]}></div>
        </div>
        <div className={classes['service-type-item']}>
          <div className={classes["service-type-name"]}>
            <p className="text-03">Visual Studio Code<br/></p>
          </div>
          <div className={classes["horizontal-divider"]}></div>
        </div>
        <div className={classes['service-type-item']}>
          <div className={classes["service-type-name"]}>
            <p className="text-03">Ui/Ux<br/></p>
          </div>
          <div className={classes["horizontal-divider"]}></div>
        </div>
        <div className={classes['service-type-item']}>
          <div className={classes["service-type-name"]}>
            <p className="text-03">Psd To Html<br/></p>
          </div>
          <div className={classes["horizontal-divider"]}></div>
        </div>
        <div className={classes['service-type-item']}>
          <div className={classes["service-type-name"]}>
            <p className="text-03">Photoshop<br/></p>
          </div>
          <div className={classes["horizontal-divider"]}></div>
        </div>
        <div className={classes['service-type-item']}>
          <div className={classes["service-type-name"]}>
            <p className="text-03">Psd to Wordpress<br/></p>
          </div>
          <div className={classes["horizontal-divider"]}></div>
        </div>
        <div className={classes['service-type-item']}>
          <div className={classes["service-type-name"]}>
            <p className="text-03">React<br/></p>
          </div>
          <div className={classes["horizontal-divider"]}></div>
        </div>
        <div className={classes['service-type-item']}>
          <div className={classes["service-type-name"]}>
            <p className="text-03">Redux<br/></p>
          </div>
          <div className={classes["horizontal-divider"]}></div>
        </div>
        <div className={classes['service-type-item']}>
          <div className={classes["service-type-name"]}>
            <p className="text-03">Router<br/></p>
          </div>
          <div className={classes["horizontal-divider"]}></div>
        </div>
        
          </div>
      </div>
    </div>
  </section>
  )
}

export default Skills;