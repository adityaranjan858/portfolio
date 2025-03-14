import React, { useEffect, useState } from "react";
import Button from "./Button";
import heroImage from "../assets/heroImage.png";
import { toggle } from "../store/slices/projectsSlice";
import { useDispatch } from "react-redux";
import Modal from "./Modal";

const ProjectsCard = ({ projects, visibility, videos }) => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isRotated, setIsRotated] = useState(false);
  const [videoId, setVideoId] = useState({})
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (visibility && isMobile) {
      setTimeout(() => {
        setIsRotated(true);
      }, 300);
    } else {
      setIsRotated(false);
    }
  }, [visibility, isMobile]);

  return (
    <>
      {projects.length > 0 &&
        projects.map((item) => (
          <div
            className="border border-gray-500 rounded-3xl p-4 bg-gray-800 space-y-4 hover:bg-gray-700 shadow-lg hover:shadow-gray-600 scale-100 hover:scale-105 transition ease-in-out duration-500 flex flex-col justify-between "
            key={item.id}
          >
            <div className="space-y-4">
              <div>
                <img
                  className="mx-auto border block rounded-2xl w-full h-auto sm:mx-0 sm:shrink-0"
                  src={heroImage}
                  alt="projectSampleImage"
                />
              </div>

              <div className="">
                <div className="space-y-2">
                  <p className="text-lg font-semibold">{item.heading}</p>
                  <div className="flex justify-between">
                    <div>
                      <ul className="flex flex-wrap gap-1 text-sm">
                        {item.technology.split(" ").map((lang, index) => (
                          <li
                            className="font-medium inline px-2 py-0.5 rounded-lg bg-gray-600  text-neutral-800"
                            key={index}
                          >
                            {lang.split("").slice(0, -1)}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <a href={item.liveLink} className="" target="_blank">
                        <i className="fa-solid text-sky-500 text-5xl hover:text-sky-600 fa-square-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between flex-wrap ">
              <a
                href={item.githubLink}
                target="_blank"
                className="border border-primary rounded-3xl px-4 sm:px-6 md:px-8 py-2 hover:border-primary-hover hover:bg-primary hover:text-white text-primary "
              >
                Github <i className="fa-solid ms-2 fa-up-right-from-square"></i>
              </a>
              <Button
                bgColor="bg-none"
                className="border px-4 sm:px-6 md:px-8 py-2 border-primary hover:border-primary-hover hover:bg-primary hover:text-white text-primary"
                onClick={() =>{ dispatch(toggle(true)); setVideoId(item.heading)} } 
              >
                Video <i className="fa-solid ms-2 fa-up-right-from-square"></i>
              </Button>
            </div>
          </div>
        ))}

      {visibility && (
        <Modal>
          <div
            className={`relative flex justify-center items-center transition-transform duration-500 ${
              isRotated ? "rotate-90 w-full h-2/4 border-2" : "w-4/5 h-auto"
            }`}
          >
            <video
              className="w-full h-full max-h-[95vh] max-w-[95vw] rounded-lg"
              autoPlay
              controls
            >
              <source src={videos[videoId]} type="video/mp4" />
            </video>

            <button
              className="absolute top-0 right-0 bg-gray-900 hover:bg-primary-hover border-2 hover:border-primary-hover w-10 h-10 rounded-full text-white cursor-pointer z-10"
              onClick={() => dispatch(toggle(false))}
            >
<i className="fa-solid fa-xl fa-xmark"></i>
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProjectsCard;
