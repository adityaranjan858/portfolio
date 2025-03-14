import React from "react";
import heroImage from "../assets/heroImage.png";
import Button from './../utils/Button';
import icon from '../assets/manIcon.png';
// import "../../public/Aditya_Ranjan Resume.pdf"

const HeroSection = () => {
  const downloadHandler = () => {
    window.open("../public/Aditya_Ranjan_Resume.pdf", "_blank");

  } 
  return (
    <>
      <section className="bg-gray-900 text-white  flex items-center justify-center px-6 my-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <div>
          <small className="flex items-center gap-2 justify-center md:justify-start"><img className="w-6 h-6" src={icon} alt="icon loading..." /><span><i className="fa-solid animate-pulse  fa-xs text-green-500 fa-circle"></i></span> Available for Opportunities</small>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight ">
          Building User-Friendly & Responsive Web Interfaces
          </h1>
          <p className="text-gray-400 mt-4 text-lg sm:text-justify md:text-left">
          A frontend developer passionate about creating seamless user experiences with modern web technologies.</p>
          </div>
          <div className="mt-6 flex flex-col justify-center md:justify-start sm:flex-row  text-center ">
            <Button className="font-medium " onClick={downloadHandler}>
              Download Resume <i className="fa-solid ps-2 animate-bounce fa-download"></i>
            </Button>
            {/* <Link to="/contacts" className="border border-gray-500 hover:border-white text-white px-6 py-3 rounded-lg font-medium transition">
              Contact Me
            </Link> */}
          </div>
        </div>
        
        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Hero"
            className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full bg-radial-[at_75%_75%] from-primary to-gray-900 to-55%  shadow-lg "
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
