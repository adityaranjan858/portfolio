import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectsCard from "../utils/ProjectsCard";
import { fetchProjects } from "../store/slices/projectsSlice";
import ShimmerProjectsCard from "../utils/ShimmerProjectsCard";
import test1Video from "../assets/test1.mp4";
import test2Video from "../assets/test2.mp4";
const Projects = () => {
  const {projects, isLoading, error, isVisible} = useSelector( state => state.projects)
  const videos = {
    "Urban Trend Store App": test1Video,
    "ToDo App": test2Video
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
      {isLoading ? ([...Array(6).keys()].map((_,index) => <ShimmerProjectsCard key={index} />)) : (error ? (<h1>{error}</h1>) : <ProjectsCard projects= {projects} visibility={isVisible} videos={videos} />)}
      </div>
    </section>
  );
};

export default Projects;
