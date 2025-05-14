import React from "react";
import logo from "../assets/logo.png";
const About = () => {
  return (
    <>
      <section className=" text-white flex items-center justify-center px-6 py-12">
        <div className="bg-gray-700 p-6 rounded-lg">
          <p className=" pb-3 w-full text-justify sm:text-left sm:w-10/12">
             Welcome! I'm  <span className="text-primary ">Aditya Ranjan</span>, a <span className="text-primary ">Frontend Developer</span>  dedicated to crafting smooth and intuitive user
            experiences with modern web technologies. With a strong foundation
            in <span className="text-primary ">React.js</span>  and <span className="text-primary ">JavaScript</span> , I enjoy transforming ideas into visually
            engaging and functional interfaces. My journey in tech has been
            driven by continuous learning, problem-solving, and a passion for
            building interactive digital experiences. Despite a career
            gap nearly two years, I've remained committed to honing my skills and staying
            up-to-date with the latest advancements in frontend development.
          </p>

          <div className="flex justify-between leading-2">
            <div className="flex space-x-4">
              <div>
                <div className="flex items-center">
                  <span className="text-4xl font-bold">5</span>
                  <span className="text-primary text-3xl font-bold">+</span>
                </div>{" "}
                <small className="font-bold text-gray-400 ">Projects Done</small>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-4xl font-bold">1.8</span>
                  {/* <span className="text-primary text-3xl font-bold">+</span> */}
                </div>{" "}
                <small className="font-bold  text-gray-400 ">Years of Experience</small>
              </div>
            </div>
            <div>
              <img className="w-12 h-12" src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
