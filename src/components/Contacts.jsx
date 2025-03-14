import React from "react";
import contactImage from "../assets/contact.jpg";
const Contacts = () => {
  return (
    <>
      <section className="bg-gray-900 text-white  flex items-center justify-center px-6 py-12">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Let's Connect
            </h1>
            <p className="text-gray-400 mt-4 text-lg sm:text-justify md:text-left">
              I'm always open to new opportunities and collaborations. Whether
              it's a project, a job, or just a chat, feel free to reach out.
              Let's create something amazing together!
            </p>
            <div className="mt-6 flex flex-row justify-center md:justify-start">
              <a
                href="https://github.com/adityaranjan858
"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-3 rounded-full transition hover:text-primary border border-gray-900 hover:border-primary flex items-center justify-center w-10 h-10"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-ranjan-7b1785203/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-3 rounded-full transition hover:text-primary border border-gray-900 hover:border-primary flex items-center justify-center w-10 h-10"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="mailto:adityaranjan858@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-3 rounded-full transition hover:text-primary border border-gray-900 hover:border-primary flex items-center justify-center w-10 h-10"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
                <a href="https://wa.me/9144154686" target="_blank" className="text-white p-3 rounded-full transition hover:text-primary border border-gray-900 hover:border-primary flex items-center justify-center w-10 h-10"> <i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={contactImage}
              alt="Contact Image"
              className="w-full max-w-md rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
