import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwindcss.png";
import redux from "../assets/redux.png";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import jest from "../assets/jest.png";
import restapi from "../assets/rest-api.png";
import rtl from "../assets/rtl.png";
import vite from "../assets/vite.png";

const Skills = () => {

  const skillIcons = [
    {name : "React", icon : react},
    {name : "JavaScript", icon : js},
    {name : "Redux Toolkit", icon : redux},
    {name : "REST APIs", icon : restapi},
    {name : "Tailwind CSS", icon : tailwind},
    {name : "HTML", icon : html},
    {name : "CSS", icon : css},
    {name : "Vite", icon : vite},
    {name : "BootStrap", icon : bootstrap},
    {name : "Git/Github", icon : github},
    {name : "Jest", icon : jest},
    {name : "React Testing Library", icon : rtl},
  ];

  return (
    <>
      <section className="text-white  px-6 py-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Essential Tools I use
          </h1>
          <p className=" text-gray-500">
            Discover the powerful tools and technologies that drive my web
            development journey.
          </p>
        </div>
        <div>
          <ul className="list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
            {skillIcons.length > 0 &&
              skillIcons.map((item, index) => (
                <li
                  key={index}
                  className="py-2 px-4 text-left border hover:bg-gray-800 border-gray-500 w-full rounded-2xl"
                >
                  <div className="flex items-center gap-2">
                
                      <img
                        className="w-10 h-10"
                        src={item.icon}
                        alt="icons"
                      />{" "}
                      {item.name}

                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Skills;
