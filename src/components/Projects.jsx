import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectsCard from "../utils/ProjectsCard";
import { fetchProjects } from "../store/slices/projectsSlice";
import ShimmerProjectsCard from "../utils/ShimmerProjectsCard";
import todoImages from "../assets/ToDo Project.png";
import urbantrendImages from "../assets/urban trend project.png";
import devDineImages from "../assets/devdineproject.png";
import portfolioImages from "../assets/portfolio.png";

const Projects = () => {
  const {projects, isLoading, error, isVisible} = useSelector( state => state.projects)
  const videos = {
    // Key should be same as project heading
    "Urban Trend Store App": "",
    "ToDo App": "",
    "Portfolio": "",
    "Dev Dine" : "",
  }
  const images = {
    // Key should be same as project heading
    "Urban Trend Store App": urbantrendImages,
    "ToDo App": todoImages,
    "Portfolio": portfolioImages,
    "Dev Dine": devDineImages,
  }

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchProjects())
  },[dispatch])

  return (
    <section className="bg-gray-900 text-white flex flex-col  items-center justify-center px-6 py-12">
      <div className="text-center md:text-left w-full mb-5">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">My Portfolio Highlights</h1>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {isLoading ? ([...Array(6).keys()].map((_,index) => <ShimmerProjectsCard key={index} />)) : (error ? (<h1>{error}</h1>) : <ProjectsCard projects= {projects} visibility={isVisible} videos={videos}  images={images}/>)}
      </div>
    </section>
  );
};

export default Projects;
