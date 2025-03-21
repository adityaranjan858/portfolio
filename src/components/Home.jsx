import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Home = () => {
  return (
    <>
      <div className="w-full sm:max-w-8/12 md:max-w-12/12 lg:max-w-10/12 mx-auto sm:p-6 text-white shadow-lg ">
        <Navbar />
          <HeroSection />
          <About />
          <Projects />
          <Skills />
          <Contacts />
          <Footer />
      </div>
    </>
  );
};

export default Home;
